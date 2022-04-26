import Barcode from 'react-barcode';
import { useState } from 'react';
import './App.css';

export default function App() {
	const [bar, setBar] = useState('');

	const handleChange = (e) => {
		setBar(e.target.value);
	};

	return (
		<div className="App">
			<Barcode value={bar ? bar : 'generate code'} format='UPC'/>
			<input
				type="text"
				placeholder="enter value to be generated"
				className="textbox"
				onChange={handleChange}
			/>
		</div>
	);
}
