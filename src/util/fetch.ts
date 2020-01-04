export const post = (url: string, data?: { data: string[] }) => {
    return new Promise<IResponse>((resolve) => {
        fetch(url, {
            body: JSON.stringify(data),
            cache: 'no-cache',
            method: 'POST',
        }).then(function (response: Response) {
            return response.json();
        }).then(function (responseData: IResponse) {
            return resolve(responseData)
        });
    });
}
