import './home.css';
import './menu.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';

const content = document.getElementById('content');
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    content.innerHTML = '';
    
    if (e.target.classList.contains('home')) {
      renderHome();
    } else if (e.target.classList.contains('menu')) {
      renderMenu();
    }
  });
});

renderHome();