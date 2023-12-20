import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function Paginations() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
   
  return (
    <div className='grid grid-cols-2 justify-items-center gap-3'>
        <div className="w-[50%] grid gap-2">
          <p className="text-2xl font-light pt-6"> Progress Bar</p><br />
          <div className='w-[670px] bg-gray-300 rounded p-0'><p className="w-[400px] rounded bg-[#6DD3D6] text-white px-2 justify-center flex">25</p></div>
          <div className='w-[670px] bg-gray-300 rounded p-0'><p className="w-[500px] rounded bg-[#86D9AB] text-white px-2 justify-center flex">2 of 4</p></div>
          <div className='w-[670px] bg-gray-300 rounded p-0'><p className="w-[600px] rounded bg-[#FCD27B] text-white px-2 justify-center flex">50%</p></div>
          <div className='w-[670px] bg-gray-300 rounded p-0'><p className="w-full rounded bg-[#F7765F] text-white px-2 justify-center flex">completed</p></div>
        </div>
        <div className='grid'>
           <div className='gap-2'>
            <p className="text-2xl font-light pt-6">Pagination</p><br />
            <Stack spacing={2}>
              <Pagination count={7} variant="outlined" />
              <Pagination count={10} variant="outlined" color="primary" />
            </Stack>
           </div>
        </div>
        <div className='grid ml-52'>
            <div className='gap-2'>
            <p className="text-2xl font-light pt-6">Navigation Tabs</p><br />
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Here is your profile.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Here are your messages.
      </CustomTabPanel>
    </Box>
    </div>
    </div>
        <div className='grid'>
        <p className="text-2xl font-light pt-6">Labels</p>
          <div className="gap-0 flex -mt-10">
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#5B5751] rounded-full'>Default</div>
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#51CBCE] rounded-full'>Primary</div>
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#51BCDA] rounded-full'>Info</div>
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#6BD098] rounded-full'>Succes</div>
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#FBC658] rounded-full'>Warning</div>
             <div className='w-[71px] h-[25px] justify-center items-center flex p-1 text-white bg-[#F5593D] rounded-full'>Danger</div>
          </div>
        </div>
    </div>
  )
}

export default Paginations