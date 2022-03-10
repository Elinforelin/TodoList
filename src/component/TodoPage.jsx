import { useTodoList } from "./useTodoList";
import classes from "./todolist.module.css";
import InputAndButton from "./inputAndButton";
import TodoListItem from "./todoListItem";

const TodoPage = () => {
	const {
		todoText,
		editTodoItem,
		todoList,
		getInputValue,
		addTodo,
		toggleTodo,
		deleteTodo,
		editTodo,
		updateTodo,
	} = useTodoList();

	return (
		<div className={classes.body}>
			<div className={classes.wrapper}>
				<div>
					<h1 className={classes.title}>todo list</h1>
				</div>
				<div className={classes.inputButton}>
					<InputAndButton
						todoText={todoText}
						getInputValue={getInputValue}
						editTodoItem={editTodoItem}
						addTodo={addTodo}
						updateTodo={updateTodo}
					/>
				</div>

				<ul className={classes.todoList}>
					<TodoListItem
						todoList={todoList}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				</ul>
			</div>
		</div>
	);
};

export default TodoPage;
