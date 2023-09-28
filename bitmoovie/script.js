const articles = [
    
    { title: 'Oppenhiemer', Date: '2023',popularity: 7,   tags: ['drama'] ,img:"./imag/ope.jpg"},
    { title: 'Inception', Date: '2010',popularity:8.5,   tags: ['sci-fi'] ,img:"./imag/incep.jpg"},
    { title: 'Scarface', Date: '1983',popularity: 7.2,   tags: ['action'] ,img:"./imag/sca.jpg"},
    { title: 'The god father', Date: '1972',popularity:9.2,   tags: ['action'] ,img:"./imag/theg.jpg"},
    { title: 'Mask', Date: '1994',popularity: 7,   tags: ['comedie'] ,img:"./imag/mask.jpg"},
      { title: 'The terminal', Date: '2004',popularity: 8.3,   tags: ['comedie'] ,img:"./imag/terminal.jpg"},
    { title: '21 jump street', Date: '2012',popularity: 8.1,   tags: ['comedie'] ,img:"./imag/21.jpg"},
    { title: 'Interstellar', Date: '2014',popularity: 7.5,   tags: ['sci-fi'] ,img:"./imag/inters.jpg"}, 
     { title: 'Tenet', Date: '2020',popularity: 8.2,   tags: ['sci-fi'] ,img:"./imag/tenet.jpg"},
     { title: 'Taxi driver', Date: '1976',popularity: 9.7,   tags: ['action'] ,img:"./imag/tf.jpg"},
    { title: 'Passengers', Date: '2016',popularity: 8,   tags: ['sci-fi'] ,img:"./imag/passe.jpg"},
    { title: 'Man on fire', Date: '2004',popularity: 7.9,   tags: ['crime'] ,img:"./imag/man.jpg"}, 
     { title: 'Blade runner', Date: '2017',popularity: 7.8,   tags: ['crime'] ,img:"./imag/blade.jpg"},
    { title: 'Split', Date: '2016',popularity: 6,   tags: ['horror'] ,img:"./imag/split.jpg"},
    { title: 'The conjuring', Date: '2013',popularity: 8,   tags: ['horror'] ,img:"./imag/conj.jpg"}, 
     { title: 'Annabelle', Date: '2017',popularity: 6.5,   tags: ['horror'] ,img:"./imag/anna.jpg"},


];

// Fonction pour afficher la liste d'articles
function displayArticles(articles) {
    const articleList = document.querySelector('.article-list');
    articleList.innerHTML = '';

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');
        articleCard.innerHTML = `
        <img src="${article.img}"></img>
            <h2 >${article.title}</h2>
            <p>Rating: ${article.popularity} </p> 
            <p>Year: ${article.Date}</p>
            
      
            <p>Tag: ${article.tags.join(', ')}</p>
            <button class="favorite-button">Ajouter aux Favoris</button>
        `;
        articleList.appendChild(articleCard);
    });
}




const sortDropdown = document.getElementById('sort');

let selectedSort = 'none';

sortDropdown.addEventListener('change', function () {
    selectedSort = this.value;
    displayArticles(articles);
});

function displayArticles(articles) {
    const articleList = document.querySelector('.article-list');
    articleList.innerHTML = '';

    let sortedArticles = [...articles];

    if (selectedSort === 'popularity') {
        sortedArticles.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === 'Date') {
        sortedArticles.sort((a, b) => a.Date - b.Date);
    }

    sortedArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');
        articleCard.innerHTML = `
        <img src="${article.img}"></img>
            <h2>${article.title}</h2>
            <p>Rating: ${article.popularity}</p>
            <p>Year: ${article.Date}</p>
            <p>Tag: ${article.tags.join(', ')}</p>
            <button class="favorite-button">Ajouter aux Favoris</button>
        `;
        articleList.appendChild(articleCard);
    });
}





// Fonction pour filtrer les articles par tag
document.getElementById('tag').addEventListener('change', function () {
    const selectedTag = this.value;
    let filteredArticles;

    if (selectedTag === 'all') {
        filteredArticles = articles;
    } else {
        filteredArticles = articles.filter(article => article.tags.includes(selectedTag));
    }

    displayArticles(filteredArticles);
});

displayArticles(articles);





const viewFavoritesButton = document.getElementById('viewFavoritesButton');

viewFavoritesButton.addEventListener('click', () => {
    const favoritesWindow = window.open('favorites.html', '_blank');

    favoritesWindow.addEventListener('load', () => {
        favoritesWindow.location.reload();
    });
});

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function () {
    const searchedMovies = [];
    const movieName = this.value.toLowerCase();

    articles.forEach((element) => {
        const title = element.title.toLowerCase();
        if (title.includes(movieName)) {
            searchedMovies.push(element);
        }
    });

    displayArticles(searchedMovies);
});










let favoriteArticles = [];

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('favorite-button')) {
        const articleTitle = event.target.parentElement.querySelector('h2').textContent;

        const article = articles.find(a => a.title === articleTitle);

        if (article) {
            const index = favoriteArticles.findIndex(a => a.title === articleTitle);

            if (index !== -1) {
                favoriteArticles.splice(index, 1);
                
                
            } else {
                favoriteArticles.push(article);
                
            }

            event.target.textContent = index !== -1 ? 'Ajouter aux Favoris' : 'Retirer des Favoris';

            localStorage.setItem('favorites', JSON.stringify(favoriteArticles));
        }
    }
});



// Function to display the favorite articles
function displayFavoriteArticles() {
    const favoritesList = document.querySelector('.favorites-list');
    favoritesList.innerHTML = '';

    favoriteArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');
        articleCard.innerHTML = `
            <img src="${article.img}" />
            <h2>${article.title}</h2>
            <p>Rating: ${article.popularity}</p>
            <p>Year: ${article.Date}</p>
            <p>Tag: ${article.tags.join(', ')}</p>
        `;
        favoritesList.appendChild(articleCard);
    });
}


const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
if (Array.isArray(storedFavorites)) {
    favoriteArticles = storedFavorites;
}


displayFavoriteArticles();













