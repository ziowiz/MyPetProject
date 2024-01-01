import "./Block5.css";

import { useState, useEffect, useRef, useCallback } from "react";
function BattleSity() {
	const wall1 = { x: 50, y: 50 };
	const wall2 = { x: 150, y: 50 };
	const wall3 = { x: 250, y: 50 };
	const wall4 = { x: 350, y: 50 };
	const wall5 = { x: 450, y: 50 };
	const wall6 = { x: 550, y: 50 };
	const wall7 = { x: 50, y: 100 };
	const wall8 = { x: 150, y: 100 };
	const wall9 = { x: 250, y: 100 };
	const wall10 = { x: 350, y: 100 };
	const wall11 = { x: 450, y: 100 };
	const wall12 = { x: 550, y: 100 };
	const wall13 = { x: 50, y: 150 };
	const wall14 = { x: 150, y: 150 };
	const wall15 = { x: 250, y: 150 };
	const wall16 = { x: 300, y: 150 };
	const wall17 = { x: 350, y: 150 };
	const wall18 = { x: 450, y: 150 };
	const wall19 = { x: 550, y: 150 };
	const wall20 = { x: 50, y: 200 };
	const wall21 = { x: 150, y: 200 };
	const wall22 = { x: 250, y: 200 };
	const wall23 = { x: 350, y: 200 };
	const wall24 = { x: 450, y: 200 };
	const wall25 = { x: 550, y: 200 };
	const wall26 = { x: 50, y: 250 };
	const wall27 = { x: 150, y: 250 };
	const wall28 = { x: 450, y: 250 };
	const wall29 = { x: 550, y: 250 };
	const wall30 = { x: 250, y: 300 };
	const wall31 = { x: 350, y: 300 };
	const wall32 = { x: 0, y: 400 };
	const wall33 = { x: 100, y: 400 };
	const wall34 = { x: 150, y: 400 };
	const wall35 = { x: 450, y: 400 };
	const wall36 = { x: 500, y: 400 };
	const wall37 = { x: 600, y: 400 };
	const wall38 = { x: 250, y: 450 };
	const wall39 = { x: 350, y: 450 };
	const wall40 = { x: 50, y: 500 };
	const wall41 = { x: 150, y: 500 };
	const wall42 = { x: 250, y: 500 };
	const wall43 = { x: 300, y: 500 };
	const wall44 = { x: 350, y: 500 };
	const wall45 = { x: 450, y: 500 };
	const wall46 = { x: 550, y: 500 };
	const wall47 = { x: 50, y: 550 };
	const wall48 = { x: 150, y: 550 };
	const wall49 = { x: 250, y: 550 };
	const wall50 = { x: 350, y: 550 };
	const wall51 = { x: 450, y: 550 };
	const wall52 = { x: 550, y: 550 };
	const wall53 = { x: 50, y: 600 };
	const wall54 = { x: 150, y: 600 };
	const wall55 = { x: 250, y: 600 };
	const wall56 = { x: 350, y: 600 };
	const wall57 = { x: 450, y: 600 };
	const wall58 = { x: 550, y: 600 };
	const wall59 = { x: 50, y: 650 };
	const wall60 = { x: 150, y: 650 };
	const wall61 = { x: 450, y: 650 };
	const wall62 = { x: 550, y: 650 };
	const wall63 = { x: 50, y: 700 };
	const wall64 = { x: 150, y: 700 };
	const wall65 = { x: 450, y: 700 };
	const wall66 = { x: 550, y: 700 };
	const wall67 = { x: 50, y: 750 };
	const wall68 = { x: 150, y: 750 };
	const wall69 = { x: 250, y: 750 };
	const wall70 = { x: 300, y: 750 };
	const wall71 = { x: 350, y: 750 };
	const wall72 = { x: 450, y: 750 };
	const wall73 = { x: 550, y: 750 };
	const wall74 = { x: 250, y: 800 };
	const wall75 = { x: 350, y: 800 };
	const heiArea = 855;
	const widArea = 655;
	const walls = [
		wall1,
		wall2,
		wall3,
		wall4,
		wall5,
		wall6,
		wall7,
		wall8,
		wall9,
		wall10,
		wall11,
		wall12,
		wall13,
		wall14,
		wall15,
		wall16,
		wall17,
		wall18,
		wall19,
		wall20,
		wall21,
		wall22,
		wall23,
		wall24,
		wall25,
		wall26,
		wall27,
		wall28,
		wall29,
		wall30,
		wall31,
		wall32,
		wall33,
		wall34,
		wall35,
		wall36,
		wall37,
		wall38,
		wall39,
		wall40,
		wall41,
		wall42,
		wall43,
		wall44,
		wall45,
		wall46,
		wall47,
		wall48,
		wall49,
		wall50,
		wall51,
		wall52,
		wall53,
		wall54,
		wall55,
		wall56,
		wall57,
		wall58,
		wall59,
		wall60,
		wall61,
		wall62,
		wall63,
		wall64,
		wall65,
		wall66,
		wall67,
		wall68,
		wall69,
		wall70,
		wall71,
		wall72,
		wall73,
		wall74,
		wall75,
	];
	const [bulletPosition, setBulletPosition] = useState({ x: 10, y: 10 });
	const [isTankDestroyed, setIsTankDestroyed] = useState(false);
	const [isShooting, setIsShooting] = useState(false);
	const [buletVisual, setBuletVisual] = useState({ x: 10, y: 10 });
	const [position, setPosition] = useState({ x: 212, y: 810 });
	const [rotation, setRotation] = useState(0);
	const [enemPos1, setEnemPos1] = useState({ x: 10, y: 10 });
	const [enemPos2, setEnemPos2] = useState({ x: 310, y: 10 });
	const [enemPos3, setEnemPos3] = useState({ x: 610, y: 10 });
	const [enemRot1, setEnemRot1] = useState(180);
	const [enemRot2, setEnemRot2] = useState(180);
	const [enemRot3, setEnemRot3] = useState(180);
	const [isShooting1, setIsShooting1] = useState(false);
	const [buletVisual1, setBuletVisual1] = useState({ x: 10, y: 10 });
	const [isShooting2, setIsShooting2] = useState(false);
	const [buletVisual2, setBuletVisual2] = useState({ x: 10, y: 10 });
	const [isShooting3, setIsShooting3] = useState(false);
	const [buletVisual3, setBuletVisual3] = useState({ x: 10, y: 10 });
	const [gameActive, setGameActive] = useState(true);
	const [enemyDead1, setEmemyDead1] = useState(true);
	const [enemyDead2, setEmemyDead2] = useState(true);
	const [enemyDead3, setEmemyDead3] = useState(true);
	const [enemyDispleyDead1, setEmemyDispleyDead1] = useState(true);
	const [enemyDispleyDead2, setEmemyDispleyDead2] = useState(true);
	const [enemyDispleyDead3, setEmemyDispleyDead3] = useState(true);
	const [showLoseModal, setShowLoseModal] = useState(false);
	const [showWinModal, setShowWinModal] = useState(false);
	const [isAIActive, setIsAIActive] = useState(true);
	const enemyIntervalRef3 = useRef(null);
	const enemyIntervalRef2 = useRef(null);
	const enemyIntervalRef1 = useRef(null);
	const elementRef3 = useRef({ x: 10, y: 10 });
	const elementRef = useRef({ x: 10, y: 10 });
	const elementRef2 = useRef({ x: 10, y: 10 });
	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);
	const [lastRun, setLastRun] = useState(Date.now());

	useEffect(() => {
		const runAllAI = () => {
			if (gameActive) {
				runAI1();
				runAI2();
				runAI3();
			}
		};

		runAllAI();
		if (gameActive) {
			const intervalId = setInterval(() => {
				setLastRun(Date.now());
			}, 1500);

			return () => clearInterval(intervalId);
		}
	}, [gameActive]);
	useEffect(() => {
		const runAllAI = () => {
			if (gameActive) {
				runAI1();
				runAI2();
				runAI3();
			}
		};

		runAllAI();
		if (gameActive) {
			const intervalId = setInterval(() => {
				setLastRun(Date.now());
			}, 1500);

			return () => clearInterval(intervalId);
		}
	}, [gameActive]);

	useEffect(() => {
		if (gameActive) {
			runAI1();
			runAI2();
			runAI3();
		}
	}, [lastRun]);
	const resetGame = () => {
		setBulletPosition({ x: 10, y: 10 });
		setIsTankDestroyed(false);
		setIsShooting(false);
		setBuletVisual({ x: 10, y: 10 });
		setPosition({ x: 212, y: 810 });
		setRotation(0);
		setEnemPos1({ x: 10, y: 10 });
		setEnemPos2({ x: 310, y: 10 });
		setEnemPos3({ x: 610, y: 10 });
		setEnemRot1(180);
		setEnemRot2(180);
		setEnemRot3(180);
		setIsShooting1(false);
		setBuletVisual1({ x: 10, y: 10 });
		setIsShooting2(false);
		setBuletVisual2({ x: 10, y: 10 });
		setIsShooting3(false);
		setBuletVisual3({ x: 10, y: 10 });
		setGameActive(true);
		setEmemyDead1(true);
		setEmemyDead2(true);
		setEmemyDead3(true);
		setEmemyDispleyDead1(true);
		setEmemyDispleyDead2(true);
		setEmemyDispleyDead3(true);
		setShowLoseModal(false);
		setShowWinModal(false);
		setIsAIActive(true);

		forceUpdate();
	};
	useEffect(() => {
		if (isTankDestroyed) {
			stopAI();
			setShowLoseModal(true);
		}
	}, [isTankDestroyed]);
	useEffect(() => {
		if (!enemyDispleyDead1 && !enemyDispleyDead2 && !enemyDispleyDead3) {
			setShowWinModal(true);
		}
	}, [enemyDispleyDead1, enemyDispleyDead2, enemyDispleyDead3]);
	useEffect(() => {
		if (elementRef3.current) {
			const style = window.getComputedStyle(elementRef3.current);
			const top = parseInt(style.getPropertyValue("top"), 10); // Преобразование в число
			const left = parseInt(style.getPropertyValue("left"), 10); // Преобразование в число
		}
	}, [enemPos3]);
	useEffect(() => {
		if (elementRef2.current) {
			const style = window.getComputedStyle(elementRef2.current);
			const top = parseInt(style.getPropertyValue("top"), 10); // Преобразование в число
			const left = parseInt(style.getPropertyValue("left"), 10); // Преобразование в число
		}
	}, [enemPos2]);
	useEffect(() => {
		if (elementRef.current) {
			const style = window.getComputedStyle(elementRef.current);
			const top = parseInt(style.getPropertyValue("top"), 10); // Преобразование в число
			const left = parseInt(style.getPropertyValue("left"), 10); // Преобразование в число
		}
	}, [enemPos1]);
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [position, rotation]);
	useEffect(() => {
		if (elementRef3.current) {
			const style = window.getComputedStyle(elementRef3.current);
			const top = parseInt(style.getPropertyValue("top"), 10); // Преобразование в число
			const left = parseInt(style.getPropertyValue("left"), 10); // Преобразование в число
		}
	}, [enemPos3]);
	useEffect(() => {
		return () => {
			if (enemyIntervalRef3.current) {
				clearInterval(enemyIntervalRef3.current);
			}
		};
	}, []);

	const runAI1 = () => {
		if (isAIActive && gameActive && enemyDead1 && enemyDispleyDead1) {
			fire1();
			generateAI();
		}
	};

	const runAI2 = () => {
		if (isAIActive && gameActive && enemyDead2 && enemyDispleyDead2) {
			fire2();
			generateAI2();
		}
	};

	const runAI3 = () => {
		if (isAIActive && gameActive && enemyDead3 && enemyDispleyDead3) {
			fire3();
			generateAI3();
		}
	};
	const stopAI = () => {
		setIsAIActive(false);
	};
	const closeLoseModal = () => setShowLoseModal(false);
	const closeWinModal = () => setShowWinModal(false);
	const closeGame = () => setGameActive(!gameActive);

	const deleteEnemyTank3 = () => {
		console.log("deleteEnemyTank - 3 ");
		setEmemyDispleyDead3(false);
		setEmemyDead3(false);
		clearInterval(enemyIntervalRef3.current);
	};

	const deleteEnemyTank2 = () => {
		console.log("deleteEnemyTank - 2  ");
		setEmemyDispleyDead2(false);
		setEmemyDead2(false);
		clearInterval(enemyIntervalRef2.current);
	};
	const deleteEnemyTank1 = () => {
		console.log("deleteEnemyTank - 1  ");
		setEmemyDispleyDead1(false);
		setEmemyDead1(false);
		clearInterval(enemyIntervalRef1.current);
	};
	function isBulletHitTank(bulletX, bulletY, tankX, tankY) {
		const TANK_SIZE = 33;
		return (
			bulletX >= tankX &&
			bulletX <= tankX + TANK_SIZE &&
			bulletY >= tankY &&
			bulletY <= tankY + TANK_SIZE
		);
	}
	const fire1 = () => {
		if (!enemyDispleyDead1) return;

		let moveX = 0;
		let moveY = 0;
		let distance;
		let steps = 0;
		setIsShooting1(true);
		const tankPosition = {
			x: parseInt(elementRef.current.style.left, 10),
			y: parseInt(elementRef.current.style.top, 10),
		};

		switch (enemRot1) {
			case 0: // вверх
				moveY = -1;
				distance = enemPos1.y + 10;

				break;
			case 90: // вправо
				moveX = 1;
				distance = widArea - enemPos1.x - 20;

				break;
			case 180: // вниз
				moveY = 1;
				distance = heiArea - enemPos1.y - 20;

				break;
			case 270: // влево
				moveX = -1;
				distance = enemPos1.x + 10;

				break;
			default:
				break;
		}

		const interval1 = setInterval(() => {
			const nextShootX = tankPosition.x + 10 + steps * moveX;
			const nextShootY = tankPosition.y + 10 + steps * moveY;
			setBuletVisual1({ x: nextShootX, y: nextShootY });
			if (gameActive === false) {
				clearInterval(interval1);
				setIsShooting1(false);
				return;
			}
			if (isBulletHitTank(nextShootX, nextShootY, position.x, position.y)) {
				onTankHit();
			}
			if (checkBulletCollision(nextShootX, nextShootY)) {
				clearInterval(interval1);
				setIsShooting1(false);

				return;
			}

			if (steps >= distance) {
				clearInterval(interval1);
				setIsShooting1(false);

				return;
			}
			setBuletVisual1({ x: nextShootX + 10, y: nextShootY + 10 });
			steps++;
		}, 2);
	};

	const fire2 = () => {
		let moveX = 0;
		let moveY = 0;
		let distance;
		let steps = 0;
		setIsShooting2(true);
		const tankPosition = {
			x: parseInt(elementRef2.current.style.left, 10),
			y: parseInt(elementRef2.current.style.top, 10),
		};

		switch (enemRot2) {
			case 0: // вверх
				moveY = -1;
				distance = enemPos2.y + 10;

				break;
			case 90: // вправо
				moveX = 1;
				distance = widArea - enemPos2.x - 20;

				break;
			case 180: // вниз
				moveY = 1;
				distance = heiArea - enemPos2.y - 20;

				break;
			case 270: // влево
				moveX = -1;
				distance = enemPos2.x + 10;

				break;
			default:
				break;
		}

		const interval2 = setInterval(() => {
			const nextShootX = tankPosition.x + 10 + steps * moveX;
			const nextShootY = tankPosition.y + 10 + steps * moveY;
			setBuletVisual2({ x: nextShootX, y: nextShootY });
			if (gameActive === false) {
				clearInterval(interval2);
				setIsShooting2(false);
				return;
			}
			if (isBulletHitTank(nextShootX, nextShootY, position.x, position.y)) {
				onTankHit();
			}
			if (checkBulletCollision(nextShootX, nextShootY)) {
				clearInterval(interval2);
				setIsShooting2(false);

				return;
			}

			if (steps >= distance) {
				clearInterval(interval2);
				setIsShooting2(false);

				return;
			}
			setBuletVisual2({ x: nextShootX + 10, y: nextShootY + 10 });
			steps++;
		}, 2);
	};

	const fire3 = () => {
		let moveX = 0;
		let moveY = 0;
		let distance;
		let steps = 0;
		setIsShooting3(true);
		const tankPosition = {
			x: parseInt(elementRef3.current.style.left, 10),
			y: parseInt(elementRef3.current.style.top, 10),
		};

		switch (enemRot3) {
			case 0: // вверх
				moveY = -1;
				distance = enemPos3.y + 10;

				break;
			case 90: // вправо
				moveX = 1;
				distance = widArea - enemPos3.x - 20;

				break;
			case 180: // вниз
				moveY = 1;
				distance = heiArea - enemPos3.y - 20;

				break;
			case 270: // влево
				moveX = -1;
				distance = enemPos3.x + 10;

				break;
			default:
				break;
		}

		const interval3 = setInterval(() => {
			const nextShootX = tankPosition.x + 10 + steps * moveX;
			const nextShootY = tankPosition.y + 10 + steps * moveY;
			setBuletVisual3({ x: nextShootX, y: nextShootY });

			if (gameActive === false) {
				clearInterval(interval3);
				setIsShooting3(false);
				return;
			}
			if (isBulletHitTank(nextShootX, nextShootY, position.x, position.y)) {
				onTankHit();
			}
			if (checkBulletCollision(nextShootX, nextShootY)) {
				clearInterval(interval3);
				setIsShooting3(false);

				return;
			}

			if (steps >= distance) {
				clearInterval(interval3);
				setIsShooting3(false);

				return;
			}
			setBuletVisual3({ x: nextShootX + 10, y: nextShootY + 10 });
			steps++;
		}, 2);
	};

	const generateAI = () => {
		if (!enemyDispleyDead1) return;

		const randomMove = Math.floor(Math.random() * 100);
		const randomDirection = Math.floor(Math.random() * 4) + 1;
		// setEnemPos1 предидущее значенмие

		if (randomDirection === 1) {
			movedEnemy(1, randomMove);
			setEnemRot1(0);
			return;
		}
		if (randomDirection === 2) {
			movedEnemy(90, randomMove);
			setEnemRot1(90);
			return;
		}
		if (randomDirection === 3) {
			movedEnemy(180, randomMove);
			setEnemRot1(180);
			return;
		}
		if (randomDirection === 4) {
			movedEnemy(270, randomMove);
			setEnemRot1(270);
			return;
		} else return;
	};

	function movedEnemy(direction, move) {
		let moveX = 0;
		let moveY = 0;
		let distance = move;
		let steps = 0;

		switch (direction) {
			case 0:
				moveY = -1;
				break;
			case 90:
				moveX = 1;
				break;
			case 180:
				moveY = 1;
				break;
			case 270:
				moveX = -1;
				break;
			default:
				return;
		}
		let checkCollisionEnem = (newX, newY) => {
			const tankWidth = 33;
			const tankHeight = 33;
			if (
				newX <= 0 ||
				newY <= 0 ||
				newX + tankWidth >= widArea ||
				newY + tankHeight >= heiArea
			) {
				return true;
			}
			for (let wall of walls) {
				if (
					newX + tankWidth >= wall.x &&
					newX <= wall.x + 51 &&
					newY + tankHeight >= wall.y &&
					newY <= wall.y + 51
				) {
					return true;
				}
			}
			return false;
		};

		let interval = setInterval(() => {
			if (gameActive === false) {
				clearInterval(interval);
				return;
			}
			if (gameActive === false || !elementRef.current) {
				clearInterval(interval);
				return;
			}
			if (!enemyDead1) {
				clearInterval(interval);
				setTimeout(() => {
					setEmemyDispleyDead3(false);
				}, 1500);
				return;
			}
			let currentTop = parseInt(elementRef.current.style.top, 10);
			let currentLeft = parseInt(elementRef.current.style.left, 10);
			let newX = currentLeft + moveX;
			let newY = currentTop + moveY;

			// Проверка на столкновения
			if (checkCollisionEnem(newX, newY)) {
				// clearInterval(interval);
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef.current.style.top = `${newY}px`;
				elementRef.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval);
				return callback1(newX, newY);
			}
			if (steps >= distance) {
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef.current.style.top = `${newY}px`;
				elementRef.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval);
				return callback1(newX, newY);
			}
			elementRef.current.style.top = `${newY}px`;
			elementRef.current.style.left = `${newX}px`;
			steps++;
			callback1(newX, newY);
		}, 30);
	}
	function callback1(newX, newY) {
		setEnemPos1({ x: newX, y: newY });
	}
	const generateAI2 = () => {
		const randomMove2 = Math.floor(Math.random() * 100);
		const randomDirection2 = Math.floor(Math.random() * 4) + 1;
		// setEnemPos1 предидущее значенмие

		if (randomDirection2 === 1) {
			movedEnemy2(1, randomMove2);
			setEnemRot2(0);
			return;
		}
		if (randomDirection2 === 2) {
			movedEnemy2(90, randomMove2);
			setEnemRot2(90);
			return;
		}
		if (randomDirection2 === 3) {
			movedEnemy2(180, randomMove2);
			setEnemRot2(180);
			return;
		}
		if (randomDirection2 === 4) {
			movedEnemy2(270, randomMove2);
			setEnemRot2(270);
			return;
		} else return;
	};

	function movedEnemy2(direction, move) {
		let moveX = 0;
		let moveY = 0;
		let distance = move;
		let steps = 0;

		switch (direction) {
			case 0:
				moveY = -1;
				break;
			case 90:
				moveX = 1;
				break;
			case 180:
				moveY = 1;
				break;
			case 270:
				moveX = -1;
				break;
			default:
				return;
		}
		let checkCollisionEnem2 = (newX, newY) => {
			const tankWidth = 33;
			const tankHeight = 33;
			if (
				newX <= 0 ||
				newY <= 0 ||
				newX + tankWidth >= widArea ||
				newY + tankHeight >= heiArea
			) {
				return true;
			}
			for (let wall of walls) {
				if (
					newX + tankWidth >= wall.x &&
					newX <= wall.x + 51 &&
					newY + tankHeight >= wall.y &&
					newY <= wall.y + 51
				) {
					return true;
				}
			}
			return false;
		};

		let interval2 = setInterval(() => {
			if (!elementRef2.current) {
				clearInterval(interval2);
				return;
			}
			if (gameActive === false) {
				clearInterval(interval2);
				return;
			}
			let currentTop = parseInt(elementRef2.current.style.top, 10);
			let currentLeft = parseInt(elementRef2.current.style.left, 10);
			let newX = currentLeft + moveX;
			let newY = currentTop + moveY;
			if (!enemyDead2) {
				clearInterval(interval2);
				setTimeout(() => {
					setEmemyDispleyDead2(false);
				}, 1500);
				return;
			}

			// Проверка на столкновения
			if (checkCollisionEnem2(newX, newY)) {
				// clearInterval(interval);
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef2.current.style.top = `${newY}px`;
				elementRef2.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval2);
				return callback2(newX, newY);
			}
			if (steps >= distance) {
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef2.current.style.top = `${newY}px`;
				elementRef2.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval2);
				return callback2(newX, newY);
			}
			elementRef2.current.style.top = `${newY}px`;
			elementRef2.current.style.left = `${newX}px`;
			steps++;
			callback2(newX, newY);
		}, 20);
	}
	function callback2(newX, newY) {
		setEnemPos2({ x: newX, y: newY });
	}
	const generateAI3 = () => {
		const randomMove3 = Math.floor(Math.random() * 100);
		const randomDirection3 = Math.floor(Math.random() * 4) + 1;
		// setEnemPos1 предидущее значенмие

		if (randomDirection3 === 1) {
			movedEnemy3(1, randomMove3);
			setEnemRot3(0);
			return;
		}
		if (randomDirection3 === 2) {
			movedEnemy3(90, randomMove3);
			setEnemRot3(90);
			return;
		}
		if (randomDirection3 === 3) {
			movedEnemy3(180, randomMove3);
			setEnemRot3(180);
			return;
		}
		if (randomDirection3 === 4) {
			movedEnemy3(270, randomMove3);
			setEnemRot3(270);
			return;
		} else return;
	};

	function movedEnemy3(direction, move) {
		let moveX = 0;
		let moveY = 0;
		let distance = move;
		let steps = 0;

		switch (direction) {
			case 0:
				moveY = -1;
				break;
			case 90:
				moveX = 1;
				break;
			case 180:
				moveY = 1;
				break;
			case 270:
				moveX = -1;
				break;
			default:
				return;
		}
		let checkCollisionEnem3 = (newX, newY) => {
			const tankWidth = 33;
			const tankHeight = 33;
			if (
				newX <= 0 ||
				newY <= 0 ||
				newX + tankWidth >= widArea ||
				newY + tankHeight >= heiArea
			) {
				return true;
			}
			for (let wall of walls) {
				if (
					newX + tankWidth >= wall.x &&
					newX <= wall.x + 50 &&
					newY + tankHeight >= wall.y &&
					newY <= wall.y + 50
				) {
					return true;
				}
			}
			return false;
		};

		let interval3 = setInterval(() => {
			if (!elementRef3.current) {
				clearInterval(interval3);
				return;
			}
			if (gameActive === false || !elementRef3.current) {
				clearInterval(interval3);
				return;
			}
			let currentTop = parseInt(elementRef3.current.style.top, 10);
			let currentLeft = parseInt(elementRef3.current.style.left, 10);
			let newX = currentLeft + moveX;
			let newY = currentTop + moveY;

			if (!enemyDead3) {
				clearInterval(interval3);
				setTimeout(() => {
					setEmemyDispleyDead3(false);
				}, 1500);
				return;
			}
			if (checkCollisionEnem3(newX, newY)) {
				// clearInterval(interval);
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef3.current.style.top = `${newY}px`;
				elementRef3.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval3);
				return callback3(newX, newY);
			}
			if (steps >= distance) {
				newX -= moveX * 4;
				newY -= moveY * 4;
				elementRef3.current.style.top = `${newY}px`;
				elementRef3.current.style.left = `${newX}px`;

				// Применение отъезда назад и нового направления
				clearInterval(interval3);
				return callback3(newX, newY);
			}
			elementRef3.current.style.top = `${newY}px`;
			elementRef3.current.style.left = `${newX}px`;
			steps++;
			callback3(newX, newY);
		}, 10);
	}
	function callback3(newX, newY) {
		setEnemPos3({ x: newX, y: newY });
	}

	const directions = {
		w: 0,
		d: 90,
		s: 180,
		a: 270,
	};
	const checkCollision = (newX, newY) => {
		const tankWidth = 30;
		const tankHeight = 30;

		if (
			newX < 0 ||
			newY < 0 ||
			newX + tankWidth > widArea ||
			newY + tankHeight > heiArea
		) {
			return true;
		}
		for (let wall of walls) {
			if (
				newX + tankWidth > wall.x &&
				newX < wall.x + 50 &&
				newY + tankHeight > wall.y &&
				newY < wall.y + 50
			) {
				return true;
			}
		}
		return false;
	};
	const checkBulletCollision = (nextShootX, nextShootY) => {
		const bulletWidth = 20;
		const bulletHeight = 20;

		for (let wall of walls) {
			if (
				nextShootX + bulletWidth > wall.x &&
				nextShootX < wall.x + 50 &&
				nextShootY + bulletHeight > wall.y &&
				nextShootY < wall.y + 50
			)
				return true;
		}
		return false;
	};
	const onTankHit = () => {
		setIsTankDestroyed(true); // Устанавливаем флаг уничтожения танка
		// Здесь вы также можете добавить любую логику для анимации взрыва, звука и т.д.
	};
	const fire = () => {
		let moveX = 0;
		let moveY = 0;
		let distance;
		let steps = 0;
		setIsShooting(true);

		// Определяем направление движения и расстояние
		switch (rotation) {
			case 0: // вверх
				moveY = -1;
				distance = position.y + 10;
				break;
			case 90: // вправо
				moveX = 1;
				distance = widArea - position.x - 20;
				break;
			case 180: // вниз
				moveY = 1;
				distance = heiArea - position.y - 20;
				break;
			case 270: // влево
				moveX = -1;
				distance = position.x + 10;
				break;
			default:
				break;
		}

		const interval = setInterval(() => {
			if (gameActive === false) {
				clearInterval(interval);
				return;
			}

			const nextShootX = position.x + 10 + steps * moveX;
			const nextShootY = position.y + 10 + steps * moveY;
			setBuletVisual({ x: nextShootX, y: nextShootY });

			if (
				elementRef3.current &&
				isBulletHitTank(
					nextShootX,
					nextShootY,
					elementRef3.current.offsetLeft,
					elementRef3.current.offsetTop
				) &&
				enemyDead3
			) {
				clearInterval(interval);
				setIsShooting(false);
				deleteEnemyTank3();
				return;
			}
			if (
				elementRef2.current &&
				isBulletHitTank(
					nextShootX,
					nextShootY,
					elementRef2.current.offsetLeft,
					elementRef2.current.offsetTop
				) &&
				enemyDead2
			) {
				clearInterval(interval);
				setIsShooting(false);
				deleteEnemyTank2();
				return;
			}
			if (
				elementRef.current &&
				isBulletHitTank(
					nextShootX,
					nextShootY,
					elementRef.current.offsetLeft,
					elementRef.current.offsetTop
				) &&
				enemyDead1
			) {
				clearInterval(interval);
				setIsShooting(false);
				deleteEnemyTank1();
				return;
			}
			if (checkBulletCollision(nextShootX, nextShootY)) {
				clearInterval(interval);
				setIsShooting(false);
				return;
			}

			if (steps >= distance) {
				clearInterval(interval);
				setIsShooting(false);
				return;
			}
			setBulletPosition({ x: position.x + 10, y: position.y + 10 });
			steps++;
		}, 3);
	};

	const handleKeyDown = (event) => {
		if (isTankDestroyed) {
			return; // Если танк уничтожен, никакие действия не происходят
		}
		let moveX = 0;
		let moveY = 0;
		setRotation(directions[event.key] ?? rotation);
		switch (event.key) {
			case "w":
				moveY = -4;
				break;
			case "a":
				moveX = -4;
				break;
			case "s":
				moveY = 4;
				break;
			case "d":
				moveX = 4;
				break;
			case "b":
				if (!elementRef.current) {
					return;
				}
				fire1();
				generateAI();

				break;
			case "i":
				setIsAIActive((prev) => !prev);

				break;

			case "n":
				if (!elementRef2.current) {
					return;
				}
				fire2();
				generateAI2();
				break;
			case "m":
				if (!elementRef3.current) {
					return;
				}
				fire3();
				generateAI3();
				break;
			case "u":
				fire();

				break;
			default:
				return;
		}
		const newX = position.x + moveX;
		const newY = position.y + moveY;
		if (!checkCollision(newX, newY)) {
			setPosition({ x: newX, y: newY });
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	const tankStyle = {
		left: `${position.x}px`,
		top: `${position.y}px`,
		transform: `rotate(${rotation}deg)`,
		transformOrigin: "center center",
	};
	const enemyStyle1 = {
		top: enemPos1.y,
		left: enemPos1.x,
		transform: `rotate(${enemRot1}deg)`,
		transformOrigin: "center center",
	};
	const enemyStyle2 = {
		top: enemPos2.y,
		left: enemPos2.x,
		transform: `rotate(${enemRot2}deg)`,
		transformOrigin: "center center",
	};
	const enemyStyle3 = {
		top: enemPos3.y,
		left: enemPos3.x,
		transform: `rotate(${enemRot3}deg)`,
		transformOrigin: "center center",
	};

	return (
		<div>
			<div className="gameFlex">
				<div
					onClick={closeGame}
					className="invisiblWall"
					style={{
						animation: gameActive
							? "blockfix 4s ease 0s 1 normal forwards"
							: "blockfix2 7s ease 0s 1 normal forwards",
					}}
				>
					<p>Please close the game</p>{" "}
				</div>

				<button
					onClick={resetGame}
					className="buttonGame"
				>
					{gameActive ? "reset" : "reset"}
				</button>
				{showLoseModal && (
					<div className="modalLose">
						<h2>Game over</h2>
						<button
							onClick={closeLoseModal}
							className="buttonGame"
						>
							Close
						</button>
					</div>
				)}
				{showWinModal && (
					<div className="modalWin">
						<h2>Fatality</h2>
						<button
							onClick={closeWinModal}
							className="buttonGame"
						>
							Close
						</button>
					</div>
				)}
				<span>WASD-movie</span>
				<span>U-fire</span>
				<div className="area">
					{walls.map((wall, index) => (
						<div
							key={index}
							className="wall"
							style={{ left: `${wall.x}px`, top: `${wall.y}px` }}
						></div>
					))}

					<div
						className="MyTank"
						style={{
							...tankStyle,
							display: isTankDestroyed ? "none" : "block",
						}}
					>
						{" "}
					</div>
					{enemyDispleyDead1 && (
						<div
							className="EnemyTank1"
							style={enemyStyle1}
							ref={elementRef}
						></div>
					)}

					{enemyDispleyDead2 && (
						<div
							className="EnemyTank2"
							style={enemyStyle2}
							ref={elementRef2}
						></div>
					)}
					{enemyDispleyDead3 && (
						<div
							className="EnemyTank3"
							style={enemyStyle3}
							ref={elementRef3}
						></div>
					)}
					<div
						className="bullet"
						style={{
							display: isShooting ? "block" : "none",

							left: `${buletVisual.x}px`,
							top: `${buletVisual.y}px`,
						}}
					></div>
					<div
						className="bullet1"
						style={{
							display: isShooting1 ? "block" : "none",

							left: `${buletVisual1.x}px`,
							top: `${buletVisual1.y}px`,
						}}
					></div>
					<div
						className="bullet2"
						style={{
							display: isShooting2 ? "block" : "none",

							left: `${buletVisual2.x}px`,
							top: `${buletVisual2.y}px`,
						}}
					></div>
					<div
						className="bullet3"
						style={{
							display: isShooting3 ? "block" : "none",

							left: `${buletVisual3.x}px`,
							top: `${buletVisual3.y}px`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
export default BattleSity;
