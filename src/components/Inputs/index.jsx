import React from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import '../../App.css'
function MyFormHelperText() {
    
  
    const helperText = React.useMemo(() => {
   
    });
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }
function Inputs() {

  return (
    <div className='ml-32'>
        <h4 className='text-2xl'>Inputs</h4><br />
     <div className='flex gap-3'>
        <form style={{display:'flex',gap:'2px'}} noValidate autoComplete="off" className='flex gap-2'>
        <FormControl sx={{ width: '25ch',display:'flex'}}>
        <div className='flex'>
          <div className='flex w-full'>
           <OutlinedInput placeholder="Default" className='inp inp2 w-30'/>          
           <MyFormHelperText />
          </div>
          <div className='flex w-full'>
           <OutlinedInput placeholder="Succes" color='success' className='inp inp3 w-30'/>          
           <MyFormHelperText />
          </div>
          <div className='flex w-full'>
           <OutlinedInput placeholder="Succes" color='error' className='inp inp4 w-30'/>          
           <MyFormHelperText />
          </div>
          <div className='flex w-full items-center h-10 focus:bg-orange-600'>
          <TextField label="Error" className='w-52 error focus:bg-orange-600'/>
          </div>
        </div><br />
        </FormControl>
     </form>
        </div>
    </div>
  )
}

export default Inputs