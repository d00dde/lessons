import { factorial } from "../src/factorial.js";
import { runTests } from "../core/testCore.js";

const fixtures = [
  {
    name: "Data is 0",
    data: 0,
    expected: 1,
  },
  {
    name: "Data is 1",
    data: 1,
    expected: 1,
  },
  {
    name: "Data is 5",
    data: 5,
    expected: 120,
  },
  {
    name: "Data is -1",
    data: -1,
    expected: -1,
  },
  {
    name: "Data is 2.5",
    data: 2.5,
    expected: -1,
  },
  {
    name: "Data is \"\"",
    data: "",
    expected: -1,
  },
  {
    name: "Data is {}",
    data: {},
    expected: -1,
  },
];

runTests(
  "Factorial",
  factorial,
  fixtures,
  (data, expected, actual) => `Factorial ${data} should be equal ${expected}, but equal ${actual}`
);

