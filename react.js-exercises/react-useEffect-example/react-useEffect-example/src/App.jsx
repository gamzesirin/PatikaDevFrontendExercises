import './App.css'

import Counter from './Counter'
import { useState } from 'react'

function App() {
	const [showCounter, setShowCounter] = useState(true)

	return (
		<>
			{showCounter && <Counter />}

			<button
				onClick={() => {
					setShowCounter(!showCounter)
				}}
			>
				Toggle Button
			</button>
		</>
	)
}

export default App
