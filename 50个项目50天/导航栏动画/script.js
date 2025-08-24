const btn = document.querySelector('.icon')
const nav = document.querySelector('nav')
btn.addEventListener('click', (event)=>{
  nav.classList.toggle('active')
})

// 这个动画的实质是，当点击按钮时，nav的宽度变小
// 同时ul列表中的内容和右侧的按钮向中间移动
// 并且将这文字内容隐藏，按钮样式改变