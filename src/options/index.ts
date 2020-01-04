export const mergeOptions = (options: IOptions) => {
    const defaultOptions = {
        url: 'https://hacpai.com/uvstat',
        cache: true,
        cacheId: 'uvstat',
        renderName: 'uvstaturl'
    }

    return Object.assign({}, defaultOptions, options)
}
