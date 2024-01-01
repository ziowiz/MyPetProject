import Todo from "./Todo";
import style from "../block2.css";
//список задач
function TodoList({ todos, deleteTodo, toggleTodoHandler }) {
	return (
		<div className={style.todoListContainer}>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					toggleTodoHandler={toggleTodoHandler}
				/>
			))}
		</div>
	);
}
export default TodoList;
