export default function putElement(parent, options) {
  const singleTags = ["input", "img"];
  const tag = options.tag ?? "div"; // Ленивое применение || &&
  const child = options.child ?? "";
  const className = options.class ? `class=${options.class}` : "";  // Тернарный оператор
  const attributes = options.attributes ? mapAttributes(options.attributes) : "";
  const insertPlace = options.place ?? "beforeend";
  let element = `
    <${tag} ${className} ${attributes}>
      ${child}
    </${tag}>
  `;
  if (singleTags.includes(tag)) {  // Проверка, входит ли tag в массив
    element = `<${tag} ${className} ${attributes} />`;
  }
  parent.insertAdjacentHTML(insertPlace, element);
}

function mapAttributes(attributes) {
  return Object.entries(attributes).reduce((result, item) => {
    const attributeName = item[0];
    const attributeValue = item[1];
    return `${result} ${attributeName}="${attributeValue}"`;
  }, "");
}
