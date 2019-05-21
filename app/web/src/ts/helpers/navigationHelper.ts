export function initNavMenu(): void {
    $(document).on("click", ".inner-nav", (e: Event) => {
        e.preventDefault();
        const href = $(e.currentTarget).attr("href");
        if (window.history) {
            window.history.pushState(null,"",href);
        }
        navigate();
    });
}

export function navigate(): void {
    const loc = window.location;
    const path = loc.pathname;
    const search = loc.search;
    console.log(`${path} ${search}`);
}