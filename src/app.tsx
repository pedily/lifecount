import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';

const content = document.getElementById('content');

if (content) {
	content.innerText = 'yay from script';

	const App: FC = () => {
		return <>yay from react</>;
	};

	const root = createRoot(content);
	root.render(<App />);
}

navigator.serviceWorker.register(
	new URL('service-worker.ts', import.meta.url),
	{ type: 'module', scope: '.' }
);
