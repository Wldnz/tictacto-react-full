import React,{memo} from 'react'

export default memo(function Greeting({nama}) {
    console.log("Ini Greetin");
    return (
    <div className="salam">
        <h2>Selamat Datang, {nama? nama : 'Guest' } di halaman ini!.</h2>
    </div>
  )
});
