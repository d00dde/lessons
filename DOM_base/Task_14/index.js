// Task_14
import putElement from "../../helpers/putElement.js";

const innerElement = `
  <div class="inner">Inner element</div>
`;

putElement(document.body, {
  child: innerElement,
  class: "outer",
  tag: "img",
  attributes: {
    src: "https://i.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw"
  }
});




