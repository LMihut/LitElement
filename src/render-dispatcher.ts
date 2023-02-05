import {LitElement, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';

@customElement('render-dispatcher')
class RenderDispatcher extends LitElement {
  @state()
  private listItems = [
    {text: 'Find some bugs', complete: false},
    {text: 'Start learning Lit', complete: false},
  ];
  @property() label = 'Check me!';
  defaultMessage = '✅ Allowed';
  @property() message = this.defaultMessage;
  private _resetMessage?: ReturnType<typeof setTimeout>;

  protected override render() {
    return html`
    <p>TODO List (Communication btw. Events)</p>
    <input id="input"></input>
    <button @click="${this._tryChange}">Add Item</button>
    <ul>
    ${this.listItems.map((item) => html`<li>${item.text}</li>`)}
    </ul>
    <div>${this.message}</div>
    `;
  }
  private _tryChange(e: Event) {
    const detail = {message: this.message};
    const event = new CustomEvent('checked', {detail, bubbles: true, composed: true, cancelable: true});
    this.dispatchEvent(event);
    if (event.defaultPrevented) {
      e.preventDefault();
    } else { this.addItem()}
    this.message = detail.message;
  }
  
  protected override updated() {
    clearTimeout(this._resetMessage);
    this._resetMessage =
      setTimeout(() => this.message = this.defaultMessage, 1000);
  }
  
  @query('#input')
  input!: HTMLInputElement;

  addItem() {
    console.log('addItem')
    this.listItems = [
      ...this.listItems,
      {text: this.input.value, complete: false},
    ];
    this.input.value = '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'render-dispatcher': RenderDispatcher;
  }
}
