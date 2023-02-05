import { LitElement } from 'lit';
declare class TodoDispatcher extends LitElement {
    input: HTMLInputElement;
    render(): import("lit-html").TemplateResult<1>;
    private dispatchTodo;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-dispatcher': TodoDispatcher;
    }
}
export {};
//# sourceMappingURL=todo-dispatcher.d.ts.map