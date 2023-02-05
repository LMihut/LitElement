import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('todo-listener')
class TodoListener extends LitElement {
  @state()
  private listItems = [
    {text: 'Find some bugs', complete: false},
    {text: 'Start learning Lit', complete: false},
  ];
  @property() name = '';
  protected override render() {
    return html` <p @mytodo=${this.addTodo}><slot></slot></p>
      <ul>
        ${this.listItems.map((item) => html`<li>${item.text}</li>`)}
      </ul>`;
  }
  
  private addTodo(e: CustomEvent) {
    this.listItems = [
      ...this.listItems,
      {text: e.detail.name, complete: false},
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-listener': TodoListener;
  }
}
