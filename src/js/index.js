import terminal from './terminal'
import clear from './clear'

const li = document.querySelectorAll('li')
const term = document.querySelector('section#right-side-term')

terminal(li, term)
clear(term)
