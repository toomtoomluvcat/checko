import React from 'react'

function Point({value}) {
  return (
     <div className= 'flex gap-x-[7px] justify-center relative top-[60px] sm:top-[40px] items-center'> 
        {/* สีดำ */ }
        <div className={ value === 'landing1'? 'bg-black w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[50%]' :'bg-white w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] rounded-[50%] border-[2px] border-[black] shadow-[rgba(0,_0,_0,_0.12)_2px_2px_3px,_rgb(51,_51,_51)_0.5px_0.5px_0px_0.7px]' }></div> 
        {/* สีขาว */}
        <div className={ value === 'landing2'? 'bg-black w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[50%]' :'bg-white w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] rounded-[50%] border-[2px] border-[black] shadow-[rgba(0,_0,_0,_0.12)_2px_2px_3px,_rgb(51,_51,_51)_0.5px_0.5px_0px_0.7px]' }></div> 
        <div className={ value === 'landing3'? 'bg-black w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[50%]' :'bg-white w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] rounded-[50%] border-[2px] border-[black] shadow-[rgba(0,_0,_0,_0.12)_2px_2px_3px,_rgb(51,_51,_51)_0.5px_0.5px_0px_0.7px]' }></div>
        <div className={ value === 'landing4'? 'bg-black w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-[50%]' :'bg-white w-[14px] h-[14px] sm:w-[17px] sm:h-[17px] rounded-[50%] border-[2px] border-[black] shadow-[rgba(0,_0,_0,_0.12)_2px_2px_3px,_rgb(51,_51,_51)_0.5px_0.5px_0px_0.7px]' }></div> 
    </div>
    )
}

export default Point