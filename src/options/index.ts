export const mergeOptions = (options: IOptions) => {
    const defaultOptions: IOptions = {
        cache: true,
        cacheId: "uvstat",
        loading: '<svg style="background: none;vertical-align: bottom;" width="160px"  height="160px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="20" stroke-width="4" stroke="#3b3e43" stroke-dasharray="31.41592653589793 31.41592653589793" transform="rotate(111.924 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="15" stroke-width="4" stroke="#d23f31" stroke-dasharray="23.561944901923447 23.561944901923447" stroke-dashoffset="23.561944901923447" transform="rotate(-111.924 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>',
        location: {
            hash: false,
            pathname: true,
            search: false,
        },
        renderName: "uvstaturl",
        timeout: 2000,
        url: "https://hacpai.com/uvstat",
        structure: 'parent', // parent | self
        showCount: 1
    };

    if (options && options.location) {
        options.location = Object.assign({}, defaultOptions.location, options.location);
    }

    return Object.assign({}, defaultOptions, options);
};
