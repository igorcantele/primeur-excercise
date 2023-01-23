import { AutoComplete } from "./autocomplete.js";
import { getItems } from "./items.js";
import { dynamicProperties } from "./theme-properties.js";

window.onload = init;

function init() {
  const inputElem = document.getElementById("search-bar-container__input");
  const parentElem = document.getElementById("parent");
  const switchModeInput = document.getElementById("mode-switch");

  function initiateAutocomplete(items) {
    const autoComplete = new AutoComplete(inputElem, parentElem, items);
    autoComplete.listenInput();
  }

  changeMode();
  //Using click to grant support to IE11
  switchModeInput.addEventListener("click", changeMode);

  getItems(initiateAutocomplete);
}

function setUpViewMode(mode) {
  for (const [key, value] of Object.entries(dynamicProperties[mode])) {
    document.body.style.setProperty(key, value);
  }
}

function changeMode($event) {
  // if matchMedia isn't supported light version default.
  // if we drop older browser support we can simply refactor to document.documentElement.setAttribute("data-theme", theme) and move the vars to css
  const isDefaultLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const isLight =
    (isDefaultLight && !$event?.target?.checked) ||
    (!isDefaultLight && $event?.target?.checked);

  const mode = isLight ? "light" : "dark";
  setUpViewMode(mode);
}
