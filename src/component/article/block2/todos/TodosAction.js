import Button from "../UI/Button";
import { MdChangeCircle, MdOutlineDoNotDisturb } from "react-icons/md";
function TodosActions({ resetTodos, deleteComplited, completedAccestedTodos }) {
	return (
		<>
			<Button
				title={"Reset todos"}
				onClick={resetTodos}
			>
				<MdChangeCircle />
			</Button>
			<Button
				title={"Delete completed todos"}
				onClick={deleteComplited}
				disabled={completedAccestedTodos}
			>
				<MdOutlineDoNotDisturb />
			</Button>
		</>
	);
}
export default TodosActions;
