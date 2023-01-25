import React, { useEffect } from 'react'
import '../../css/service.css'
import {service} from '../../extra/data.js'
const Service = () => {
  


  useEffect(() => {
   
    const observer =new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
      })
    })
  
    const hiddenElements = document.querySelectorAll('.hidden')
  
  hiddenElements.forEach((el)=>observer.observe(el))

    return () => {
      hiddenElements.forEach((el)=>observer.observe(el))
    };
  }, []);

  return (
    <div className='service-container'>
      <span >
        <p>Choosing a medical specialty is one fo the most significiant decisions you'll make.</p>
        <p>We can help</p>
      </span>
      <div className='service-title'>Special services we provide you</div>
      <div className='services'>
        {
            service.map((item,index)=>(
                <div className='hidden' key={index}>
                    <img src={item.image} alt="No Image"/>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Service
