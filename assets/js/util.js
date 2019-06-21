// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function q(parentEl, sel, cb) {
  const els = parentEl.querySelectorAll(sel);
  if (!cb) return [].slice.call(els, 0);
  const res = [];
  for (let i = 0; i < els.length; i++) res.push(cb(els[i], i));
  return res;
}

export function ro(obj, name, val) {
  Object.defineProperty(obj, name, typeof val == 'function' ? {get: val} : {value: val, writable: false});
}

export function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

export function tagNameIs(el, tagName) {
  return el && el.tagName && el.tagName.toLowerCase() === tagName;
}