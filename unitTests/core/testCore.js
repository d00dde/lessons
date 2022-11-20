export function runTests(description, testFunction, fixtures, messageCb) {
  let results = "";
  fixtures.forEach((item) => {
    let actual = testFunction(item.data);
    if (actual !== item.expected) {
      results += `<li>${item.name} <span class="failed">FAILED</span>: ${messageCb(item.data, item.expected, actual)}</li>`;
    } else {
      results += `<li>${item.name} <span class="passed">PASSED</span></li>`;
    }
  });
  document.body.insertAdjacentHTML("beforeend", `
    <div> ${description}</div>
    <ul>
      ${results}
    </ul> 
  `);
}
