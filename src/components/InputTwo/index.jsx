import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
function valuetext(value) {
    return `${value}°C`;
  }
const labels = { inputProps: { 'aria-label': 'Size switch demo' } };
function InputTwo() {
    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow:
          theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
        backgroundImage:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
        },
      }));
      const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      });
      function BpRadio(props) {
        return (
          <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
          />
        );
      }
                  
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='flex gap-32 ml-32 mt-5'>
        <div className='grid'>
            <h4 className='text-2xl'>Chexboxes</h4><br />
            <div className='grid'>
            <div className='flex items-center'><Checkbox {...label} defaultChecked /> <h4 className='ml-2'>Unchecked</h4></div>
            <div className='flex items-center'><Checkbox {...label} /> <h4 className='ml-2'>Checked</h4></div>
            <div className='flex items-center'><Checkbox {...label} disabled sx={{cursor:'no-drop'}}/> <h4 className='ml-2'>Disabled unchecked</h4></div>
            <div className='flex items-center'><Checkbox {...label} disabled checked sx={{cursor:'no-drop'}}/> <h4 className='ml-2'>disabled checked</h4></div>
            </div>
        </div>
        <div>
        <FormControl>
      <FormLabel id="demo-customized-radios" sx={{fontSize:'25px'}}>Radio Buttons</FormLabel><br />
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel value="female" control={<BpRadio />} label="Female" />
        <FormControlLabel value="male" control={<BpRadio />} label="Male" />
        <FormControlLabel value="disabled" control={<BpRadio />} label="Other" />
        <FormControlLabel
        
          value="disabled"
          disabled
          control={<BpRadio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
        </div>
      
        <div className='grid gap-2'>
        <FormLabel id="demo-customized-radios" sx={{fontSize:'25px'}}>Toggle Buttons</FormLabel>
        <div className='-mt-16'>
          <Switch {...labels} defaultChecked />
          <Switch {...labels} defaultChecked />
        </div>
        </div>
        <div className='grid'>
        <FormLabel id="demo-customized-radios" sx={{fontSize:'25px'}}>Sliders</FormLabel>
    <div className='grid'>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        <Box sx={{ width: 300 }}>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
       />
    </Box>
    </div>
        </div>
    </div>
  )
}

export default InputTwo