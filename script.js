// قائمة الألعاب
const games = [
    { name: "لعبة 1", image: "https://via.placeholder.com/200x150", link: "https://www.mediafire.com/file/1" },
    { name: "لعبة 2", image: "https://via.placeholder.com/200x150", link: "https://www.mediafire.com/file/2" },
    { name: "لعبة 3", image: "https://via.placeholder.com/200x150", link: "https://www.mediafire.com/file/3" },
    // أضف 100 لعبة هنا
];

// إضافة الألعاب إلى الصفحة
function displayGames(gamesToShow) {
    const container = document.querySelector('.games-container');
    container.innerHTML = ''; // تنظيف الحاوية قبل الإضافة
    gamesToShow.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <p>${game.name}</p>
        `;
        gameItem.addEventListener('click', () => {
            window.location.href = game.link; // تحميل اللعبة عند الضغط
        });
        container.appendChild(gameItem);
    });
}

// وظيفة البحث
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
    displayGames(filteredGames);
});

// تبديل الوضع الداكن
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'التبديل للوضع العادي' : 'التبديل للوضع الداكن';
});

// عرض الألعاب عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayGames(games); // عرض الألعاب
    document.body.classList.add('light-mode'); // تعيين الوضع الافتراضي
});