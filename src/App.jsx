import React, { useState} from 'react'
import './App.css'

//引入轮播图组件
import Test from './Test'

import search from './img/search.png'



export default function App() {
  //用useState生成的变量实现变量变换在页面的实时更新
  const [useShow, setUseShow] = useState(true)
  const [useInput, setUseInput] = useState(false);
  const [height, setHeight] = useState(0)
  
  const [useText, setUseText] = useState('123')

  //通过点击实现useShow变量的布尔值取反，从而操作组件的显示与隐藏
  const changeShow = () => {
    console.log('关闭')
    setUseShow(!useShow)
    setUseInput(false);
    if(height) {
      setHeight(0)
    } else {
      setHeight(277)
    }
  }
  const changeInput = () => {
    console.log('12')
    setUseInput(!useInput)
    setUseText(' ');
  }
  const changeFocus = (e) => {
    setUseText(e.target.value)
    console.log(useText)
  }
  const getInput = (e) => {
    if (e.key == 'Enter') {
      console.log('dddd')
      setUseText('')
    }
  } 
  return (
    <div className='test'>
      {/* 通过visibility来实现组件的显示与隐藏 */}
      <div className="big-box">
      {/* <div style={{visibility: useShow ? 'visible' : 'hidden'}} className="big-box"> */}
        {/* 关闭箭头 */}
        <div className={height ? 'footer' : 'header'} style={{transform:`translateY(${height}px)`,transition:'0.8s'}} >
          <div className={height ? 'footer-left' : 'headertest'} ></div>
          <div className='headerlist' style={{display: height ?  'none' : 'block'}}>
          <div style={{visibility: useInput ? 'visible' : 'hidden'}}>
            {/* <label htmlFor="q" className='box1'></label> */}
            <input type="text" className="input" onBlur={changeFocus} id="q" />
            {/* <img src={search} alt="" style={{float: 'left'}} /> */}
          </div>
          <div className='headerList2'  style={{display: height ?  'none' : 'block'}}>
            <img src={search} style={{width: "25px", height: "25px"}} onClick={changeInput} className="search" display={height ? 'none' : 'black'}/>
            <div onClick={changeShow} display={height ? 'none' : 'black'} style={{cursor: "pointer"}}>关 闭</div>
           </div>
          </div>
          <div className='footer-content' style={{display: height ?  'block' : 'none'}} onClick={changeShow}></div>
          <div className={height ? 'footer-right' : 'headertest2'}></div>
        </div>
     
        {/* 引用轮播图组件的位置 */}
        <div className='content' style={{transform:`translateY(${height}px)`,overflow:'hidden',transition:'0.8s'}}>
          <Test />
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
