import styles from "./Todo.module.css";
import { GiAbstract023, GiInterdiction, GiCheckMark } from "react-icons/gi";
// Верхнее меню кнопка + форма
function Todo({ todo, deleteTodo, toggleTodoHandler }) {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.completedTodo : ""
			}`}
			onDoubleClick={() => deleteTodo(todo.id)}
		>
			<GiAbstract023 className={styles.todoIcon} />
			<h3 className={styles.todoText}>{todo.text}</h3>
			<GiInterdiction
				className={styles.deleteIcon}
				onClick={() => deleteTodo(todo.id)}
			/>
			<GiCheckMark
				className={styles.checkIcon}
				onClick={() => toggleTodoHandler(todo.id)}
			/>
		</div>
	);
}
export default Todo;
