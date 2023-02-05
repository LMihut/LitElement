var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let TodoListener = class TodoListener extends LitElement {
    constructor() {
        super(...arguments);
        this.listItems = [
            { text: 'Find some bugs', complete: false },
            { text: 'Start learning Lit', complete: false },
        ];
        this.name = '';
    }
    render() {
        return html ` <p @mytodo=${this.addTodo}><slot></slot></p>
      <ul>
        ${this.listItems.map((item) => html `<li>${item.text}</li>`)}
      </ul>`;
    }
    addTodo(e) {
        this.listItems = [
            ...this.listItems,
            { text: e.detail.name, complete: false },
        ];
    }
};
__decorate([
    state()
], TodoListener.prototype, "listItems", void 0);
__decorate([
    property()
], TodoListener.prototype, "name", void 0);
TodoListener = __decorate([
    customElement('todo-listener')
], TodoListener);
//# sourceMappingURL=todo-listener.js.map