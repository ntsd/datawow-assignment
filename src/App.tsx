import React from 'react';
import TodoPage from './components/TodoPage';
import UseTodosProvider from './hooks/useTodosProvider';
import { Global, css } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import styled from '@emotion/styled';

const globalCSS = css`
	* {
		padding: 0;
		margin: 0;
	}

	body {
		background-color: #d1d0d9;
		width: 100%;
		min-height: 100%;
		margin: 0;
		font-family: Roboto;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
	}
`;

const Container = styled.div`
  background-color: #f5f5f5;

  @media (min-width: 1024px) {
    max-width: 768px;
    margin: 3rem auto;
    border-radius: 1rem;
  }
`;

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
