
import { createGameCard } from './gameCard.js';

const games = [
    { name: "Miss Cherry Fruits", favorite: true, lastPlayed: "2026-02-04", image: './img/game1.png' },
    { name: "Parrots Gold", favorite: false, lastPlayed: "2026-02-01", image: './img/game2.png' },
    { name: "Duel at Dawn", favorite: true, lastPlayed: "2025-01-30", image: './img/game3.png' },
    { name: "Mechanical Clover", favorite: false, lastPlayed: "2026-01-03", image: './img/game4.png' },
    { name: "Wild Cash", favorite: false, lastPlayed: "2026-01-23", image: './img/game5.png' },
    { name: "Miss Cherry Fruits 2", favorite: true, lastPlayed: "2026-01-15", image: './img/game1.png' },
    { name: "Parrots Gold 2", favorite: false, lastPlayed: "2026-02-05", image: './img/game2.png' },
    { name: "Duel at Dawn 2", favorite: true, lastPlayed: "2026-01-28", image: './img/game3.png' },
    { name: "Mechanical Clover 2", favorite: false, lastPlayed: "2026-02-02", image: './img/game4.png' },
    { name: "Wild Cash 2", favorite: false, lastPlayed: "2026-01-20", image: './img/game5.png' },
];

let currentGames = [...games];
let currentIndex = 0;
const itemsPerView = 5;

const gameList = document.querySelector('.resent-games-list');
const prevBtn = document.querySelector('.before-btn');
const nextBtn = document.querySelector('.next-btn');
const recentBtn = document.querySelector('.resent-btn');
const favoriteBtn = document.querySelector('.favorite-btn');
const showAllBtn = document.querySelector('.showAll-btn');


function renderGames() {
    gameList.innerHTML = '';

    let visibleGames;

    if (showAllBtn.classList.contains('active')) {
        visibleGames = currentGames;
    } else {

        visibleGames = currentGames.slice(currentIndex, currentIndex + itemsPerView);
    }


    visibleGames.forEach(game => {
        const card = createGameCard(game);
        gameList.appendChild(card);
    });
}

prevBtn.addEventListener('click', () => {
    if (!showAllBtn.classList.contains('active') && currentIndex > 0) {
        currentIndex--;
        renderGames();
    }
});

nextBtn.addEventListener('click', () => {
    if (!showAllBtn.classList.contains('active') && currentIndex < currentGames.length - itemsPerView) {
        currentIndex++;
        renderGames();
    }
});

recentBtn.addEventListener('click', () => {
    recentBtn.classList.toggle('active');
    favoriteBtn.classList.remove('active');
    showAllBtn.classList.remove('active');

    currentGames = [...games].sort((a, b) => new Date(b.lastPlayed) - new Date(a.lastPlayed));
    currentIndex = 0;
    renderGames();
});

favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
    recentBtn.classList.remove('active');
    showAllBtn.classList.remove('active');

    currentGames = favoriteBtn.classList.contains('active')
        ? games.filter(game => game.favorite)
        : [...games];
    currentIndex = 0;
    renderGames();
});

showAllBtn.addEventListener('click', () => {
    showAllBtn.classList.toggle('active');
    currentIndex = 0;
    renderGames();
});

renderGames();
