const tombolStop = document.getElementsByTagName('button')[0];
const labelWaktu = document.getElementsByTagName('h3')[0];
let waktu = 29;

const waktuHabis = setTimeout(function(){
	document.body.style.backgroundColor = 'black';
	alert('Waktu Habis !');
}, 30000);

const waktuSisa = setInterval(function(){
	labelWaktu.innerHTML = `${waktu} detik`
	waktu--;
}, 1000);

tombolStop.addEventListener('click',function() {
	clearTimeout(waktuHabis);
	clearInterval(waktuSisa);
	document.body.style.backgroundColor = 'lightgreen';
});
