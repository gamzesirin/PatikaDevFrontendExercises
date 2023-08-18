import axios from 'axios'

async function getData(userId) {
	try {
		const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
		const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

		const userData = userResponse.data
		const userPosts = postsResponse.data

		const combinedData = {
			id: userData.id,
			name: userData.name,
			username: userData.username,
			email: userData.email,
			address: {
				street: userData.address.street,
				suite: userData.address.suite,
				city: userData.address.city,
				zipcode: userData.address.zipcode,
				geo: {
					lat: userData.address.geo.lat,
					lng: userData.address.geo.lng
				}
			},
			phone: userData.phone,
			website: userData.website,
			company: {
				name: userData.company.name,
				catchPhrase: userData.company.catchPhrase,
				bs: userData.company.bs
			},
			posts: userPosts
		}

		return combinedData
	} catch (error) {
		throw new Error(`Error fetching data: ${error.message}`)
	}
}

;(async () => {
	try {
		const userId = 1 // Change this to the desired user id
		const result = await getData(userId)
		console.log(result)
	} catch (error) {
		console.error(error)
	}
})()
