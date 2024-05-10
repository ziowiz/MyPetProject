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
	const [loginName, setLoginName] = useState("");
	const [passwordName, setPasswordName] = useState("");
	const [loginResponse, setLoginResponse] = useState("");
	const [addNewUser, setAddNewUser] = useState("");
	const [loginChangeName, setLoginChangeName] = useState("");
	const [emailChangeName, setEmailChangeName] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatNewPassword, setRepeatNewPassword] = useState("");
	const [auth, setAuth] = useState("");
	const [ChangeResponse, setChangeResponse] = useState("");

	// Handle login
	const loginStart = (loginName, passwordName) => {
		const url = "http://localhost:80/src/login.php";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				login: loginName,
				password: passwordName,
			}),
		};

		fetch(url, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setLoginResponse(data.message || "An unknown status was returned");
				setAuth(data.login);
			})
			.catch((error) => {
				console.error("Error:", error);
				setLoginResponse("An error occurred while logging in.");
			});
	};

	// Handle password change
	const passwordChange = (
		loginChangeName,
		emailChangeName,
		oldPassword,
		newPassword,
		repeatNewPassword
	) => {
		if (newPassword !== repeatNewPassword) {
			alert("New passwords do not match!");
			return;
		}
		const url = "http://localhost:80/src/changePass.php";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				login: loginChangeName,
				email: emailChangeName,
				password: oldPassword,
				newPassword: newPassword,
			}),
		};
		fetch(url, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				setChangeResponse(data.message || "An unknown status was returned");
				if (data.success) {
					setAuth(data.login); // Предполагаем, что сервер возвращает login и флаг успеха
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				setChangeResponse("An error occurred while changing the password.");
			});
	};

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
		const { auth, password, ...rest } = val;
		localStorage.setItem("myFormValue", JSON.stringify(rest));
	}, [val]);
	useEffect(() => {
		if (auth) {
			// Убедитесь, что auth не null или undefined
			localStorage.setItem("auth", JSON.stringify(auth));
		}
	}, [auth]); // Эффект срабатывает при изменении состояния auth

	// Эффект для инициализации auth, если необходимо
	useEffect(() => {
		const storedAuth = localStorage.getItem("auth");
		if (storedAuth) {
			setAuth(JSON.parse(storedAuth));
		}
	}, []); // Пустой массив зависимостей гарантирует выполнение только при монтировании

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
				setAddNewUser(data);
				setAuth(objData.login);
			})
			.catch((error) => {
				console.error("Ошибка при запросе:", error);
				setAddNewUser(error);
			});
	};

	return (
		<div>
			<div className="block_4_bg"></div>
			<div className="block_4_bg2"></div>
			<div className="block_4_bg3"></div>
			<h2>"useForm" + PhP(MySQL-pdo) </h2>
			{auth ? (
				<h2 className="Hello">Hello, {auth}</h2>
			) : (
				<h2 className="Hello">Hello, Guest</h2>
			)}
			<div className="Block_4FlexBox">
				<div className="Block_4FlexBoxRegistration">
					<h3>Registration</h3>
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
									message:
										"Password can only contain English letters and numbers",
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
									style={
										selectedRadio === "Boy" ? checkStyle() : checkStyleNone()
									}
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
									style={
										selectedRadio === "Girl" ? checkStyle() : checkStyleNone()
									}
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
					<p>{addNewUser}</p>
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
				<div className="Block_4FlexBoxLogin">
					{" "}
					<h3>Login</h3>
					<form
						className="block_4_Change"
						onSubmit={(e) => {
							e.preventDefault();
							loginStart(loginName, passwordName); // Передаём loginName и passwordName
						}}
					>
						<input
							name="loginName"
							type="text"
							value={loginName}
							placeholder="login"
							onChange={(e) => setLoginName(e.target.value)}
						/>
						<input
							name="passwordName"
							type="password"
							placeholder="password"
							value={passwordName}
							onChange={(e) => setPasswordName(e.target.value)}
						/>
						<button
							className="button"
							type="submit"
						>
							Login
						</button>
						<p>{loginResponse}</p>
						<button
							className="button"
							onClick={() => setAuth("")} // Используйте стрелочную функцию для вызова setAuth при клике
						>
							Exit
						</button>
					</form>
				</div>
				<div className="block_4_Change">
					<h3>Change password</h3>
					<form
						className="block_4_Change"
						onSubmit={(e) => {
							e.preventDefault();
							passwordChange(
								loginChangeName,
								emailChangeName,
								oldPassword,
								newPassword,
								repeatNewPassword
							);
						}}
					>
						<input
							name="loginChangeName"
							type="text"
							placeholder="Login"
							value={loginChangeName}
							onChange={(e) => setLoginChangeName(e.target.value)}
						/>
						<input
							name="emailChangeName"
							type="email"
							placeholder="Email"
							value={emailChangeName}
							onChange={(e) => setEmailChangeName(e.target.value)}
						/>
						<input
							name="passwordOld"
							type="text"
							placeholder="Old password"
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
						/>
						<input
							name="passwordChangeName_1"
							type="password"
							placeholder="New password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
						<input
							name="passwordChangeName_2"
							type="password"
							placeholder="Repeat new password"
							value={repeatNewPassword}
							onChange={(e) => setRepeatNewPassword(e.target.value)}
						/>
						<p>{ChangeResponse}</p>
						<button
							className="button"
							type="submit"
						>
							Change password
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Block4;
