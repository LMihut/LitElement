import { LitElement } from 'lit';
declare class RenderListener extends LitElement {
    canCheck: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _checkedHandler;
    private _clickHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'render-listener': RenderListener;
    }
}
export {};
//# sourceMappingURL=render-listener.d.ts.map