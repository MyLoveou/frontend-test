const audios = document.querySelectorAll('audio')
const btns = document.querySelectorAll('.btn')
// console.log
btns.forEach((btn, index)=>{
  console.log(btn)
  btn.onclick = function(){
    btns.forEach((btn, index)=>{
      audios[index].pause()

    })
    audios[index].play()
    console.log(index)
  }
})