/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/dataParsing.js ***!
  \****************************/
// CONSTANTS AND VARIABLES-------------------------
const inputBar = document.querySelector('#inputBar');
const searchBar = document.querySelector('#searchBar');
const resultsCtn = document.querySelector('.resultsCtn');
const goBtn = document.querySelector('.goBtn');

let message;
let search;

// FUNCTIONS---------------------------------------
function messageAndInputRetriever() {
  // This function will pull the message from the input.
  message = inputBar.value;
  search = searchBar.value;
}

function resultRender(name, value) {
  // Rendering results by creating an element and appending to parent.
  const resultCtn = document.createElement('div');
  resultCtn.classList.add('info');

  if (name) {
    resultCtn.innerHTML = `${name}: ${value}`;
  } else {
    resultCtn.innerHTML = `${value}`;
  }

  resultsCtn.appendChild(resultCtn);
}

function messageParser() {
  let match = false;
  // Removing any spaces and splitting the message by "||".
  const splitMessage = message.replace(/\s/g, '').split('||');

  // This loop iterates through messages split by ||.
  for (let i = 0; i < splitMessage.length; i += 1) {
    // Splitting messages further by "|" into sections.
    const section = splitMessage[i].split('|');

    // Comparing if segment name matches search string.
    if (search.toLowerCase() === section[0].toLowerCase()) {
      match = true;
      let name;
      let value;
      resultRender('', section[0]);

      // Organizing the fields being sent to render.
      section.slice(1).forEach((element) => {
        name = element.slice(0, 3);
        value = element.slice(3, element.length);
        resultRender(name, value);
      });
    } else {
      // This loop skips segment info and parses through the field info.
      for (let j = 1; j < section.length; j += 1) {
        let fieldname = [];
        let fieldValue = [];

        // "Fieldname" stores the first 3 letters of the field to compare to "search".

        fieldname = section[j].split('').splice(0, 3).join('');
        fieldValue = section[j].split('').splice(3).join('');

        if (fieldname.toLowerCase() === search.toLowerCase()) {
          match = true;
          resultRender(fieldname, fieldValue);
        }
      }
    }
  }
  if (match === false) {
    resultRender('', 'No result found.');
  }
}

// SCRIPT------------------------------------------
goBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // remove old results
  while (resultsCtn.firstChild) {
    resultsCtn.removeChild(resultsCtn.firstChild);
  }
  messageAndInputRetriever();
  messageParser();
});

/******/ })()
;
//# sourceMappingURL=main.js.map