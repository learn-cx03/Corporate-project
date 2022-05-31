{showImg.map((item, index) => {
  if (index < 5) { 
    if (index == 0) {
      return (
        <div className="box1" key={index}>
          <img src={item} style={{width: "324px", height: "184px"}}  onClick={() => ChangeImg(index)}/>
          <div className='boxTest'>1111</div>
        </div>
      )
    }
    if (index == 1) {
      return (
        <div className="box2" key={index}>
          <img src={item} style={{width: "324px", height: "184px"}} onClick={() => ChangeImg(index)}/>
          <div className='boxTest'>2222</div>
        </div>
      )
    }
    if (index == 2) {
      return (
        <div className="box3" key={index}>
          <img src={item}  style={{width: "324px", height: "184px"}}/>
          <div className='boxTest'>3333</div>
        </div>
      )
    }
    if (index == 3) {
      return (
        <div className="box4" key={index} >
          <img src={item} style={{width: "324px", height: "184px"}} onClick={() => ChangeImg(index)}/>
          <div className='boxTest'>4444</div>
        </div>
      )
    }
    if (index == 4) {
      return (
        <div className="box5" key={index} >
          <img src={item} style={{width: "324px", height: "184px"}}  onClick={() => ChangeImg(index)}/>
          <div className='boxTest'>5555</div>
        </div>
      )
    }
  }
})
}