const li = document.querySelectorAll('li')
const term = document.querySelector('section#right-side-term')

li.forEach(el => {
  el.addEventListener('click', (e) => {
    let p = document.createElement('p')
    if (e.target.dataset.content !== 'images') {
      p.innerHTML = `<p class='${e.target.id}'>${e.target.dataset.content} </p><br>`
    } else {
      p.innerHTML = `<p class='${e.target.id}'>images: <br><img src="assets/screen_1.png" alt="screen of the application"><img src="assets/screen_2.png" alt="screen of the application"><img src="assets/screen_3.png" alt="screen of the application"></p><br>`
    }
    term.appendChild(p)
  })
})

term.addEventListener('dblclick', () => {
  term.innerHTML = ''
})
