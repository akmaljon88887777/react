import React from 'react'
import '../../App.css'
import NavOne from './NavOne'
function Headers() {
  return (
    <div style={{zIndex:'1'}} className='img overflow-x-hidden grid justify-items-center text-white'>
        <NavOne/>
        <div className='grid  text-center justify-items-center'>
          <div>
                <img className='w-[90px] h-[90px] -mt-52' src="https://demos.creative-tim.com/paper-kit-2-angular/assets/img/angular2-logo.png" alt="" />
          </div>
          <div className='justify-items-center -mt-60 grid items-center'>
            <h1 className='justify-center flex text-9xl font-bold'>Paper Kit 2 <br /> Angular</h1>
            <h1 className='text-2xl top-5'>Free Bootstrap 4 UI Kit for Angular 7</h1>
            <h4 className='flex items-center gap-2'>DESIGNED AND CODED BY<img className='w-[140px] h-[32px]' src="https://demos.creative-tim.com/paper-kit-2-angular/assets/img/creative-tim-white-slim2.png" alt="" /></h4>
          </div>
        </div>
    </div>
  )
}

export default Headers