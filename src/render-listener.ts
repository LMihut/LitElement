import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('render-listener')
class RenderListener extends LitElement {
  @property() canCheck = false;
  protected override render() {
    return html`
      <p @checked=${this._checkedHandler}><slot></slot></p>
      <hr>
      <p>${this.canCheck ? 'Allowing' : 'Preventing'} check</p>
      <p><button @click=${this._clickHandler}>Toggle</button></p>`;
  }
  private _checkedHandler(e: CustomEvent) {
    if (!this.canCheck) {
      e.preventDefault();
      e.detail.message = '🚫 Prevented!!';
    }
  }
  private _clickHandler() {
    this.canCheck = !this.canCheck;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'render-listener': RenderListener;
  }
}
