import { LitElement } from 'lit';
declare class TodoListener extends LitElement {
    private listItems;
    name: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private addTodo;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-listener': TodoListener;
    }
}
export {};
//# sourceMappingURL=todo-listener.d.ts.map