import TodoForm from "./todos/TodoForm";
import TodoList from "./todos/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./todos/TodosAction";
import { useState, useEffect } from "react";
function Block2() {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	const addTofoHandler = (text) => {
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
		console.log(newTodo);
	};
	const deleteTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				console.log("click action");
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo };
			})
		);
	};

	const textNotHave = "empty todo";
	const resetTodoHandler = () => {
		setTodos([]);
	};
	const deleteComplitedHandler = (id) => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};
	const completedTodos = todos.filter((todo) => todo.isCompleted).length;
	return (
		<div className="block_2_bg">
			<div className="block_2">
				<h1 className="block_2_text">Сreate Todo list</h1>
				<TodoForm
					addTodo={addTofoHandler}
					className="block_2_form"
				/>
				{todos.length === 0 ? (
					""
				) : (
					<TodosActions
						resetTodos={resetTodoHandler}
						deleteComplited={deleteComplitedHandler}
						completedAccestedTodos={!completedTodos}
					/>
				)}

				{!todos.length ? (
					<h2 className="block_2_text">{textNotHave}</h2>
				) : (
					<TodoList
						todos={todos}
						deleteTodo={deleteTask}
						toggleTodoHandler={toggleTodoHandler}
					/>
				)}
				{!completedTodos ? (
					""
				) : (
					<h3 className="block_2_text">
						Done {completedTodos} {completedTodos < 2 ? "task" : "tasks"}
					</h3>
				)}
			</div>
		</div>
	);
}
export default Block2;
