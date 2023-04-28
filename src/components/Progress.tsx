import React from "react";
import { useTodos } from "../hooks/useTodos";
import styled from "@emotion/styled";

const ProgressContainer = styled.div`
	width: 100%;
	background-color: #e07c7c;
	color: #fff;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	box-sizing: border-box;
	border-radius: 1rem;
	padding: 1rem;
`

const ProgressBarContainer = styled.div`
  background-color: #3b3b3b;
  border-radius: 0.5rem;
  height: 0.5rem;
  box-sizing: border-box;
`;

const FilledBar = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;

const Title = styled.span`
	font-weight: 500;
	font-size: 28px;
	line-height: 33px;
`;

const CompletedTxet = styled.span`
	color: #EBB9B8;
`;

const Progress: React.FC = () => {
	const { todos } = useTodos();

	const progress = () => {
		const completedTodos = todos.filter((todo) => todo.completed).length;
		const progress = (completedTodos / todos.length) * 100;
		return {
			percent: Math.round(progress),
			completed: completedTodos
		};
	};

	return <ProgressContainer>
		<Title>Progress</Title>
		<ProgressBarContainer>
			<FilledBar style={{ width: `${progress().percent}%` }} />
		</ProgressBarContainer>
		<CompletedTxet>
			{progress().completed} completed
		</CompletedTxet>
	</ProgressContainer >
}

export default Progress;
