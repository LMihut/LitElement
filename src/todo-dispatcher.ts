import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';

@customElement('todo-dispatcher')
class TodoDispatcher extends LitElement {
  @query('input', true)
  input!: HTMLInputElement;

  override render() {
    return html`
    <p>TODO List (with Events)</p>
    <input id="input"></input>
    <button @click=${this.dispatchTodo}>Add Item</button>
    `;
  }
  private dispatchTodo() {
    const name = this.input.value;
    if (name) {
      const options = {
        detail: {name},
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent('mytodo', options));
      this.input.value = '';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-dispatcher': TodoDispatcher;
  }
}
