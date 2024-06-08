

import { Link } from "react-router-dom";



export default function TicketSell({data}) {

  
  return (
      <div >
        
           {/************       ticket Items    *********/}
        <div className='bg-gray-100 w-[60rem] h-[200px] rounded relative mt-[1rem] mr-[5rem]' > 
        <img  src={data.logoPath}  className='absolute right-[2rem] top-[3rem] w-10 h-10 rounded-full' />
        <div className='absolute top-[3rem] right-[15rem] font-bold' >{data.companyName}</div>
        <div className='absolute top-[8rem] right-[2rem] text-3xl font-bold'>{data.departureTime}</div>
        <div className='absolute top-[3rem] right-[6rem] flex flex-wrap bg-gray-200 w-[7rem] h-10  items-center justify-center  rounded-full text-xs'>{data.busType}</div>
        <div className='flex flex-col justify-center absolute top-[8rem] right-[10rem]'>
          <span className='font-bold flex flex-wrap w-[4.5rem]'>{data.orginCityName}</span>
          
        </div>
          <div className='flex absolute top-[8rem] right-[13rem]'>
            <div className='gray-200'>
            <i className="bi bi-bus-front-fill"></i>
            </div>
            <span className='border-t-2 mt-2.5 border-gray-500 w-[10rem]'></span>
            <div>
            <i className="bi bi-circle"></i>
            </div>
          </div>
          <div className='flex flex-col justify-center absolute top-[8rem] left-[30rem]'>
          <span className='font-bold'>{data.destinationCityName}</span>
          
        </div>

       
        <div className='border-[1px] border-gray-300 h-[100%] absolute left-[21rem]'></div>
          
          
          
             {/*****************     button        **********/}

        <div className='flex flex-col text-center gap-[2rem]  absolute top-[2rem] left-[1rem] ' >
        <div className='mt-1 '>
          <Link type="button" className='border-solid border-2 border-blue-700 text-blue-700 text-sm px-[7rem] py-[1rem]    rounded-lg mb-3' to="/tickets" >تغییر  بلیط</Link>
          </div>
            
         
          <div className="flex gap-[1rem] items-center mr-[3rem] mt-[1.5rem]">
            <span className='text-gray-500 text-xs  '> هر صندلی</span>
            <span className='text-gray-500 text-lg font-bold '>{data.price}</span>
            <span className='text-gray-500 text-xs '>ریال</span>
          </div>
          <div className='border-[1px] border-gray-300 w-[100%] absolute top-[7.5rem]'></div>
          <div className="flex gap-[1rem] items-center mr-[4rem] mt-[-0.5rem]">
            <span className='text-gray-500 text-xs  '>مجموع</span>
            <span className='text-gray-500 text-lg font-bold '>{data.price}</span>
            <span className='text-gray-500 text-xs '>ریال</span>
          </div>
        </div>







        </div>
    </div>
  )
}
