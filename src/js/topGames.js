topGames = [
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
]



let currentTopGames = [...topGames];
let currentTopPage = 0;
let itemsPerTopPage = 5;

const topGameList = document.querySelector('.top-games-list');

const prevTopBtn = document.querySelector('.top-before-btn');
const nextTopBtn = document.querySelector('.top-next-btn');
const showAllTopBtn = document.querySelector('.top-showAll-btn');

function renderTopGames(gamesToShow, page = 0) {
    topGameList.innerHTML = ''
    let paginatedGames = gamesToShow
    if (!showAllTopBtn.classList.contains('active')) {
        const start = page * itemsPerTopPage;
        const end = start + itemsPerTopPage;
        paginatedGames = gamesToShow.slice(start, end);

    }
    paginatedGames.forEach(game => {
        const li = document.createElement('li');
        li.classList.add('top-games-list-item');
        li.innerHTML = `
    <div class="top-game-banner">
    <div class="top-img-wrapper">
                        <img src=${game.image} alt="${game.name}">
                        </div>
                        <div class="top-game-btns">
                            <button class="top-play">Play</button>
                            <button class="top-demo">Demo</button>
                        </div>
                    </div>
                    <div class="top-game-name">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.24235 14.8565V2.99298L12.0732 8.00002L6.50538 10.8377V8.00002C6.50538 7.36942 6.00426 6.8565 5.38304 6.8565C4.76414 6.8565 4.26072 7.36707 4.26072 8.00002V12.6847C4.26072 13.0824 4.46163 13.4471 4.79186 13.6565C5.1244 13.8659 5.53546 13.8847 5.88418 13.7059L15.0822 9.02118C15.4633 8.82826 15.7011 8.43296 15.7011 8.00002C15.7011 7.56707 15.461 7.17178 15.0822 6.97885L1.62346 0.120033C1.27475 -0.0564369 0.86369 -0.0376134 0.531146 0.171798C0.200912 0.378856 0 0.745915 0 1.14356V14.8565C0 15.4894 0.501125 16 1.12233 16C1.74123 16 2.24235 15.4894 2.24235 14.8565Z" fill="#9FA1AA"/>
</svg>
<p>${game.name}</p>
                    </div>`
        topGameList.appendChild(li)

    });
}


prevTopBtn.addEventListener('click', () => {
    if (currentTopPage > 0) {
        currentTopPage--
        renderTopGames(currentTopGames, currentTopPage);

    }
})

nextTopBtn.addEventListener('click', () => {
    console.log(currentTopPage);

    const maxPage = Math.ceil(currentTopGames.length / itemsPerTopPage) - 1;
    if (currentTopPage < maxPage) {
        currentTopPage++
        renderTopGames(currentTopGames, currentTopPage);

    }
})

showAllTopBtn.addEventListener('click', () => {
    showAllTopBtn.classList.toggle('active');
    renderTopGames(currentTopGames, currentTopPage);
});

renderTopGames(currentTopGames, currentTopPage);

