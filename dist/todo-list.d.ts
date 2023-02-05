import { LitElement } from 'lit';
export declare class ToDoList extends LitElement {
    private listItems;
    render(): import("lit-html").TemplateResult<1>;
    input: HTMLInputElement;
    addItem(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-list': ToDoList;
    }
}
//# sourceMappingURL=todo-list.d.ts.map