var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RenderListener = class RenderListener extends LitElement {
    constructor() {
        super(...arguments);
        this.canCheck = false;
    }
    render() {
        return html `
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? 'Allowing' : 'Preventing'} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
    }
    _checkedHandler(e) {
        if (!this.canCheck) {
            e.preventDefault();
            e.detail.message = '🚫 Prevented!!';
        }
    }
    _clickHandler() {
        this.canCheck = !this.canCheck;
    }
};
__decorate([
    property()
], RenderListener.prototype, "canCheck", void 0);
RenderListener = __decorate([
    customElement('render-listener')
], RenderListener);
//# sourceMappingURL=render-listener.js.map