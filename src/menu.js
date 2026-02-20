import eggImg from './images/foods/egg-attack.jpg';
import baconImg from './images/foods/bacon-overflow.jpg';
import dinerImg from './images/foods/diner-double.jpg';
import oreoImg from './images/foods/oreo-milkshake.jpg';
import strawberryImg from './images/foods/strawberry-milkshake.jpg';
import mangoImg from './images/foods/Mango-Shake-Thumbnail.jpg';

export function renderMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuTitle = document.createElement('h2');
  menuTitle.setAttribute('class', 'menu-title');
  menuTitle.textContent = 'Our Menu';

  const burgersTitle = document.createElement('h3');
  burgersTitle.setAttribute('class', 'burgers-title');
  burgersTitle.textContent = 'Burgers';

  const burgersList = document.createElement('ul');
  burgersList.setAttribute('class', 'menu-items');

  const burgers = [
    {
      src: eggImg,
      alt: 'egg-attack',
      name: 'Egg Attack',
      price: '7.99'
    }, {
      src: baconImg,
      alt: 'bacon-overflow',
      name: 'Bacon Overflow',
      price: '8.99',
      class: 'position-left'
    }, {
      src: dinerImg,
      alt: 'diner-double',
      name: 'Diner Double',
      price: '9.99'
    }, 
  ];

  let burgersHTML = '';

  for (const burger of burgers) {
    burgersHTML += `
      <li class="menu-item">
        <img src="${burger.src}" alt="${burger.alt}" class="${burger.class}">
        <p class="menu-name">${burger.name}</p>
        <p class="price">$${burger.price}</p>
      </li>
    `;
  }

  burgersList.innerHTML = burgersHTML;

  const shakesTitle = document.createElement('h3');
  shakesTitle.setAttribute('class', 'shakes-title');
  shakesTitle.textContent = 'Shakes';

  const shakesList = document.createElement('ul');
  shakesList.setAttribute('class', 'menu-items');

  const shakes = [
    {
      src: oreoImg,
      alt: 'oreo-milkshake',
      name: 'Oreo Dream',
      price: '5.99'
    }, {
      src: strawberryImg,
      alt: 'strawberry-milkshake',
      name: 'Strawberry Heaven',
      price: '6.99'
    }, {
      src: mangoImg,
      alt: 'mango-shake',
      name: 'Mango paradise',
      price: '6.99'
    }, 
  ];

  let shakesHTML = '';

  for (const shake of shakes) {
    shakesHTML += `
      <li class="menu-item">
        <img src="${shake.src}" alt="${shake.alt}">
        <p class="menu-name">${shake.name}</p>
        <p class="price">$${shake.price}</p>
      </li>
    `;
  }

  shakesList.innerHTML = shakesHTML;

  content.appendChild(menuTitle);
  content.appendChild(burgersTitle);
  content.appendChild(burgersList);
  content.appendChild(shakesTitle);
  content.appendChild(shakesList);
}
