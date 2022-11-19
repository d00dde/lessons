import { evenSum } from "../src/evenSum.js";
import { runTests } from "../core/testCore.js";

const fixtures = [
  {
    name: "Data is 0",
    data: 0,
    expected: 0,
  },
  {
    name: "Data is 1",
    data: 1,
    expected: 0,
  },
  {
    name: "Data is 2",
    data: 2,
    expected: 2,
  },
  {
    name: "Data is -1",
    data: -1,
    expected: 0,
  },
  {
    name: "Data is 10",
    data: 10,
    expected: 30,
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
  "Even Summa",
  evenSum,
  fixtures,
  (data, expected, actual) => `Summa even for ${data} should be equal ${expected}, but equal ${actual}`
);


