const btn = document.querySelector('.btn')
const showContent = document.querySelectorAll('.content')
const listBtn = document.querySelector('.list-btn')

window.addEventListener('keydown', (event)=>{
  btn.style.display = "none"

  let e = event || window.event
  showContent[0].innerText = e.key
  showContent[1].innerText = e.keyCode
  showContent[2].innerText = e.code
  listBtn.style.display = "block"
})