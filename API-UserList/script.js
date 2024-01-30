const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = 
        user.name.first.toLowerCase().includes(value) ||
        user.name.last.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) || 
        user.phone.match(/\d+/g).join('').includes(value);

        if (user.element) {
            user.element.classList.toggle("hidden", !isVisible);
        }
    });
});

fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => {
        users = data.results.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const picture = card.querySelector("[data-user-picture]");
            const name = card.querySelector("[data-user-name]");
            const email = card.querySelector("[data-user-email]");
            const phone = card.querySelector("[data-user-phone]");

            picture.src = user.picture.large;
            name.innerText = `${user.name.first} ${user.name.last}`;
            email.innerText = user.email;
            phone.innerText = user.phone;

            user.element = card;
            userCardContainer.appendChild(card);

            return user;
        })
    });
