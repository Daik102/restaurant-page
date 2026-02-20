import './home.css';
import './menu.css';
import './contact.css';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';

renderHome();

(function switchPage() {
  const btns = document.querySelectorAll('.btn');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('home')) {
        renderHome();
      } else if (e.target.classList.contains('menu')) {
        renderMenu();
      } else if (e.target.classList.contains('contact')) {
        renderContact();
      }
    });
  });
})();
