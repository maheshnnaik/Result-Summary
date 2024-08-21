import React from 'react';
import './App.css';
import { Summary } from './Summary';
import { Result } from './Result';

function App() {
	return (
		<div className="App">
			<main className='container'>
				<Result />
				<Summary />
			</main>
		</div>
	);
}

export default App;
