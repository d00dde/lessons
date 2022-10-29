export function putElement(parent, options) {
  const singleTags = ["input", "img", "video", "audio"];
  const tag = options.tag ?? "div";
  const child = options.child ?? "";
  const insertPlace = options.place ?? "beforeend";
  const className = options.class ? `class="${options.class}"` : "";
  const attributes = options.attributes ? mapAttributes(options.attributes) : "";
  let element = `
    <${tag} ${className} ${attributes}>
      ${child}
    </${tag}>
  `;
  if (singleTags.includes(tag)) {
    element = `<${tag} ${className} ${attributes}>`;
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
