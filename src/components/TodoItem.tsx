import React, { useState } from "react";
import styled from "@emotion/styled";
import { type Todo } from "../types";
import { useTodos } from "../hooks/useTodos";
import Checkbox from "../styles/Checkbox";
import TodoItemContainer from "../styles/TodoItemContainer";
import TodoInput from "../styles/TodoInput";
import ThreeDots from "./icons/ThreeDots";

const Title = styled.span<{ completed: boolean }>`
	flex-grow: 1;
	cursor: pointer;
	overflow-x: hidden;

	${({ completed }) => (completed && `
		text-decoration-line: line-through;
		color: #A9A9A9;
  `)};
`

const ThreeDotMenu = styled.div`
  cursor: pointer;
  position: relative;
`;

const Menu = styled.ul<{ visible: boolean }>`
	display: ${({ visible }) => (visible ? "block" : "none")};
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

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
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
					<TodoInput
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>
					<SaveButton onClick={handleSave}>Save</SaveButton>
				</TodoItemContainer>
			) : (
				<TodoItemContainer>
					<Checkbox
						checked={todo.completed}
						onClick={handleToggle}
					>✓</Checkbox>
					<Title onClick={handleToggle} completed={todo.completed}>{todo.title}</Title>
					<ThreeDotMenu onClick={toggleMenu}>
						<ThreeDots />
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
