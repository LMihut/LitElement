var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
let TodoDispatcher = class TodoDispatcher extends LitElement {
    render() {
        return html `
    <p>TODO List (with Events)</p>
    <input id="input"></input>
    <button @click=${this.dispatchTodo}>Add Item</button>
    `;
    }
    dispatchTodo() {
        const name = this.input.value;
        if (name) {
            const options = {
                detail: { name },
                bubbles: true,
                composed: true,
            };
            this.dispatchEvent(new CustomEvent('mytodo', options));
            this.input.value = '';
        }
    }
};
__decorate([
    query('input', true)
], TodoDispatcher.prototype, "input", void 0);
TodoDispatcher = __decorate([
    customElement('todo-dispatcher')
], TodoDispatcher);
//# sourceMappingURL=todo-dispatcher.js.map