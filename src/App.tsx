import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dial from './components/Dial/Dial';

function App() {
	return (
		<div
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<Dial />
		</div>
	);
}

export default App;
