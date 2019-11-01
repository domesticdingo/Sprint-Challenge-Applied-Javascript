// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console.log(response);
        let articles = response.data.articles;
        console.log(articles);
        articles.javascript.forEach((x) => {
            document.querySelector('.cards-container').appendChild(article(x))
        })
        articles.bootstrap.forEach((x) => {
            document.querySelector('.cards-container').appendChild(article(x))
        })
        articles.technology.forEach((x) => {
            document.querySelector('.cards-container').appendChild(article(x))
        })
        articles.jquery.forEach((x) => {
            document.querySelector('.cards-container').appendChild(article(x))
        })
        articles.node.forEach((x) => {
            document.querySelector('.cards-container').appendChild(article(x))
        })
})
    .catch(error => console.log('Error: ', error))

function article (param) {
    let container = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let authorImg = document.createElement('img');
    let authorBy = document.createElement('span');

    container.appendChild(headline);
    container.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorBy);

    headline.textContent = param.headline;
    authorImg.src = param.authorPhoto;
    authorBy.textContent = "By " + param.authorName;

    container.classList.add('cards-container');

    return container;
}