export const getCounts = (renderCmtName: string, loading: string, key: keyof ICount) => {
    const counts: ICount[] = [];
    document.querySelectorAll(`[data-${renderCmtName}]`).forEach((item) => {
        const ocount = parseInt(item.textContent.trim().replace(/,/g, "")
            .replace(/ /g, ""), 10) || 0;
        counts.push({
            count: ocount,
            [key]: item.getAttribute(`data-${renderCmtName}`).toLowerCase(),
        });
        const height = item.getBoundingClientRect().height;
        item.innerHTML = loading;
        item.setAttribute("data-ocount", ocount.toString());
        (item.firstElementChild as HTMLElement).style.height = height + "px";
        (item.firstElementChild as HTMLElement).style.width = height + "px";
    });
    return counts;
};

export const renderSucc = (statData: { [key: string]: number }, renderName: string,
                           after?: (element: Element, cnt: number) => void) => {
    Object.keys(statData).forEach((key) => {
        const renderElements =
            document.querySelectorAll(`[data-${renderName}="${key}" i]`);
        if (renderElements.length === 0) {
            return;
        }
        if (statData[key] === -1) {
            renderElements.forEach((element) => {
                const cnt = element.getAttribute("data-ocount");
                element.innerHTML = cnt;
                if (after) {
                    after(element, parseInt(cnt, 10));
                }
            });
        } else {
            renderElements.forEach((element) => {
                const cnt = statData[key];
                element.innerHTML = cnt.toString();
                if (after) {
                    after(element, cnt);
                }
            });
        }
    });
};

export const renderError = (counts: ICount[], renderName: string, key: keyof ICount,
                            after?: (element: Element, cnt: number) => void) => {
    counts.forEach((count) => {
        const renderElements = document.querySelectorAll(`[data-${renderName}="${count[key]}" i]`);
        if (renderElements.length === 0) {
            return;
        }
        renderElements.forEach((element) => {
            const cnt = element.getAttribute("data-ocount");
            element.innerHTML = cnt;
            if (after) {
                after(element, parseInt(cnt, 10));
            }
        });
    });
};
