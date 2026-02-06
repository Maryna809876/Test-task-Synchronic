import { createGameCard } from "./gameCard";

const allGames = [
    { name: "Miss Cherry Fruits", image: "./img/game1.png" },
    { name: "Parrots Gold", image: "./img/game2.png" },
    { name: "Duel at Dawn", image: "./img/game3.png" },
    { name: "Mechanical Clover", image: "./img/game4.png" },
    { name: "Wild Cash", image: "./img/game5.png" },
    { name: "Alien Fruits", image: "./img/game6.png" },
    { name: "Sweet Rush", image: "./img/game7.png" },
    { name: "Dice Bonanza", image: "./img/game8.png" },
    { name: "Money Tree", image: "./img/game9.png" },
    { name: "Hottest 666", image: "./img/game10.png" },
    { name: "Candy Monsta", image: "./img/game11.png" },
    { name: "Lucky Blue", image: "./img/game12.png" }

];

const openModalBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');


function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

closeBtn.addEventListener('click', () => {
    closeModal()
})

modalOverlay.addEventListener('click', (e) => {
    if (e.target !== modalOverlay) {
        return
    }
    closeModal()
}
)

openModalBtn.addEventListener('click', () => {
    openModal()
})

//search

const modalGames = document.querySelector('.modal-games-list');
const searchInput = document.querySelector('.search-input')

function searchedGames(games) {
    modalGames.innerHTML = '';
    games.forEach(game => {
        const card = createGameCard(game);
        modalGames.appendChild(card)
    });
}
searchedGames(allGames)

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    const filteredGames = allGames.filter(game =>
        game.name.toLowerCase().includes(query)
    );


    searchedGames(filteredGames);
});
