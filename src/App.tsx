import React from 'react';
import TodoPage from './components/TodoPage';
import UseTodosProvider from './hooks/useTodosProvider';
import { RecoilRoot } from 'recoil';
import Container from './styles/Container';
import { Global } from '@emotion/react';
import globalCSS from './styles/GlobalCSS';

const App: React.FC = () => {
	return (
		<RecoilRoot>
			<Global styles={globalCSS} />
			<Container>
				<UseTodosProvider>
					<TodoPage />
				</UseTodosProvider>
			</Container>
		</RecoilRoot>
	);
};

export default App;
