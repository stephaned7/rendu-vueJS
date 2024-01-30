//Constantes

const toggle = document.querySelector('.toggleTheme');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

//Vérif du local storage

if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        setDarkTheme();
    }
}


//Click event

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const darkMode = body.classList.contains('dark');

    if (darkMode) {
        setDarkTheme();
        toggle.innerHTML = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark');
        
    } else {
        setLightTheme();
        toggle.innerHTML = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

//Fonctions

function setDarkTheme() {
    body.style.backgroundColor = '#121212';
    body.style.color = '#fff';
    toggle.style.backgroundColor = '#fff'; 
    toggle.style.color = '#121212';
}

function setLightTheme() {
    body.style.backgroundColor = '#fff';
    body.style.color = '#121212';
    toggle.style.backgroundColor = '#121212';
    toggle.style.color = '#fff';
}




