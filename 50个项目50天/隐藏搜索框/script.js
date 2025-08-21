const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
btn.addEventListener('click',()=>{
  search.classList.toggle('active') // 当存在该样式时去除，但没有该样式时添加
  input.focus()
})