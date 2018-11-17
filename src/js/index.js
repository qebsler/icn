const li = document.querySelectorAll('li')
const term = document.querySelector('section#right-side-term')

li.forEach(el => {
  el.addEventListener('click', (e) => {
    let text
    let p = document.createElement('p')
    if (e.target.dataset.content !== 'images') {
      text = '<span class="blue">' + e.target.textContent + '</span><br>' + e.target.dataset.content
    } else {
      text = '<span class="blue">' + e.target.textContent + '</span><br>' +
      '<a href="assets/screen_1.png" target="_blank">screen_1.png</a><br>' +
      '<a href="assets/screen_2.png" target="_blank">screen_2.png</a><br>' +
      '<a href="assets/screen_3.png" target="_blank">screen_3.png</a><br>'
      console.log(e.target.textContent)
    }
    p.innerHTML = text
    p.classList.add(e.target.id)
    term.appendChild(p)
  })
})

term.addEventListener('dblclick', () => {
  term.innerHTML = ''
})
