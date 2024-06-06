export default function createElement(type, className) {
  const element = document.createElement(type);
  element.classList.add(className);

  return element;
}
