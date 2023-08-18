import './App.css'

import Header from './components/Header'
import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Arttır</button>
		</>
	)
}

export default App
