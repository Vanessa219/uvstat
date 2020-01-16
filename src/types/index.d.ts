interface IOptions {
    cache?: boolean;
    url?: string;
    cacheId?: string;
    renderName?: string;
    renderCmtName?: string;
    timeout?: number;
    loading?: string;
    location?: {
        pathname: boolean,
        search: boolean,
        hash: boolean,
    };
    cmtAPI?: string;
}

interface ICount {
    url?: string;
    count: number;
    id?: string;
}

interface IResponse {
    msg: string;
    code: number;
    data: { [key: string]: number };
}

declare class IUvstatConstructor {

    public getStat(urls: ICount[], timeout?: number): string[];

    public getCmtStat(urls: ICount[], timeout?: number): string[];

    public setStat(): void;

    public renderStat(): void;

    public renderCmtStat(): void;

    public clearCache(): void;
}
