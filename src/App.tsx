import React from 'react';
import './App.css';
import { Summary } from './Summary';
import { Result } from './Result';

function App() {
	return (
		<div className="App">
			<div className='container'>
				<Result />
				<Summary />
			</div>
		</div>
	);
}

export default App;
