const btns = document.querySelectorAll('.btn')
const p = document.querySelectorAll('p')
const infos = document.querySelectorAll('.info')
btns.forEach((btn,index)=>{
  // console.log("测试")
  let isOpen = false
  btn.addEventListener('click', ()=>{
    // console.log('测试')
    isOpen = !isOpen
    p[index].classList.toggle('unactive')
    btn.innerText = isOpen?'折叠':'展开'
    infos[index].classList.toggle('active')
  })
})