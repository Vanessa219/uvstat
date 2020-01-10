interface IOptions {
    cache?: boolean;
    url?: string;
    cacheId?: string;
    renderName?: string;
    timeout?: number;
    loading?: string;
    location?: {
        pathname: boolean,
        search: boolean,
        hash: boolean,
    };
}

interface IUrlCount {
    url: string;
    count: number;
}

interface IResponse {
    msg: string;
    code: number;
    data: { [key: string]: number };
}

declare class IUvstatConstructor {

    public getStat(urls: IUrlCount[], timeout?: number): string[];

    public setStat(): void;

    public renderStat(): void;

    public clearCache(): void;
}
