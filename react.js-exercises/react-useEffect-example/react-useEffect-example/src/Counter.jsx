import { useEffect, useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		console.log('useEffect called-Component mounted')
		const interval = setInterval(() => {
			setCount((c) => c + 1)
		}, 1000)
		return () => {
			console.log('useEffect called-Component unmounted')
			clearInterval(interval)
		}
	}, [])

	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</>
	)
}

export default Counter
