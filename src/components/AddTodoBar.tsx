import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoItemContainer from '../styles/TodoItemContainer';
import TodoInput from '../styles/TodoInput';

const AddTodoBar: React.FC = () => {
	const { addTodo } = useTodos();
	const [title, setTitle] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim()) {
			addTodo(title.trim());
			setTitle('');
		}
	};

	return (
		<TodoItemContainer>
			<form onSubmit={handleSubmit} style={{ width: '100%' }} >
				<TodoInput
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Add your todo..."
				/>
			</form>
		</TodoItemContainer>
	);
};

export default AddTodoBar;