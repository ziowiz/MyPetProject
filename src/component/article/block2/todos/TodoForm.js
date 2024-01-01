// форма отправки

import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
	const [text, setText] = useState("");
	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (text.trim().length > 0) {
			addTodo(text);
			setText("");
		}
	};
	return (
		<div className={styles.todoFormContateiner}>
			<form
				onSubmit={onSubmitHandler}
				className="block_2_form"
			>
				<input
					placeholder="new task"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button
					type="submit"
					title="add task"
				>
					{" "}
					Add task{" "}
				</Button>
			</form>
		</div>
	);
}
export default TodoForm;
