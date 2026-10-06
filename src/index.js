import './global.css';
import './pages/home/home.css';
import './pages/menu/menu.css';
import './pages/contact/contact.css';
import { renderHome } from './pages/home/home';
import { renderMenu } from './pages/menu/menu';
import { renderContact } from './pages/contact/contact';

renderHome();

(function switchPage() {
  document.querySelector('nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    
    if (!btn) return;

    if (btn.classList.contains('home')) renderHome();
    if (btn.classList.contains('menu')) renderMenu();
    if (btn.classList.contains('contact')) renderContact();
  });
})();
