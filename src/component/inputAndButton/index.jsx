import classes from "./index.module.css";

const InputAndButton = ({
	todoText,
	getInputValue,
	editTodoItem,
	addTodo,
	updateTodo,
}) => {
	return (
		<div>
			<input
				placeholder="add todo"
				className={classes.input}
				type="text"
				value={todoText}
				onChange={getInputValue}
			/>
			{!editTodoItem ? (
				<button className={classes.button} onClick={addTodo}>
					Add
				</button>
			) : (
				<button
					className={classes.button}
					onClick={(event) => updateTodo(event, todoText, editTodoItem.id)}
				>
					Save
				</button>
			)}
		</div>
	);
};

export default InputAndButton;
