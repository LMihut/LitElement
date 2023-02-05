import {html, LitElement} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';

@customElement('todo-list')
export class ToDoList extends LitElement {
  @state()
  private listItems = [
    {text: 'Find some bugs', complete: false},
    {text: 'Start learning Lit', complete: false},
  ];

  override render() {
    return html`
    <p>TODO List (without Events)</p>
    <input id="input"></input>
    <button @click="${this.addItem}">Add Item</button>
    <ul>
    ${this.listItems.map((item) => html`<li>${item.text}</li>`)}
    </ul>
    `;
  }

  @query('#input')
  input!: HTMLInputElement;

  addItem() {
    this.listItems = [
      ...this.listItems,
      {text: this.input.value, complete: false},
    ];
    this.input.value = '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': ToDoList;
  }
}
