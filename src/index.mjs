import join from 'lodash.join';
import './style.css';
import Icon from './icon.svg';
import printMe from './print.mjs';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = join(['Hello11', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
