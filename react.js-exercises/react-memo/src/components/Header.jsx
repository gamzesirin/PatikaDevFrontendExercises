import React from 'react'

function Header() {
	console.log('Header re render edildi')
	return (
		<>
			<h1>Counter</h1>
			<hr />
		</>
	)
}

export default React.memo(Header)
