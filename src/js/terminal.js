function terminal (element, term) {
  element.forEach(el => {
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
      }
      if (e.target.id === 'download') window.open('assets/mesure.apk')
      p.innerHTML = text
      p.classList.add(e.target.id)
      term.appendChild(p)
    })
  })
}

export default terminal
