import React from "react";
import styled from "@emotion/styled";
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";
import AddTodoBar from "./AddTodoBar";
import FilterBar from "./FilterBar";

const FlexCol = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`

const TodoItemList: React.FC = () => {
	const { filteredTodos } = useTodos();

	return <FlexCol>
		<FilterBar />
		{filteredTodos
			.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
				/>
			))}
		<AddTodoBar />
	</FlexCol>
}

export default TodoItemList;
