import View from './type/View';

export const createElement = (target:Element, view:View) => {
  const element = target.cloneNode(true);

  const template = document.createElement('div');
  template.innerHTML = view.render();

  const templateChild = Array.from(template.childNodes);
  templateChild.map((child) => element.appendChild(child))

  target.replaceWith(element);
}
