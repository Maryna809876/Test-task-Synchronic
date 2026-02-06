
import { createGameCard } from "./gameCard.js";

const topGames = [
    { name: "Alien Fruits", favorite: true, lastPlayed: "2026-02-04", image: './img/game6.png' },
    { name: "Parrots Gold", favorite: false, lastPlayed: "2026-02-01", image: './img/game2.png' },
    { name: "Sweet Rush", favorite: true, lastPlayed: "2025-01-30", image: './img/game7.png' },
    { name: "Dice Bonanza", favorite: false, lastPlayed: "2026-01-03", image: './img/game8.png' },
    { name: "Money Tree", favorite: false, lastPlayed: "2026-01-23", image: './img/game9.png' },
    { name: "Alien Fruits 2", favorite: false, lastPlayed: "2026-02-04", image: './img/game6.png' },
    { name: "Parrots Gold 2", favorite: true, lastPlayed: "2026-02-01", image: './img/game2.png' },
    { name: "Sweet Rush 2", favorite: true, lastPlayed: "2025-01-30", image: './img/game7.png' },
    { name: "Dice Bonanza 2", favorite: false, lastPlayed: "2026-01-03", image: './img/game8.png' },
    { name: "Money Tree 2", favorite: true, lastPlayed: "2026-01-23", image: './img/game9.png' },
];

let currentTopGames = [...topGames];
let currentTopIndex = 0;
const itemsPerView = 5;

const topGameList = document.querySelector('.top-games-list');
const prevTopBtn = document.querySelector('.top-before-btn');
const nextTopBtn = document.querySelector('.top-next-btn');
const showAllTopBtn = document.querySelector('.top-showAll-btn');

function renderTopGames() {
    topGameList.innerHTML = '';

    let visibleGames;

    if (showAllTopBtn.classList.contains('active')) {
        visibleGames = currentTopGames;
    } else {
        visibleGames = currentTopGames.slice(currentTopIndex, currentTopIndex + itemsPerView);
    }

    visibleGames.forEach(game => {
        const card = createGameCard(game);
        topGameList.appendChild(card);
    });
}

prevTopBtn.addEventListener('click', () => {
    if (!showAllTopBtn.classList.contains('active') && currentTopIndex > 0) {
        currentTopIndex--;
        renderTopGames();
    }
});

nextTopBtn.addEventListener('click', () => {
    if (!showAllTopBtn.classList.contains('active') && currentTopIndex < currentTopGames.length - itemsPerView) {
        currentTopIndex++;
        renderTopGames();
    }
});

showAllTopBtn.addEventListener('click', () => {
    showAllTopBtn.classList.toggle('active');
    currentTopIndex = 0;
    renderTopGames();
});

renderTopGames();
