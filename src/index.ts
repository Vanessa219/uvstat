import {mergeOptions} from "./options";
import {post} from "./util/fetch";

class Uvstat {
    private options: IOptions

    constructor(options?: IOptions) {
        this.options = mergeOptions(options)
    }

    async getStat(urls: string[]) {
        const responseData = await post(`${this.options.url}/get`, {
            data: urls
        })
        return responseData.data;
    }

    async renderStat() {
        let urls: string[] = []
        document.querySelectorAll(`[data-${this.options.renderName}]`).forEach(item => {
            urls.push(item.getAttribute(`data-${this.options.renderName}`))
        })

        const statData = await this.getStat(urls)
        Object.keys(statData).forEach(key => {
            const renderElement: HTMLElement = document.querySelector(`[data-${this.options.renderName}="${key}"]`)
            if (renderElement) {
                renderElement.innerText = statData[key]
            }
        })
    }

    setStat() {
        const url = location.origin + location.pathname
        const cache = JSON.parse(localStorage.getItem(this.options.cacheId) || '[]')
        if (cache.includes(url)) {
            return
        }
        post(`${this.options.url}/inc?url=${url}`)
        cache.push(url)
        localStorage.setItem(this.options.cacheId, JSON.stringify(cache))
    }

    clearCache() {
        localStorage.removeItem(this.options.cacheId)
    }
}

export default Uvstat
