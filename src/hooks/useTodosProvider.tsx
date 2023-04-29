import React, { useEffect, PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../states/todos";
import api from "../api/api";

const UseTodosProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [, setTodos] = useRecoilState(todosState);

	useEffect(() => {
		api.getAllTodos().then((resp) => {
			setTodos(resp.data);
		})
	}, [setTodos]);

	return <>{children}</>;
};

export default UseTodosProvider;
