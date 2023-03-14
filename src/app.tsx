import React, { FC } from 'react';
import { render } from 'react-dom';

const content = document.getElementById('content');

if (content) {
	content.innerText = 'yay from script';

	const App: FC = () => {
		return <>yay from react</>;
	};

	render(<App />, content);
}
