// version 1.0.4
function clear (element) {
  element.addEventListener('dblclick', () => {
    element.innerHTML = ''
  })
}

export default clear
