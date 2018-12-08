// version 1.0.4
/** add listener on the li element and append a paragraph in the terminal when a li is clicking
 * @param {HTMLLIElement} element
 * @param {HTMLElement} term */
function terminal (element, term) {
  element.forEach(el => {
    el.addEventListener('click', (e) => {
      let p = document.createElement('p') // Create paragraph element
      p.innerHTML = '<span class="blue">' +
        e.target.textContent +
        '</span><br>' +
        e.target.dataset.content // define content of the paragraph with the data-attribute

      p.classList.add(e.target.id) // add the class to the paragraph
      term.appendChild(p) // append the paragraph at the terminal
    })
  })
}

export default terminal
