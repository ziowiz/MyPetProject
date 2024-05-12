import TodoForm from "./todos/TodoForm";
import TodoList from "./todos/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./todos/TodosAction";
import { useState, useEffect } from "react";
function Block2() {
	const firstTasks = [
		{
			text: "Task in localStorage",
			isCompleted: true,
			id: "022baadb-43fe-4f1c-82a8-e8a27587cb1d",
		},
		{
			text: "First load",
			isCompleted: false,
			id: "42d33cc6-d629-4a11-9165-588099dca4a6",
		},
		{
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			isCompleted: true,
			id: "a9f1fc6a-ce4f-4b90-bff1-e451ebc921b9",
		},
		{
			text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			isCompleted: false,
			id: "7384366c-7311-4454-93a5-f52355368a9a",
		},
		{
			text: "The standard Lorem Ipsum passage, used since the 1500s",
			isCompleted: false,
			id: "91bf02f8-d94e-4929-b514-b34c103ccc7a",
		},
	];
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || firstTasks
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		console.log(todos);
	}, [todos]);

	const addTofoHandler = (text) => {
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
	};
	const deleteTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) => {
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
	const [messages, setMessages] = useState([]); // Initialize messages as an array
	const [newName, setNewName] = useState("");
	const [newMessage, setNewMessage] = useState("");
	const [error, setError] = useState("");
	useEffect(() => {
		const fetchMessages = () => {
			fetch("src/messages.php")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					if (data && Array.isArray(data)) {
						setMessages(data);
					}
				})
				.catch((err) => {
					console.error("Failed to fetch messages", err);
					setError("Failed to load messages");
				});
		};

		const intervalId = setInterval(fetchMessages, 1000); // Устанавливаем вызов функции каждую секунду

		return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
	}, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании
	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleMessageChange = (event) => {
		setNewMessage(event.target.value);
	};

	const sendMessage = () => {
		if (newMessage.trim() !== "") {
			const messageToSend = {
				name: newName || "anonim",
				message: newMessage.trim(),
			};
			const url = "src/send.php";

			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(messageToSend),
			};
			fetch(url, options)
				.then((response) => {
					if (response.ok) {
						setNewMessage(""); // Очистить поле ввода сообщения
						return response.json();
					}
					throw new Error("Network response was not ok.");
				})

				.catch((err) => {
					console.error("Failed to send message", err);
					setError("Failed to send message");
				});
		}
	};

	return (
		<div className="block_2_bg">
			<div className="block_2_chat">
				<div className="chat">
					<h4>Anonim online chat</h4>
					<div className="chat-messages">
						{messages.length > 0 ? (
							messages.map(
								(
									msg,
									index // 'msg' was missing
								) => (
									<p key={index}>
										{msg.name}: <span>{msg.message}</span>
									</p>
								)
							)
						) : (
							<div>Load...</div>
						)}
					</div>
					<p className="chatError">{error}</p>
					<div className="chat-input">
						<input
							type="login"
							className="chat-name_input"
							value={newName}
							onChange={handleNameChange}
							placeholder="Enter name"
						/>
						<input
							type="message"
							className="chat-form__input"
							placeholder="Enter message"
							value={newMessage}
							onChange={handleMessageChange}
						/>
						<button
							type="button"
							className="chat-form__submit"
							onClick={sendMessage}
						>
							Send
						</button>
					</div>
				</div>
			</div>

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
