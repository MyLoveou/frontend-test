const remained = document.querySelector('.remained')
const percentage = document.querySelector('.percentage')
const liters = document.querySelector('#liters')
const cups = document.querySelectorAll('.cup.cup-small')
// console.log(cups)
// UpdatedCup()

// 点击某一个杯子，前面的杯子都被选中
// 同时点击已选中的杯子，后面被选中的杯子取消被选中的状态
// 当后面的杯子都没有被选中的，被点击的杯子的选中状态取消
// 同时大杯子被填指定分量

cups.forEach((cup, index) => {
  // console.log(cup)
  cup.addEventListener('click', () => StatusSwitch(index))
})

function StatusSwitch(index) {
  console.log('测试')
  if (cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')) {
    index--
    console.log(index)
  }
  cups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  UpdatedCup()
}

function UpdatedCup() {
  const fullSmallCups = document.querySelectorAll('.cup.cup-small.full').length
  console.log(fullSmallCups)
  const totalCups = cups.length
  if (fullSmallCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullSmallCups / totalCups * 330}px`
    percentage.innerText = `${fullSmallCups / totalCups * 100}%`
  }

  if (fullSmallCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerHTML = `${2 - (250 * fullSmallCups / 1000)}L`
  }
}