export class CustomCursor {

    private _cursor: HTMLElement;
    private _cursorOuter: HTMLElement;
  
    constructor(cursor: HTMLElement, cursorOuter: HTMLElement) {
      this._cursor = cursor;
      this._cursorOuter = cursorOuter;
    }
  
    public init() {    
      document.addEventListener("mousemove", (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        if (this._cursor) {
          this._cursor.style.top = `${y}px`;
          this._cursor.style.left = `${x}px`;
        }
        if (this._cursorOuter) {
          this._cursorOuter.style.top = `${y}px`;
          this._cursorOuter.style.left = `${x}px`;
        }        
      });
    }
  
}