import React from 'react'

export default function Select({men , women , register , name}) {
    
  return (
    <div>
        <select {...register(name , {
            onchange:(e) => {
                return e.target.value
            }
        })}   className='w-[15rem] h-[3rem]'>
            
            <option value={men}>{men}</option>
            <option value={women}>{women}</option>
        </select>
    </div>
  )
}
