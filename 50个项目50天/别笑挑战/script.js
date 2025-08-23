const content = [
  "有人问我，字母表的第九个字母是什么？这完全是一个猜测，但我是对的。",
  "人手有多少骨头？他们中的少数。",
  "当你的兔子被淋湿时你会怎么做？你得到你的野兔烘干机。",
  "你听说过面包厂被烧毁的事吗？他们说生意是吐司。",
  "每当杂货店的收银员问我父亲是否要把装在袋子里的牛奶时，他都会回答说，'不，把它放在纸盒里！",
  "矮个子喜欢吃什么饼干？脆 饼。",
  "如果孩子在午睡时间拒绝睡觉，他们是否因拒绝休息而感到内疚？"
]

const btn = document.querySelector(".btn")
const joke = document.querySelector('#joker')
console.log(joke)
num = 0
btn.onclick = () =>{
  num++
  if(num>content.length-1)num=0
  joke.innerText = content[num]
} 