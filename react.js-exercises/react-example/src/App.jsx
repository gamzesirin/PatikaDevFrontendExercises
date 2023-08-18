import './App.css'

import { useState } from 'react'

function App() {
	const [form, setForm] = useState({ name: '', surname: '' })
	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<>
			<div>Name:</div>
			<input name="name" value={form.name} onChange={onChangeInput} />
			<div>Surname:</div>
			<input name="surname" value={form.surname} onChange={onChangeInput} />
			<hr />
			<div>Fullname:</div>
			<input name="fullname" value={form.name + ' ' + form.surname} disabled />
		</>
	)
}

export default App
