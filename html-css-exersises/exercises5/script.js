const userName = prompt('Adınızı giriniz:')
const myName = document.getElementById('myName')
myName.innerHTML = userName
// Saati ve günü güncelleyen fonksiyon
function showTime() {
	const myClock = document.getElementById('myClock')
	const now = new Date()
	const day = now.toLocaleDateString('tr-TR', { weekday: 'long' })
	const time = now.toLocaleTimeString('tr-TR')
	myClock.innerHTML = `${time} ${day}`
}

// Sayfa yüklendiğinde saat ve günü göster
showTime()
