import React, { useState, useRef} from 'react'
import './App1.css'

//引入轮播图组件
import Carousel from './Carousel'

import search from './img/search.png'



export default function App() {
  //用useState生成的变量实现变量变换在页面的实时更新
  const [height, setHeight] = useState(0)
  const [useWidth, setUseWidth] = useState(0)
  const inputE1 = useRef(null)
  //通过点击实现height变量的改变，从而操作组件的移动
  const changeShow = () => {
    if(height) {
      setHeight(0)
    } else {
      setHeight(277)
    }
  }
  //通过点击搜索图片，展开input 的函数
  const changeInput = () => {
    if (useWidth) {
      console.log(inputE1.current.value)
      setUseWidth(0)
      inputE1.current.value = null
    } else {
      setUseWidth(340)
    }
  }
  return (
    <div className='test'>
      {/* 通过visibility来实现组件的显示与隐藏 */}
      <div className="big-box">
      {/* <div style={{visibility: useShow ? 'visible' : 'hidden'}} className="big-box"> */}
        {/* 关闭箭头 */}
        {/* 用点击来控制className的切换从而改变图片图案 */}
        <div className={height ? 'footer' : 'header'} style={{transform:`translateY(${height}px)`,transition:'0.8s'}} >
          <div className={height ? 'footer-left' : 'headertest'} ></div>
          <div className='headerlist' style={{display: height ?  'none' : 'block'}}>
          <div className='input_box' style={{width: `${useWidth}px`, height: "50px", transition: '0.8s'}}>
            <input type="text" className='input' ref={inputE1}/>
            <img src={search} className='input_img' onClick={changeInput} alt="没有该图片"/>
          </div>
          <div className='headerList2'  style={{display: height ?  'none' : 'block'}}>
            <img src={search} style={{width: "25px", height: "25px"}} onClick={changeInput} className="search" alt="没有该图片"/>
            <div onClick={changeShow} display={height ? 'none' : 'black'} style={{cursor: "pointer"}}>关 闭</div>
           </div>
          </div>
          <div className='footer-content' style={{display: height ?  'block' : 'none'}} onClick={changeShow}></div>
          <div className={height ? 'footer-right' : 'headertest2'}></div>
        </div>
     
        {/* 引用轮播图组件的位置 */}
        <div className='content' style={{transform:`translateY(${height}px)`,overflow:'hidden',transition:'0.8s'}}>
          <Carousel />
        </div>
      </div>  
      {/* 展开箭头 */}
       {/* <div className='footer' style={{visibility: !useShow ? 'visible' : 'hidden'}} onClick={changeShow} value={useText} onKeyDown={getInput}>
        <div className='footer-left'></div>
        <div className='footer-content'></div>
        <div className='footer-right'></div>
      </div>  */}
    </div>
  )
}
