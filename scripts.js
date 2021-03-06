//Create request variable and assign a new fetch object
let request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    //begin accessing JSON data
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
          //create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //create an h1 and set text to film title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set text to film description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); //limit to 300 char
            p.textContent = `${movie.description}...`

            //append cards to container element
            container.appendChild(card);

            //each card contains an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        })
    }
}

//send request
request.send();

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

