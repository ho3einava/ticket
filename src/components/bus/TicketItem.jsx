
export default function TicketItem({data}) {
    
  return (
    <div >
           {/************       ticket Items    *********/}
        <div className='bg-gray-100 w-[60rem] h-[200px] rounded relative mb-3' > 
        <img  src={data.logoPath}  className='absolute right-5 top-5 w-10 h-10 rounded-full' />
        <div className='absolute top-5 right-[8rem] font-bold' >{data.companyName}</div>
        <div className='absolute top-[5rem] right-[8rem] text-3xl font-bold'>{data.departureTime}</div>
        <div className='absolute top-5 left-[20rem] flex flex-wrap bg-gray-200 w-[7rem] h-10  items-center justify-center  rounded-full text-xs'>{data.busType}</div>
        <div className='flex flex-col justify-center absolute top-[5rem] right-[15rem]'>
          <span className='font-bold flex flex-wrap w-[4.5rem]'>{data.orginCityName}</span>
          
        </div>
          <div className='flex absolute top-[5rem] right-[18rem]'>
            <div className='gray-200'>
            <i className="bi bi-bus-front-fill"></i>
            </div>
            <span className='border-t-2 mt-2.5 border-gray-500 w-[10rem]'></span>
            <div>
            <i className="bi bi-circle"></i>
            </div>
          </div>
          <div className='flex flex-col justify-center absolute top-[5rem] left-[25rem]'>
          <span className='font-bold'>{data.destinationCityName}</span>
          
        </div>

        <div className='absolute bottom-2 right-7'>
          <span className='text-blue-700 text-xs'>
          نقشه صندلی ها
            
           
          </span>
          <span className='text-blue-700 text-xs mr-3'>
          اطلاعات اتوبوس و سفر
            
      
             </span>
          <span className='text-blue-700 text-xs mr-3'>
               
          قوانین جریمه و استرداد
      
            
                </span>
        </div>
        <div className='border-[1px] border-gray-300 h-[100%] absolute left-[18rem]'></div>
          
          
          
             {/*****************     button        **********/}

        <div className='flex  text-center  absolute top-[3rem] left-[5rem] ' >
          <div>
            <span className='text-blue-700 text-2xl font-bold'>{data.price}</span>
            <span className='text-gray-500 text-sm '>ریال</span>
            <div className='mt-2'>
          <button className='bg-blue-700 text-white text-sm w-[10rem] h-[3.5rem] rounded-lg'>انتخاب بلیط</button>
          </div>
          <div className='mt-2'>
            <span className='text-sm text-red-600'> ۱ صندلی باقی مانده است</span>
          </div>
         
          </div>
         
        </div>







        </div>
    </div>
  )
}
