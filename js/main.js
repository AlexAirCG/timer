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

	document.getElementById('d').innerText = days + ' day';
	document.getElementById('h').innerText = hours + ' hours';
	document.getElementById('m').innerText = min + ' min';
	document.getElementById('s').innerText = sec + ' sec';
}

counts();

setInterval(counts, 1000);

