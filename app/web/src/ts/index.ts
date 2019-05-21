import "../css/normalize.css";
import "../css/main.css";
import { log } from "./helpers/logHelper";

let translations: any = null;

function initApp(): void {    
    import(
        /* webpackChunkName: "navigationHelper" */ 
        /* webpackMode: "lazy" */
        "./helpers/navigationHelper"
    ).then(mod => {
        mod.navigate();
        mod.initNavMenu();
    });    
    initCustomCursor();
}

function initCustomCursor(): void {
    const c = document.getElementById('cursor');
    const co = document.getElementById('cursorOuter');
    import(
        /* webpackChunkName: "cursorHelper" */ 
        /* webpackMode: "lazy" */
        "./helpers/cursorHelper"
    ).then(mod => {
        new mod.CustomCursor(c, co).init();
    });    
}

$(window).on("load", () => {
    initApp();
});