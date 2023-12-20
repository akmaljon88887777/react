import React from 'react'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
let theme = createTheme();
theme = responsiveFontSizes(theme);
function Typograpy() {
  return (
    <div className='ml-52'>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" sx={{fontWeight:'400'}}>Responsive h3</Typography>
      <Typography variant="h4">Responsive h4</Typography>
      <Typography variant="h5">Responsive h5</Typography>
      <Typography variant="h5">Responsive h3</Typography>
      <Typography variant="h5">Responsive h4</Typography>
      <Typography variant="h6">Responsive h5</Typography>
      <Typography variant="h6">Responsive h5</Typography><br />
      <div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-gray-400'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-teal-500'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-green-600'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-blue-600'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-yellow-600'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
        <div className='flex gap-32'>
          <p>Muted Text</p>
          <p className='text-xl text-red-600'>Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        </div>
      </div>
    </ThemeProvider>
  </div>
  )
}

export default Typograpy