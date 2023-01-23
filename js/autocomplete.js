import {
  formatString,
  setMultipleAttributes,
  stringStartWith,
} from "./helpers.js";

/**
 * Append autocomplete items to the given element when the given input emits an `input` event.
 * @constructor
 * @param { HTMLInputElement } input - Input that has to emit the event
 * @param { HTMLElement } parent - Element whom the children will be attached to
 * @param { Item[] } items - List of all possible suggestions
 */
export class AutoComplete {
  _query;
  get query() {
    return this._query;
  }
  set query(query) {
    this._query = formatString(query);
  }

  constructor(input, parent, items) {
    this.input = input;
    this.parent = parent;
    this.items = items;
  }

  listenInput() {
    // using bind to stick with ES5 and grant IE11 support
    const createSuggestionOnInputBounded =
      this.createSuggestionsOnInput.bind(this);

    this.input.addEventListener("input", createSuggestionOnInputBounded);
  }

  createSuggestionsOnInput() {
    this.clearSuggestions();
    this.query = this.input.value;
    const filteredItems = this.filterItems();
    this.populateSuggestion(filteredItems);
  }

  filterItems() {
    if (!this.query || this.query === "") return [];
    const avoidCheck = ["id"];

    // using bind to stick with ES5 and grant IE11 support
    function applyFilter(item) {
      let keepItem = false;
      for (const [key, value] of Object.entries(item)) {
        if (avoidCheck.includes(key)) continue;
        if (stringStartWith(formatString(value), this._query)) keepItem = true;
      }
      return keepItem;
    }
    const applyFilterBounded = applyFilter.bind(this);

    return this.items.filter(applyFilterBounded);
  }

  populateSuggestion(filteredItems) {
    // using bind to stick with ES5 and grant IE11 support
    const selectItemCallback = this.selectItem.bind(this);

    for (const item of filteredItems) {
      const button = document.createElement("button");
      const buttonText = document.createTextNode(item.screenName);
      const attributes = {
        id: `suggestion_${item.id}`,
        className: "suggestions",
        ariaLabel: `Autocomplete suggestion: ${item.screenName}`,
        type: "button",
      };

      setMultipleAttributes(button, attributes);
      button.addEventListener("click", function () {
        selectItemCallback(item);
      });
      button.appendChild(buttonText);
      this.parent.appendChild(button);
    }
  }

  clearSuggestions() {
    while (this.parent.firstChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }

  selectItem(item) {
    this.input.value = item.screenName;
    this.createSuggestionsOnInput();
    this.clearSuggestions();
  }
}
