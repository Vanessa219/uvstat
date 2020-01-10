import {mergeOptions} from "./options";
import {post} from "./util/fetch";

class Uvstat {
    private options: IOptions;

    constructor(options?: IOptions) {
        this.options = mergeOptions(options);
    }

    public async getStat(urls: IUrlCount[], timeout: number = 0) {
        const responseData = await post(`${this.options.url}/get`, {
            data: urls,
        }, timeout);
        return responseData.data;
    }

    public async renderStat() {
        const urls: IUrlCount[] = [];
        document.querySelectorAll(`[data-${this.options.renderName}]`).forEach((item) => {
            urls.push({
                count: parseInt(item.textContent.trim().replace(/,/g, '')
                    .replace(/ /g, ''), 10) || 0,
                url: item.getAttribute(`data-${this.options.renderName}`).toLowerCase(),
            });
            const height = item.getBoundingClientRect().height;
            item.innerHTML = this.options.loading;
            (item.firstElementChild as HTMLElement).style.height = height + "px";
            (item.firstElementChild as HTMLElement).style.width = height + "px";
        });

        if (urls.length === 0) {
            return;
        }

        try {
            const statData = await this.getStat(urls, this.options.timeout);
            Object.keys(statData).forEach((key) => {
                const renderElement: HTMLElement =
                    document.querySelector(`[data-${this.options.renderName}="${key}" i]`);
                if (!renderElement) {
                    return;
                }
                renderElement.innerText = statData[key].toString();
            });
        } catch (e) {
            urls.forEach((key) => {
                const renderElement: HTMLElement =
                    document.querySelector(`[data-${this.options.renderName}="${key}" i]`);
                if (!renderElement) {
                    return;
                }
                renderElement.innerText = "0";
            });
        }
    }

    public addStat() {
        let url = location.origin;
        if (this.options.location.pathname) {
            url += location.pathname;
        }
        if (this.options.location.search) {
            url += location.search;
        }
        if (this.options.location.hash) {
            url += location.hash;
        }

        url = url.toLowerCase();
        if (this.options.cache) {
            const cache = JSON.parse(localStorage.getItem(this.options.cacheId) || "[]");
            if (cache.includes(url)) {
                return;
            }
            cache.push(url);
            localStorage.setItem(this.options.cacheId, JSON.stringify(cache));
            post(`${this.options.url}/inc?url=${url}`);
        } else {
            post(`${this.options.url}/inc?url=${url}`);
        }
    }

    public clearCache() {
        localStorage.removeItem(this.options.cacheId);
    }
}

export default Uvstat;
