const navLinks = document.querySelector ('.nav-links');
const openMenu = document.querySelector ('.fa-bars');
const closeMenu = document.querySelector ('.fa-times');
const Alert = document.querySelector ('button');

Alert.addEventListener('click', function(){
    alert('Proses pencarian sedang berlangsung')
})
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    navLinks.style.display = 'flex';
    navLinks.style.right = '0';
}
function close(){
    navLinks.style.right = '-100%';
}