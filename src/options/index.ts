export const mergeOptions = (options: IOptions) => {
    const defaultOptions: IOptions = {
        cache: true,
        cacheId: "uvstat",
        loading: `<svg version="1.1" style="vertical-align: bottom;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
<circle fill="#3b3e43" stroke="none" cx="6" cy="50" r="6">
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
</circle>
<circle fill="#3b3e43" stroke="none" cx="26" cy="50" r="6">
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
</circle>
<circle fill="#3b3e43" stroke="none" cx="46" cy="50" r="6">
<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
</circle>
</svg>`,
        location: {
            hash: false,
            pathname: true,
            search: false,
        },
        renderName: "uvstaturl",
        timeout: 2000,
        url: "https://hacpai.com/uvstat",
    };

    if (options && options.location) {
        options.location = Object.assign({}, defaultOptions.location, options.location);
    }

    return Object.assign({}, defaultOptions, options);
};
