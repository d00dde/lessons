// Task_14
import { putElement } from "../../helpers/putElement.js";

const innerElement = `
  <div class="inner">Inner element</div>
`;

putElement(document.body, {
  tag: "input",
  attributes: {
    src: "https://i.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw",
  },
});

// number;
// string;
// boolean;
// undefined;
// null;
// object;
// Symbol;
// BigInt()

const a = { b: 15 };

// falsey = 0, "", null, undefined, false, NaN


const result = lol() || kek() || kek() || lol();

console.log("result: ", result);

if(result)  {
  console.log("hey");
} else {
  console.log("hoy");
}

function lol() {
  console.log("lol");
  return 4;
}

function kek() {
  console.log("kek");
  return 6;
}


// const tag_1 = options.tag || "div";
//
// let tag;
// if(options.tag === undefined) {
//   tag =  "div";
// } else {
//   tag = options.tag;
// }
