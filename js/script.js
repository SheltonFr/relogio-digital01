const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const h1 = document.querySelector('h1');
const text = 'Horario actual!!!';

function digitalizar() {
    const char = text.split('');

    const typer = setInterval(()=>{
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.shift();
        h1.textContent += next;
    },150);
};

digitalizar();

const updateTime = setInterval(() => {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let seg = now.getSeconds();

    if (hr < 10) horas.textContent = '0' + hr;
    else horas.textContent = hr;

    if (min < 10) minutos.textContent = '0' + min;
    else minutos.textContent = min;

    if (seg < 10) segundos.textContent = '0' + seg;
    else segundos.textContent = seg;


}, 1000);