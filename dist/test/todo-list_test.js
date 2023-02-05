import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { ToDoList } from '../todo-list';
suite('todo-list', () => {
    test('is defined', () => {
        const el = document.createElement('todo-list');
        assert.instanceOf(el, ToDoList);
    });
    test('renders with default values', async () => {
        const el = await fixture(html `<todo-list></todo-list>`);
        assert.shadowDom.equal(el, `
          <p>TODO List (without Events)</p>
          <input id="input"></input>
          <button>Add Item</button>
          <ul>
            <li>Find some bugs</li>
            <li>Start learning Lit</li>
          </ul>
        `);
    });
    test('handles a click', async () => {
        const el = (await fixture(html `<todo-list></todo-list>`));
        const button = el.shadowRoot.querySelector('button');
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(el, `
          <p>TODO List (without Events)</p>
          <input id="input"></input>
          <button>Add Item</button>
          <ul>
            <li>Find some bugs</li>
            <li>Start learning Lit</li>
            <li></li>
          </ul>
        `);
    });
});
//# sourceMappingURL=todo-list_test.js.map