let date = new Date('Nov 9 2023 7:10:00');

function counts() {
	let now = new Date();
	gap = date - now;
	console.log(gap);

	// Количество дней
	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	// hours
	let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
	// minuts
	let min = Math.floor(gap / 1000 / 60) % 60;
	// seconds
	let sec = Math.floor(gap / 1000) % 60;

	document.getElementById('d').innerText = days + ' день';
	document.getElementById('h').innerText = hours + ' час';
	document.getElementById('m').innerText = min + ' мин';
	document.getElementById('s').innerText = sec + ' сек';
}

counts();

setInterval(counts, 1000);

