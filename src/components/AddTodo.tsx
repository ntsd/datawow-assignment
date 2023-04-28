import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import styled from '@emotion/styled';

const TodoItemContainer = styled.div`
  background-color: #fff;
	padding: 0.5rem 1rem;
	box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
	height: 46px;
  border-radius: 99rem;
`;

const Form = styled.form`
	width: 100%;
`

const Input = styled.input`
	width: 100%;
	border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

	::placeholder {
		color: #BCBCBC;
	}
`;

const AddTodo: React.FC = () => {
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
			<Form onSubmit={handleSubmit} >
				<Input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Add your todo..."
				/>
			</Form>
		</TodoItemContainer>
	);
};

export default AddTodo;