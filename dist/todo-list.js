var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
let ToDoList = class ToDoList extends LitElement {
    constructor() {
        super(...arguments);
        this.listItems = [
            { text: 'Find some bugs', complete: false },
            { text: 'Start learning Lit', complete: false },
        ];
    }
    render() {
        return html `
    <p>TODO List (without Events)</p>
    <input id="input"></input>
    <button @click="${this.addItem}">Add Item</button>
    <ul>
    ${this.listItems.map((item) => html `<li>${item.text}</li>`)}
    </ul>
    `;
    }
    addItem() {
        this.listItems = [
            ...this.listItems,
            { text: this.input.value, complete: false },
        ];
        this.input.value = '';
    }
};
__decorate([
    state()
], ToDoList.prototype, "listItems", void 0);
__decorate([
    query('#input')
], ToDoList.prototype, "input", void 0);
ToDoList = __decorate([
    customElement('todo-list')
], ToDoList);
export { ToDoList };
//# sourceMappingURL=todo-list.js.map