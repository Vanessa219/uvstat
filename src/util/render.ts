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

export const renderSucc = (statData: { [key: string]: number }, renderName: string) => {
    Object.keys(statData).forEach((key) => {
        const renderElements =
            document.querySelectorAll(`[data-${renderName}="${key}" i]`);
        if (renderElements.length === 0) {
            return;
        }
        if (statData[key] === -1) {
            renderElements.forEach((element) => {
                element.innerHTML = element.getAttribute("data-ocount");
            });
        } else {
            renderElements.forEach((element) => {
                element.innerHTML = statData[key].toString();
            });
        }
    });
};

export const renderError = (counts: ICount[], renderName: string, key: keyof ICount) => {
    counts.forEach((count) => {
        const renderElements = document.querySelectorAll(`[data-${renderName}="${count[key]}" i]`);
        if (renderElements.length === 0) {
            return;
        }
        renderElements.forEach((element) => {
            element.innerHTML = element.getAttribute("data-ocount");
        });
    });
};
