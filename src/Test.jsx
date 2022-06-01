import React, { useState, useEffect } from 'react'
import img1 from './img/test.jpg'
import img2 from './img/dog.jpg'
import img3 from './img/cat.jpg'
import img4 from './img/cat2.jpg'
import img5 from './img/cat3.jpg'
import './test1.css'
import { changeSlide } from 'react-slick/lib/utils/innerSliderUtils'


export default function Test() {
  //定义存放图片和图片里文字的两个数组
  const showImg = [img1, img2, img3, img4, img5, img3, img2, img1, img4]
  const newArry = []
  //通过for循环遍历将循环得出的dom元素做个一个数组.
  for (let i = 0; i < showImg.length; i++) {
    newArry.push(
      <div>
           <img src={showImg[i]} style={{width: "324px", height: "184px"}}/>
            <div className='boxTest'>{i}</div>
      </div>
    )
  }
  //使用useState对数组进行操作
  const [showList, setShowList] = useState(newArry)
  const [isShow, setIsShow] = useState('true')
  //给每个图片盒子添加上动画，在切换盒子的时候使用
  const animationFun = () =>  {
    if (isShow) {
      document.getElementsByClassName('box1')[0].className = 'box1 box1_active'
      document.getElementsByClassName('box2') [0].className = 'box2 box2_active'
      document.getElementsByClassName('box3') [0].className = 'box3 box3_active'
      document.getElementsByClassName('box4') [0].className = 'box4 box4_active'
      document.getElementsByClassName('box5')[0].className = 'box5 box5_active'
    } else {
      document.getElementsByClassName('box1')[0].className = 'box1 box1_actives'
      document.getElementsByClassName('box2')[0].className = 'box2 box2_actives'
      document.getElementsByClassName('box3') [0].className = 'box3 box3_actives'
      document.getElementsByClassName('box4') [0].className = 'box4 box4_actives'
      document.getElementsByClassName('box5')[0].className = 'box5 box5_actives'
    }

    setIsShow(!isShow)
    ChangeNext()
  }
//通过函数来实现对数组的里面元素的重排，从而实现对dom元素的位置更改，实现轮播的效果

//ChangeLast（左箭头函数） 是通过函数将数组先前一位
const ChangeLast = () => {
  let text = showList[0]
  let temp = showList.slice()
  temp.splice(0, 1)
  temp.push(text)
  setShowList(temp)
  animationFun()
}

//ChangeNext（右箭头函数） 是通过函数将数组向前一位
  const ChangeNext = () => {
    let text = showList[showImg.length - 1]
    let temp = showList.slice()
    temp.splice(temp.length - 1, 1)
    temp.unshift(text)
    setShowList(temp)
    // animationFun()
  }

//ChangeList（点击图片排序到中心） 是通过函数还有传递过的index位置来对数组进行重新排序，从而实现点击的dom元素都在轮播图的中间的效果
  const ChangeList = (index) => {

    let tempList = showList.slice()
    if (index > 2) {  
      let tempIndex = index -2
      let text = showList.slice(0, tempIndex)  
      tempList.splice(0, tempIndex)
      tempList = tempList.concat(text)
    } 
    if (index < 2) {
      let tempIndex = 2 - index
      let text = showList.slice(-tempIndex)
      tempList.splice(tempList.length-tempIndex, tempIndex)
      tempList = text.concat(tempList)
    }
    setShowList(tempList)
  }

  return (
    <div className='test-style'>
    {/* 左边的箭头 */}
      <div className='page' onClick={ChangeLast}>

        {/* <div  className="page"/> */}
      </div>
      {/* 轮播图的主体 */}
      <div className='fatherBox' >
      {showList.map((item, index) => {
          if (index < 5) { 
            if (index == 0) {
              return (
                <div className="box1" key={index} onClick={() => ChangeList(index)} >
                 {item}
                </div>
              )
            }
            if (index == 1) {
              return (
                <div className="box2" key={index} onClick={() => ChangeList(index)}>
                  {item}
                </div>
              )
            }
            if (index == 2) {
              return (
                <div className="box3" key={index} onClick={() => ChangeList(index)}>
                  {item}
                </div>
              )
            }
            if (index == 3) {
              return (
                <div className="box4" key={index} onClick={() => ChangeList(index)}>
                  {item}
                </div>
              )
            }
            if (index == 4) {
              return (
                <div className="box5" key={index} onClick={() => ChangeList(index)}>
                 {item}
                </div>
              )
            }
          }
        })}
      </div>
    {/* 右边的箭头 */}
      <div onClick={animationFun} className="page_h"/>
    </div>
  )
}
