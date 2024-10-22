import * as React from 'react';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Wrapper, BackButton, BootstrapButton, CustomTextField, CustomFormControl, CustomMenuItem} from './addEventStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const AddEvent = () => {

    const [group, setGroup] = React.useState('');

    function BasicDatePicker() {
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker  label="Data" />
        </LocalizationProvider>
      );
    }

    const handleChange = (event: SelectChangeEvent) => {
      setGroup(event.target.value as string);
    };

    const [text, setText] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
      <Wrapper>
        <BackButton>
            <ArrowBackIcon></ArrowBackIcon>
        </BackButton>
        <Typography sx={{ mt: 8, ml: 1 }} variant="h6" component="div" fontSize={30}>Dodaj wydarzenie dla grupy</Typography>

        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >
            <CustomTextField id="outlined-basic"
                label="Nazwa wydarzenia"
                sx={{ input: { color: 'black' } }}
            />
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >
          <BasicDatePicker/>
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >          
            <CustomTextField id="outlined-basic" label="Godzina" variant="outlined"/>    
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >
            <CustomFormControl>
              <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Grupa" variant="outlined" value={group} onChange={handleChange}/>
            </CustomFormControl>    
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >        
            <CustomFormControl>
              <InputLabel id="demo-simple-select-label">Typ</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Typ" variant="outlined" value={group} onChange={handleChange}>
                <CustomMenuItem value={10}>Ten</CustomMenuItem>
                <CustomMenuItem value={20}>Ten</CustomMenuItem>
                <CustomMenuItem value={30}>Ten</CustomMenuItem>
              </Select>
            </CustomFormControl>    
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="auto"
            marginRight="auto"
        >
            <CustomTextField id="outlined-basic" label="Opis" variant="outlined" multiline rows={4} onChange={handleInput} inputProps={{ maxLength: 200 }} sx={{ flexGrow: 1 }} />
        </Box>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            flex-direction = "column"
            marginLeft="48%"
        >
          <Typography sx={{fontSize: 10, textAlign: 'right'}} >
            {text.length}/200 znaków
          </Typography>
        </Box>
        <BootstrapButton>Dodaj do kalendarza</BootstrapButton>
        
        
        
            
      </Wrapper>
    ) 
}