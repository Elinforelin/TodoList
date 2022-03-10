import classes from "./index.module.css";

const TodoListItem = ({ todoList, toggleTodo, deleteTodo, editTodo }) => {
	return (
		<div>
			{todoList.map(({ text, id, done }) => (
				<div>
					<li
						id={id}
						key={id}
						onClick={() => toggleTodo(id)}
						className={done ? classes.lineThrough : classes.todoItem}
					>
						<span className={!done && classes.lineThroughText}>{text}</span>
						<div className={classes.wrapBtn}>
							<span
								className={classes.deleteBtn}
								onClick={(event) => deleteTodo(event, id)}
							>
								delete
							</span>

							<span
								className={classes.editBtn}
								onClick={(event) => editTodo(event, id)}
							>
								edit
							</span>
						</div>
					</li>
				</div>
			))}
		</div>
	);
};

export default TodoListItem;
