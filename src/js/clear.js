function clear (element) {
  element.addEventListener('dblclick', () => {
    element.innerHTML = ''
  })
}

export default clear
