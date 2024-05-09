import { useForm } from "react-hook-form";
import "./Forma.css";
import React, { useState, useEffect } from "react";
function Block4() {
	const checkStyle = () => ({ color: "orange" });
	const checkStyleNone = () => ({ color: "white" });
	const [submittedData, setSubmittedData] = useState({});
	const [selectedRadio, setSelectedRadio] = useState("");
	const [checkboxStyle, setCheckboxStyle] = useState(true);
	const [checkboxStyle2, setCheckboxStyle2] = useState(true);

	// Инициализируем состояние данными из localStorage, если они есть
	const [val, setVal] = useState(() => {
		const savedVal = localStorage.getItem("myFormValue");
		return savedVal !== null
			? JSON.parse(savedVal)
			: { login: "", email: "", phone: "" };
	});

	// Сохраняем значение val в localStorage каждый раз, когда оно изменяется
	useEffect(() => {
		// Клонируем объект val без пароля перед сохранением
		const { password, ...rest } = val;
		localStorage.setItem("myFormValue", JSON.stringify(rest));
	}, [val]);
	const radioHandler = (event) => {
		setSelectedRadio(event.target.value);
	};
	const checkboxHandler = () => {
		setCheckboxStyle(checkboxStyle ? false : true);
		console.log(checkboxStyle);
	};
	const checkboxHandler2 = () => {
		setCheckboxStyle2(checkboxStyle2 ? false : true);
		console.log(checkboxStyle2);
	};
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setSubmittedData(data); // Установка данных формы в состояние
		addDataBase(data); // Вызов функции для отправки данных в базу данных
	};

	const onReset = () => {
		reset(); // Сброс формы
		setSubmittedData({}); // Очистка данных в состоянии
	};

	const addDataBase = (objData) => {
		console.log("addDataBase start in function");

		const url = "http://localhost:80/src/registration.php";

		const options = {
			method: "POST", // HTTP метод
			headers: {
				"Content-Type": "application/json", // Тип контента
			},
			body: JSON.stringify({
				login: objData.login,
				password: objData.password,
				email: objData.email,
				phone: objData.phone,
				radio: objData.radio,
				checkbox1: objData["checkbox-1"],
				checkbox2: objData["checkbox-2"],
			}),
		};

		fetch(url, options)
			.then((response) => response.text()) // Сначала получаем ответ как текст
			.then((data) => {
				console.log("Успех:", data);
			})
			.catch((error) => {
				console.error("Ошибка при запросе:", error);
			});
	};

	return (
		<div>
			<div className="block_4_bg"></div>
			<div className="block_4_bg2"></div>
			<div className="block_4_bg3"></div>
			<h2>"useForm" + PhP(MySQL-pdo) </h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="block_4_flex"
			>
				<input
					{...register("login", {
						required: "Login is required",
						minLength: {
							value: 6,
							message: "Login must be at least 6 characters",
						},
						maxLength: {
							value: 8,
							message: "Login must not exceed 8 characters",
						},
						pattern: {
							value: /^[A-Za-z0-9]+$/,
							message: "Login can only contain English letters and numbers",
						},
					})}
					type="text"
					placeholder="Enter your name"
					name="login"
					value={val.login || ""}
					onChange={(e) => setVal({ ...val, login: e.target.value })}
				/>
				{errors.login && <p>{errors.login.message}</p>}

				<input
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password must be at least 6 characters",
						},
						maxLength: {
							value: 8,
							message: "Password must not exceed 8 characters",
						},
						pattern: {
							value: /^[A-Za-z0-9]+$/,
							message: "Password can only contain English letters and numbers",
						},
					})}
					type="password"
					placeholder="Enter your password"
					name="password"
				/>
				{errors.password && <p>{errors.password.message}</p>}

				<input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "Invalid email format",
						},
					})}
					type="email"
					placeholder="Enter your email"
					name="email"
					value={val.email || ""}
					onChange={(e) => setVal({ ...val, email: e.target.value })}
				/>
				{errors.email && <p>{errors.email.message}</p>}

				<input
					{...register("phone", {
						required: "Phone number is required",
						pattern: {
							value: /^[0-9]+$/,
							message: "Phone number must only contain digits",
						},
						minLength: {
							value: 10,
							message: "Phone number must be at least 10 digits",
						},
						maxLength: {
							value: 15,
							message: "Phone number must not exceed 15 digits",
						},
					})}
					type="tel"
					placeholder="Enter your phone number"
					name="phone"
					value={val.phone || ""}
					onChange={(e) => setVal({ ...val, phone: e.target.value })}
				/>
				{errors.phone && <p>{errors.phone.message}</p>}
				<div className="labelRadio">
					<label>
						<input
							type="radio"
							value="Boy"
							onClick={radioHandler}
							{...register("radio")}
						/>
						<span
							style={selectedRadio === "Boy" ? checkStyle() : checkStyleNone()}
						>
							Boy
						</span>
					</label>
					<label>
						<input
							type="radio"
							value="Girl"
							onClick={radioHandler}
							{...register("radio")}
						/>
						<span
							style={selectedRadio === "Girl" ? checkStyle() : checkStyleNone()}
						>
							Girl
						</span>
					</label>
				</div>

				<div className="labelRadio">
					<label>
						<input
							type="checkbox"
							value={true}
							{...register("checkbox-1")}
							onClick={checkboxHandler2}
						/>
						<span className={checkboxStyle2 ? "nonStyle" : "checkStyle"}>
							Option 1
						</span>
					</label>
					<label>
						<input
							type="checkbox"
							value={true}
							{...register("checkbox-2")}
							onClick={checkboxHandler}
						/>
						<span className={checkboxStyle ? "nonStyle" : "checkStyle"}>
							Option 2
						</span>
					</label>
				</div>
				<button
					className="button"
					type="button"
					onClick={onReset}
				>
					Reset
				</button>
				<button
					type="submit"
					className="button"
				>
					Submit
				</button>
			</form>
			{Object.keys(submittedData).length > 0 && (
				<div className="formsended">
					<h3 className="dataSubmitted">
						Data Submitted: add in MySQL(password_hash)
					</h3>

					{Object.keys(submittedData).length === 0
						? null
						: Object.entries(submittedData).map(([key, value]) => (
								<React.Fragment key={key}>
									<p className="dataKey">
										{key}: <span className="nonStyle">{value}</span>
									</p>
								</React.Fragment>
						  ))}
				</div>
			)}
		</div>
	);
}
export default Block4;
