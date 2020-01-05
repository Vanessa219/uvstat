import {mergeOptions} from "./options";
import {post} from "./util/fetch";

class Uvstat {
    private options: IOptions;

    constructor(options?: IOptions) {
        this.options = mergeOptions(options);
    }

    public async getStat(urls: string[], timeout: number = 0) {
        const responseData = await post(`${this.options.url}/get`, {
            data: urls,
        }, timeout);
        return responseData.data;
    }

    public async renderStat() {
        const urls: string[] = [];
        document.querySelectorAll(`[data-${this.options.renderName}]`).forEach((item) => {
            urls.push(item.getAttribute(`data-${this.options.renderName}`));
            item.innerHTML = this.options.loading
            const height = item.getBoundingClientRect().height;
            (item.firstElementChild as HTMLElement).style.height = height + 'px';
            (item.firstElementChild as HTMLElement).style.width = height + 'px';
        });

        try {
            const statData = await this.getStat(urls, this.options.timeout);
            Object.keys(statData).forEach((key) => {
                const renderElement: HTMLElement = document.querySelector(`[data-${this.options.renderName}="${key}"]`);
                if (!renderElement) {
                    return
                }
                if (statData[key] >= this.options.showCount) {
                    if (this.options.structure === 'parent') {
                        renderElement.parentElement.style.display = 'initial'
                    } else {
                        renderElement.style.display = 'initial'
                    }
                    renderElement.innerText = statData[key].toString();
                } else {
                    if (this.options.structure === 'parent') {
                        renderElement.parentElement.style.display = 'none'
                    } else {
                        renderElement.style.display = 'none'
                    }
                }
            });
        } catch (e) {
            urls.forEach((key) => {
                const renderElement: HTMLElement = document.querySelector(`[data-${this.options.renderName}="${key}"]`);
                if (!renderElement) {
                    return
                }
                if (this.options.structure === 'parent') {
                    renderElement.parentElement.style.display = 'none'
                } else {
                    renderElement.style.display = 'none'
                }
            });
        }
    }

    public setStat() {
        let url = location.origin + location.pathname;
        if (this.options.location.pathname) {
            url += location.pathname;
        }
        if (this.options.location.search) {
            url += location.search;
        }
        if (this.options.location.hash) {
            url += location.hash;
        }

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
