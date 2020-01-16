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

interface IUrlCount {
    url: string;
    count: number;
}

interface ICmtCount {
    id: string;
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

    public renderCmtStat(): void;

    public clearCache(): void;
}
