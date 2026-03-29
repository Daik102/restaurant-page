export function renderHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Odin Burger';

  const establishedYear = document.createElement('p');
  establishedYear.classList.add('establishedYear');
  establishedYear.textContent = '- Est. 2025 -';

  const message = document.createElement('p');
  message.classList.add('message');
  message.textContent = 'Welcome to the best burger restaurant in the world!';

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const link = document.createElement('a');
  link.classList.add('photo-link');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'https://unsplash.com/photos/two-square-brown-wooden-dining-tables-near-brown-brick-wall-OkhcMbf3vQ0');
  link.textContent = 'Photo by Katlyn Giberson on Unsplash';
  
  content.appendChild(title);
  content.appendChild(establishedYear);
  content.appendChild(message);
  content.appendChild(imgContainer);
  content.appendChild(link);
}
