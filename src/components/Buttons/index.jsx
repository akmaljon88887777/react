import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import '../../App.css'
function Buttons() {
  return (
    <div className='grid ml-32'>
         <h4 className='text-5xl justify-start flex mt-16'>Basic Components</h4><br /><br />
         <h4 className='text-2xl'>Buttons</h4><br />
         <p className='text-gray-400'>Pick your style</p><br />
         <div className='flex gap-2 items-center'>
           <Button variant="contained" sx={{background:'orangered',color:'white',height:'45px',width:'120px'}}>DEFAULT</Button>
           <Button variant="contained" sx={{background:'orangered',color:'white',height:'45px',width:'120px',borderRadius:'25px'}}>DEFAULT</Button>
           <Fab id='btn' variant="extended" sx={{padding:'20px',gap:'2px',color:'white',background:'orangered'}}>
             <FavoriteIcon color='white'/> WITH ICON
          </Fab>
           <Fab id='btn' aria-label="like" sx={{background:'orangered',color:'white'}}>
              <FavoriteIcon color='white'/>
           </Fab>
           <Button variant="text" sx={{color:'orangered'}}>Simple</Button><br /><br />
           
         </div><br />
         <div>
            <h4 className='text-gray-400'>Pick Your Size</h4><br />
       <div className='flex gap-3 mb-10 items-center'>
        <Button variant="contained" sx={{background:'orangered',color:'white'}} size="small">
          Small
        </Button>
        <Button variant="contained" sx={{background:'orangered',color:'white'}} size="medium">
          Medium
        </Button>
        <Button variant="contained" sx={{background:'orangered',color:'white'}} size="large">
          Large
        </Button>
      </div>
            <div className="flex gap-2 w-full ">
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#66615B',border:'2px solid #66615B'}}>DEFAULT</Button>
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#51CBCE',border:'2px solid #51CBCE'}}>PRIMARY</Button>
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#51BBD9',border:'2px solid #51BBD9'}}>INFO</Button>
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#5CB383',border:'2px solid #5CB383'}}>SUCCES</Button>
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#D2A54A',border:'2px solid #D2A54A'}}>WARNING</Button>
              <Button variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#CB4A32',border:'2px solid #CB4A32'}}>DANGER</Button>
            </div><br />
            <div className='flex gap-2 w-full'>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#66615B',color:'white',border:'none'}}>DEFAULT</Button>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#51CBCE',color:'white',border:'none'}}>PRIMARY</Button>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#51BBD9',color:'white',border:'none'}}>INFO</Button>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#5CB383',color:'white',border:'none'}}>SUCCES</Button>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#D2A54A',color:'white',border:'none'}}>WARNING</Button>
              <Button id='btn' variant="outlined" sx={{borderRadius:'25px',height:'45px',width:'120px',background:'#CB4A32',color:'white',border:'none'}}>DANGER</Button>
           </div><br />
           <h4 className='text-gray-400 text-2xl'>Links</h4><br />
           <div className="flex gap-2 w-full ">
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#66615B'}}>DEFAULT</Button>
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#51CBCE'}}>PRIMARY</Button>
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#51BBD9'}}>INFO</Button>
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#5CB383'}}>SUCCES</Button>
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#D2A54A'}}>WARNING</Button>
              <Button variant="text" sx={{borderRadius:'25px',height:'45px',width:'120px',color:'#CB4A32'}}>DANGER</Button>
        </div><br />
         </div>
    </div>
  )
}

export default Buttons