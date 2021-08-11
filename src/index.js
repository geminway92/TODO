import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml, anchorFiltros } from './js/componentes';





export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml);

console.log( 'todos', todoList.todos);
