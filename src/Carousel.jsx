import React, { useState } from 'react'
//测试图片
import img1 from './img/test.jpg'
import img2 from './img/dog.jpg'
import img3 from './img/cat.jpg'
import img4 from './img/cat2.jpg'
import img5 from './img/cat3.jpg'
import img6 from './img/book.jpg'
import img7 from './img/book2.jpg'
import img8 from './img/book3.jpg'
import img9 from './img/flower.jpg'
import './Carousel.css'


export default function Test() {
  //定义一个forms数组用来控制translate的变化从而达到轮播图左右切换的效果
  const forms = [
    'translate3d(-31.25vw, 0, -100px) rotateY(45deg)',
    'translate3d(-15.97vw, 0, 0) rotateY(45deg) ',
    'translate3d(0, 0, 100px)',
    'translate3d(15.97vw, 0, 0) rotateY(-45deg) ',
    'translate3d(31.25vw, 0, -100px) rotateY(-45deg)',
  ]
  //给每个图片盒子添加上动画，在切换盒子的时候使用
  //通过函数来实现对数组的里面元素的重排，从而实现对dom元素的位置更改，实现轮播的效果
  const [transfrom, setTransform] = useState(forms)
  // console.log(transfrom) 
  //列表图片存放位置
  const showImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  //列表文字存放位置
  const newList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  //等会存放 showImg 和 newList 生成的dom元素的列表
  const newArry = []
  for (let i = 0; i < showImg.length; i++) {
    newArry.push(
      <div>
           <img src={showImg[i]} style={{width: "22.5vw", height: "12.78vw"}} alt="没有找到该图片"/>
            <div className='boxTest'>{newList[i]}</div>
      </div>
    )
  }
  // console.log(newArry)
  //使用useState对数组进行操作
  const [showList, setShowList] = useState(newArry)
  //生成控制后面轮播图的i变量
  const [i, setI] = useState(0)
  // 右边箭头的点击函数
  const rightRotate = () => {
    let text = transfrom[0]
    let temp = transfrom.slice(1, transfrom.length)
    temp.push(text)
    setTransform(temp)
    if (showList.length > 5) {
      ChangeRight(i)
    }
  }
  // 左边箭头的点击函数
  const leftRotate = () => {
    let text = transfrom[transfrom.length - 1]
    let temp = transfrom.slice(0, transfrom.length - 1)
    temp.unshift(text)
    setTransform(temp)
    // console.log(temp)
    if (showList.length > 5) {
      ChangeLeft(i)
    }
  }


  // ChangeLast（左箭头函数） 来记忆之前点击过的盒子的位置
  const ChangeLeft = (i) => {
    console.log(i)
    let temp = showList.slice()
    temp[i] = showList[5]
    temp.splice(5, 1)
    temp.push(showList[i])
    setShowList(temp)
    // leftRotate()
    if (i < 4) {
      const num = i + 1
      setI(num)
    } else {
      setI(0)
    }
  }
  // ChangeRight（右箭头函数） 来记忆之前点击的盒子的位置
  const ChangeRight = (i) => {
    console.log(i)
    if (i == 0) {
      let temp = showList.slice()
      temp[4] = showList[showList.length - 1]
      temp.pop()
      temp.splice(5, 0, showList[4])
      setShowList(temp)
      setI(4)
    } else {
      let temp = showList.slice()
      temp[i - 1] = showList[showList.length - 1]
      temp.pop()
      temp.splice(5, 0, showList[i - 1])
      setShowList(temp)
      setI(i - 1)
    }
  }

// ChangeList（点击图片排序到中心） 是通过函数还有传递过的index位置来对数组进行重新排序，从而实现点击的dom元素都在轮播图的中间的效果
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
      <div className='page' onClick={leftRotate}>

        {/* <div  className="page"/> */}
      </div>
      {/* 轮播图的主体 */}
      <div className='fatherBox' >
      {showList.map((item, index) => {
          if (index < 5) { 
              return (
                <div className={`box${index + 1}`} key={index} onClick={() => ChangeList(index)} style={{transform: transfrom[index]}}>
                 {item}
                </div>
              )
            }
        })}
      </div>
    {/* 右边的箭头 */}
      <div onClick={rightRotate} className="page_h"/>
    </div>
  )
}
