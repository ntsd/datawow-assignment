import React, { useEffect, PropsWithChildren } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../states/todos";
import api from "../api/api";

const UseTodosProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [_, setTodos] = useRecoilState(todosState);

	useEffect(() => {
		api.get("/").then((resp) => {
			setTodos(resp.data);
		})
	}, [setTodos]);

	return <>{children}</>;
};

export default UseTodosProvider;
