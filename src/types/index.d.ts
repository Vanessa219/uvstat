interface IOptions {
    cache?: boolean;
    url?: string,
    cacheId?: string
    renderName?: string
}

interface IResponse {
    msg: string;
    code: number,
    data: { [key: string]: string }
}

declare class IUastatConstructor {

    public getStat(): string[];

    public setStat(): void;

    public renderStat(): void;

    public clearCache(): void;
}
