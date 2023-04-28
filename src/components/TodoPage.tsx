import React from 'react';
import styled from '@emotion/styled';
import Progress from './Progress';
import TodoItemList from './TodoItemList';

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	row-gap: 1rem;

	@media (min-width: 768px) {
		padding: 2rem;
	}
		
	@media (min-width: 1024px) {
		padding: 3rem 4rem;
		row-gap: 2rem;
	}
`

const TodoPage: React.FC = () => {
	return (
		<FlexCol>
			<Progress />
			<TodoItemList />
		</FlexCol>
	);
};

export default TodoPage;