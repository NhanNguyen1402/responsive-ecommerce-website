
//--------------show menu-------------

const showMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav-menu');
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show');
    })
}
showMenu();

// -----------remove menu mobile---------
const navLink = document.querySelectorAll('.nav-link');
const linkAction = ()=>{
    // ---add active
    navLink.forEach(n => n.classList.remove('active'));
    // ---remove active
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
