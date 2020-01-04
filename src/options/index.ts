export const mergeOptions = (options: IOptions) => {
    const defaultOptions = {
        url: 'https://hacpai.com/uvstat',
        cache: true,
        cacheId: 'uastat',
        renderName: 'uastaturl'
    }

    return Object.assign({}, defaultOptions, options)
}
