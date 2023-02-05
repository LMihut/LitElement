import { LitElement } from 'lit';
declare class RenderDispatcher extends LitElement {
    private listItems;
    label: string;
    defaultMessage: string;
    message: string;
    private _resetMessage?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _tryChange;
    protected updated(): void;
    input: HTMLInputElement;
    addItem(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'render-dispatcher': RenderDispatcher;
    }
}
export {};
//# sourceMappingURL=render-dispatcher.d.ts.map