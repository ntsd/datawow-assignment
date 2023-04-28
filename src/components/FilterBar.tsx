import React from "react";
import styled from "@emotion/styled";
import { useTodos } from "../hooks/useTodos";
import { type TodoFilterType } from "../types";
import CustomSelect from "./CustomSelect";

const FlexRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const FilterBar: React.FC = () => {
	const { todoFilter, setTodoFilter } = useTodos();

	return <FlexRow>
		<h2>Tasks</h2>
		<CustomSelect
			options={["all", "done", "undone"]}
			value={todoFilter}
			onChange={(value) => setTodoFilter(value as TodoFilterType)}
		/>
	</FlexRow>
}

export default FilterBar;
