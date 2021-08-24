const nav = document.querySelector('.nav');
const openmenu =document.querySelector('.openmenu');
const closemenu =document.querySelector('.closemenu');
const clickme =document.querySelector('.clickme');
const heart =document.querySelector('.heart');
const closeheart =document.querySelector('.closeheart');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close)
clickme.addEventListener('click',see)
closeheart.addEventListener('click',cloheart)

function show() {
    nav.style.display = 'flex';
    nav.style.top = '0';
    openmenu.style.display ='none';
    closemenu.style.display ='flex';
    
    
}

function close() {
   nav.style.display = 'none';
    openmenu.style.display ='flex'
    closemenu.style.display ='none';
    
}

function see() {
    heart.style.display = 'block';
}

function cloheart(){
    heart.style.display ='none';
}