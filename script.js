function dodaj()
{
let tekst=document.querySelector('#todoText');

let element=document.createElement('div');
element.classList='lista';
let obrisi = document.createElement('button');

let html="<span id='brisi'> "+tekst.value+" <button onclick='obrisi()' id='dugmic'>Obrisi</button> </span> "

element.innerHTML= html;


document.querySelector('.lista').appendChild(element);
}


function  obrisi(){
let zaBrisanje=document.querySelector('span');
let obrisiOkvir=document.querySelector('.lista')
zaBrisanje.remove();
}
