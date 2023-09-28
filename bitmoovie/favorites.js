document.addEventListener('DOMContentLoaded', () => {
    
    function displayFavoriteArticles() {
        
      
        const favoriteArticles = JSON.parse(localStorage.getItem('favorites'));

        const favoritesList = document.querySelector('.favorites-list');
        favoritesList.innerHTML = '';

        if (Array.isArray(favoriteArticles)) {
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
        } else {
            favoritesList.innerHTML = '<p>No favorite articles.</p>';
        }
    }


    displayFavoriteArticles();
    
        

}
)
;