/*
 *  Takes a string, type, which is the type of element and an object
 *  which configures the element.
 *
 *  object = {
 *    id : "...",
 *    innerText: "...",
<<<<<<< HEAD
 *    properties: ["...", "..."],
=======
 *    attributes: ["...", "..."],
>>>>>>> buildposts
 *    children: ["...", "..."],
 *    class: ["...", "..."]
 *  }
 *
 *  for children, order matters! The first element should be at the top of the
 *  DOM
 */
function buildElement(type, features) {
  const el = document.createElement(type);

  if (features.id) {
    el.id = features.id;
  }

  if (features.class) {
    el.className = features.class.join(" ");
  }

<<<<<<< HEAD
  if (features.properties) {
    features.properties.forEach(property => {
      el.setProperty(property, properties[property]);
=======
  if (features.attributes) {
    features.attributes.forEach(property => {
      el.setAttribute(attribute, features.attributes[property]);
>>>>>>> buildposts
    });
  }

  if (features.innerText) {
    el.innerText = features.innerText;
  }

  if (features.children) {
    features.children.forEach(child => {
      el.appendChild(child);
    });
  }

  return el;
}
<<<<<<< HEAD
=======

module.exports = buildElement;
>>>>>>> buildposts
