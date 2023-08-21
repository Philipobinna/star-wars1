const characterListElement = document.querySelector('.character-list');
const characterDetailsElement = document.querySelector('.character-details');

// Fetch characters from the API
fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        displayCharacters(characters);
    })
    .catch(error => console.error('Error fetching characters:', error));

function displayCharacters(characters) {
    characterListElement.innerHTML = '';
    
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.innerText = character.name;
        characterCard.addEventListener('click', () => displayCharacterDetails(character));
        characterListElement.appendChild(characterCard);
    });
}

function displayCharacterDetails(character) {
    const detailsHTML = `
        <h2>Name: ${character.name}</h2>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height}</p>
    `;
    characterDetailsElement.innerHTML = detailsHTML;
    characterDetailsElement.style.display = 'block';
}
