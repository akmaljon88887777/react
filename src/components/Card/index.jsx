import React from 'react'

function Card() {
  return (
    <div className='flex justify-start ml-36'>
      <div className='grid gap-3'>
        <div>
            <h4>Rounded Image</h4><br />
        </div>
        <div>
            <img className='rounded w-[250px] h-[200px]' src="https://demos.creative-tim.com/paper-kit-2-angular/assets/img/uriel-soberanes.jpg" alt="" />
        </div>
      </div>
      <div className='grid gap-3'>
        <div>
            <h4>Circle Image</h4><br />
        </div>
        <div>
            <img className='rounded-full w-[250px] h-[200px]' src="https://demos.creative-tim.com/paper-kit-2-angular/assets/img/faces/joe-gardner-2.jpg" alt="" />
        </div>
      </div>
      <div className='grid gap-3'>
        <div>
            <h4>Thumbnail</h4><br />
        </div>
        <div>
            <img className='rounded w-[250px] h-[200px]' src="https://demos.creative-tim.com/paper-kit-2-angular/assets/img/faces/clem-onojeghuo-3.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card