import React, { useState } from "react";
import styled from "@emotion/styled";
import { type Todo } from "../types";
import { useTodos } from "../hooks/useTodos";


interface TodoItemProps {
	todo: Todo;
}

const TodoItemContainer = styled.div`
  background-color: #fff;
	padding: 0.5rem 1rem;
	box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
	height: 46px;
  border-radius: 99rem;
`;

const Title = styled.span`
	flex-grow: 1;
	padding-left: 1rem;
	cursor: pointer;

	${({ completed }: { completed: boolean }) => (completed && `
		text-decoration-line: line-through;
		color: #A9A9A9;
  `)};
`

const Checkbox = styled.input`
  cursor: pointer;
`;

const ThreeDotMenu = styled.div`
  cursor: pointer;
  position: relative;
`;

const Menu = styled.ul`
	display: ${({ visible }: { visible: boolean }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #fff;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  list-style: none;
  right: 0;
	width: 111px;
	z-index: 1;
`;

const MenuItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
	font-size: 14px;
	line-height: 16px;
  cursor: pointer;
`;

const ThreeDotsIcon = () => (
	<svg
		width="18"
		height="10"
		viewBox="0 0 18 4"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="2" cy="2" r="2" />
		<circle cx="9" cy="2" r="2" />
		<circle cx="16" cy="2" r="2" />
	</svg>
);

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

const SaveButton = styled.button`
	background: #585292;
	color: #fff;
	margin-right: -0.5rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 99rem;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
  cursor: pointer;
`

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { editTodo, deleteTodo, completeTodo } = useTodos();

	const [editing, setEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(todo.title);
	const [menuVisible, setMenuVisible] = useState(false);

	const handleEdit = () => {
		setEditing(true);
		setMenuVisible(false);
	};

	const handleSave = () => {
		editTodo(todo.id, newTitle);
		setEditing(false);
	};

	const handleDelete = () => {
		deleteTodo(todo.id);
	};

	const handleToggle = () => {
		completeTodo(todo.id);
	};

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<>
			{editing ? (
				<TodoItemContainer>
					<Input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>
					<SaveButton onClick={handleSave}>Save</SaveButton>
				</TodoItemContainer>
			) : (
				<TodoItemContainer>
					<Checkbox
						type="checkbox"
						checked={todo.completed}
						onChange={handleToggle}
					/>
					<Title onClick={handleToggle} completed={todo.completed}>{todo.title}</Title>
					<ThreeDotMenu onClick={toggleMenu}>
						<ThreeDotsIcon />
						<Menu visible={menuVisible}>
							<MenuItem onClick={handleEdit}>Edit</MenuItem>
							<MenuItem onClick={handleDelete} style={{ color: '#E07C7C' }}>Delete</MenuItem>
						</Menu>
					</ThreeDotMenu>
				</TodoItemContainer>
			)}
		</>
	);
};

export default TodoItem;
