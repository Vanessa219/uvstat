import {mergeOptions} from "./options";
import {post} from "./util/fetch";
import {getCounts, renderError, renderSucc} from "./util/render";

class Uvstat {
    private options: IOptions;

    constructor(options?: IOptions) {
        this.options = mergeOptions(options);
    }

    public async getStat(urls: ICount[], timeout: number = 0) {
        const responseData = await post(`${this.options.url}/get`, {
            data: urls,
        }, timeout);
        return responseData.data;
    }

    public async getCmtStat(cmts: ICount[], timeout: number = 0) {
        const responseData = await post(this.options.cmtAPI, {
            data: cmts,
        }, timeout);
        return responseData.data;
    }

    public async renderStat() {
        const urls = getCounts(this.options.renderName, this.options.loading, "url");
        if (urls.length === 0) {
            return;
        }

        try {
            const statData = await this.getStat(urls, this.options.timeout);
            renderSucc(statData, this.options.renderName);
        } catch (e) {
            renderError(urls, this.options.renderName, "url");
        }
    }

    public async renderCmtStat() {
        const cmts = getCounts(this.options.renderCmtName, this.options.loading, "id");
        if (cmts.length === 0) {
            return;
        }

        try {
            const statData = await this.getCmtStat(cmts, this.options.timeout);
            renderSucc(statData, this.options.renderCmtName);
        } catch (e) {
            renderError(cmts, this.options.renderCmtName, "id");
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
