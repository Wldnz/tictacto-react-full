import React,{memo,useEffect} from 'react'

export default memo(function Challange({doChallange}) {
    

    // biar kaga ngerender lgi
    useEffect(()=>{
      console.log("Ini Challenge : " );
  },[])
    return (
    <div className="challange">
        <h2>Hey There, Wanna Do Some Challenge?</h2>
       <div className="buttonHandle">
            <button onClick={() => doChallange(true)}>Yes, I do</button>
            <button onClick={() => doChallange(false)}>Nah, I'm Good</button>
       </div>
    </div>
  )
});
