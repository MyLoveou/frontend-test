const textarea = document.querySelector('textarea')
const tags = document.querySelector('.tags')
console.log(textarea.innerText)
let content = ''
textarea.addEventListener('keyup', (event) => {
  // 解析内容
  if (event.key == 'Enter') {
    // 随机函数
    textarea.value = ''
    randomSelect()
  } else {
    content = textarea.value
    console.log(textarea.value)
    contentAnalyze()
  }
})

function contentAnalyze() {
  let strs = content.split(', ').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  tags.innerHTML = ''
  strs.forEach((str, index)=>{
    let span = document.createElement('span')
    span.innerText = str
    span.classList.add('tag')
    tags.appendChild(span)
  })
}

function randomSelect(){
  const tagNums = document.querySelectorAll('.tag')
  let times = 0
  let timer = null
  timer = setInterval(()=>{
    times++
    const randomNum = Math.floor(Math.random() * (tagNums.length - 0)) + 0
    tagNums.forEach((tag)=>{
      tag.classList.remove('highlight')
    })
    tagNums[randomNum].classList.add('highlight')
    if(times>30)clearInterval(timer)
  }, 10)
}