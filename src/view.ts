const getListElement = () => {
  return "<ul class=\"menu\">" +
    "          <li>전체</li>" +
    "          <li>개발</li>" +
    "          <li>디자인</li>" +
    "        </ul>" +
    "        <ul class=\"list\">" +
    "          <li>초기 데이터</li>" +
    "        </ul>"
}

export default (targetElement:Element) => {
  const element = targetElement.cloneNode(true);

  const template = document.createElement('div');
  template.innerHTML = getListElement();

  const templateChild = Array.from(template.childNodes);
  templateChild.map((child) => element.appendChild(child))

  return element
}
