import eggImg from '../../images/foods/egg-attack.jpg';
import baconImg from '../../images/foods/bacon-overflow.jpg';
import dinerImg from '../../images/foods/diner-double.jpg';
import oreoImg from '../../images/foods/oreo-milkshake.jpg';
import strawberryImg from '../../images/foods/strawberry-milkshake.jpg';
import mangoImg from '../../images/foods/Mango-Shake-Thumbnail.jpg';

const menuItems = [
  {
    category: 'burger',
    src: eggImg,
    name: 'Egg Attack',
    price: '7.99',
  }, {
    category: 'burger',
    src: baconImg,
    name: 'Bacon Overflow',
    price: '8.99',
    class: 'position-left',
  }, {
    category: 'burger',
    src: dinerImg,
    name: 'Diner Double',
    price: '9.99',
  }, {
    category: 'shake',
    src: oreoImg,
    name: 'Oreo Dream',
    price: '5.99',
  }, {
    category: 'shake',
    src: strawberryImg,
    name: 'Strawberry Heaven',
    price: '6.99',
  }, {
    category: 'shake',
    src: mangoImg,
    name: 'Mango paradise',
    price: '6.99',
  }, 
];

let burgersHTML = '';
let shakesHTML = '';

for (const item of menuItems) {
  if (item.category === 'burger') {
    burgersHTML += `
      <li class="menu-item">
        <img src="${item.src}" alt="" class="${item.class}">
        <p class="menu-name">${item.name}</p>
        <p class="price">$${item.price}</p>
      </li>
    `;
  } else if (item.category === 'shake') {
    shakesHTML += `
      <li class="menu-item">
        <img src="${item.src}" alt="">
        <p class="menu-name">${item.name}</p>
        <p class="price">$${item.price}</p>
      </li>
    `;
  }
}

const content = document.getElementById('content');

export function renderMenu() {
  const menuTitle = document.createElement('h2');
  menuTitle.classList.add('menu-title');
  menuTitle.textContent = 'Our Menu';

  const burgersTitle = document.createElement('h3');
  burgersTitle.classList.add('burgers-title');
  burgersTitle.textContent = 'Burgers';

  const burgersList = document.createElement('ul');
  burgersList.classList.add('menu-items');
  burgersList.innerHTML = burgersHTML;

  const shakesTitle = document.createElement('h3');
  shakesTitle.classList.add('shakes-title');
  shakesTitle.textContent = 'Shakes';

  const shakesList = document.createElement('ul');
  shakesList.classList.add('menu-items');
  shakesList.innerHTML = shakesHTML;

  content.innerHTML = '';
  content.appendChild(menuTitle);
  content.appendChild(burgersTitle);
  content.appendChild(burgersList);
  content.appendChild(shakesTitle);
  content.appendChild(shakesList);
}
