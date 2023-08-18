import './App.css'

import { useState } from 'react'

function App() {
	const [name, setName] = useState('Gamze')
	const [surname, setSurname] = useState('Şirin')
	const [age, setAge] = useState(19)
	const [friends, setFriends] = useState(['Ahmet', 'Mehmet', 'Ayşe', 'Fatma'])

	return (
		<>
			<h1>
				Merhaba {name} {surname}
			</h1>
			<h2>Yaşınız: {age}</h2>
			<h3>Arkadaşlarınız:</h3>

			{friends.map((friend, index) => (
				<div key={index}>{friend}</div>
			))}

			<button
				onClick={() => {
					setName('Berkay')
				}}
			>
				Change Name
			</button>
			<button
				onClick={() => {
					setSurname('Derin')
				}}
			>
				Change Surname
			</button>
			<button
				onClick={() => {
					setAge(20)
				}}
			>
				Change Age
			</button>
			<button
				onClick={() => {
					setFriends(['Ali', 'Veli', 'Zeynep', 'Ayşe'])
				}}
			>
				Change Friends
			</button>
			<button
				onClick={() => {
					setFriends([...friends, 'Havva'])
				}}
			>
				Add New Friend
			</button>
		</>
	)
}

export default App
