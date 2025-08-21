const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()
function checkBoxes(){
  const triggerBottom = window.innerHeight/5*4
  boxes.forEach(box=>{
    const boxTop = box.getBoundingClientRect().top
    // 触发动画条件
    if(boxTop<triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}