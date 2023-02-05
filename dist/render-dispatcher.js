var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
let RenderDispatcher = class RenderDispatcher extends LitElement {
    constructor() {
        super(...arguments);
        this.listItems = [
            { text: 'Find some bugs', complete: false },
            { text: 'Start learning Lit', complete: false },
        ];
        this.label = 'Check me!';
        this.defaultMessage = '✅ Allowed';
        this.message = this.defaultMessage;
    }
    render() {
        return html `
    <p>TODO List (Communication btw. Events)</p>
    <input id="input"></input>
    <button @click="${this._tryChange}">Add Item</button>
    <ul>
    ${this.listItems.map((item) => html `<li>${item.text}</li>`)}
    </ul>
    <div>${this.message}</div>
    `;
    }
    _tryChange(e) {
        const detail = { message: this.message };
        const event = new CustomEvent('checked', { detail, bubbles: true, composed: true, cancelable: true });
        this.dispatchEvent(event);
        if (event.defaultPrevented) {
            e.preventDefault();
        }
        else {
            this.addItem();
        }
        this.message = detail.message;
    }
    updated() {
        clearTimeout(this._resetMessage);
        this._resetMessage =
            setTimeout(() => this.message = this.defaultMessage, 1000);
    }
    addItem() {
        console.log('addItem');
        this.listItems = [
            ...this.listItems,
            { text: this.input.value, complete: false },
        ];
        this.input.value = '';
    }
};
__decorate([
    state()
], RenderDispatcher.prototype, "listItems", void 0);
__decorate([
    property()
], RenderDispatcher.prototype, "label", void 0);
__decorate([
    property()
], RenderDispatcher.prototype, "message", void 0);
__decorate([
    query('#input')
], RenderDispatcher.prototype, "input", void 0);
RenderDispatcher = __decorate([
    customElement('render-dispatcher')
], RenderDispatcher);
//# sourceMappingURL=render-dispatcher.js.map