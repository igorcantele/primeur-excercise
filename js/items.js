export class Item {
  id;
  screenName;
  product;
  color;
}

const API_URL = "./assets/";
const ITEM_URL = "data.json";

/**
 * @param { function } callback - callback where you want to use items
 * @return { function } callback with items as an input
 */
export function getItems(callback) {
  const url = API_URL + ITEM_URL;
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.send();

  req.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      console.error(this.error);
      return callback.apply(null, [[]]);
    }
    //simulating pagination
    const items = JSON.parse(this.response).slice(0, 50);
    return callback.apply(null, [items]);
  };
}
