/**
 * Helper function that let assigning to a DOM element multiple properties at once.
 * Note that some properties (e.g. `height`, `width`) are readonly. You should use `element.setAttribute()` instead.
 * @param { HTMLButtonElement } element - DOM element
 * @param { any } parent - Element whom the children will be attached to
 * @param { Item[] } items - List of all possible suggestions
 */
export function setMultipleAttributes(element, attributes) {
  return Object.assign(element, attributes);
}

/**
 * Helper function that standardizes a string: all lowercase and with only a whitespace between words.
 * @param { string } string - string to format
 * @return { string } standardized string format
 */
export function formatString(string) {
  return string.replace(/^\s+|\s+$|\s+(?=\s)/g, "").toLowerCase();
}

/**
 * Helper function that check if `string` starts with `query`.
 * @param { string } string - string to search the query in
 * @param { string } query - query to look in the string
 * @return { boolean } string start with query
 */
export function stringStartWith(string, query) {
  const regex = new RegExp("^" + query + ".*$");
  return regex.test(string);
}
