import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {
  Wrapper,
  BootstrapButton,
  CustomTextField,
  CustomFormControl,
  CustomCalendarTextField,
} from './addEventStyle';

export const AddEvent = () => {
  const [group, setGroup] = React.useState('');

  const [type, setType] = React.useState('');

  function BasicDatePicker() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Data"
          disablePast
          slots={{ textField: CustomCalendarTextField }}
        />
      </LocalizationProvider>
    );
  }

  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string);
  };

  const makeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const [text, setText] = useState<string>('');

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setText(event.target.value);
  };

  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 54"
        width="54px"
        height="54px"
      >
        <path
          fill="#bbbbbb"
          d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0 0-80z"
        />
      </svg>
      <Typography sx={{ ml: 1 }} variant="h6" component="div" fontSize={30}>
        Dodaj wydarzenie dla grupy
      </Typography>

      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomTextField
          id="outlined-basic"
          label="Nazwa wydarzenia"
          sx={{ input: { color: 'black' } }}
        />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <BasicDatePicker />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomTextField
          id="outlined-basic"
          label="Godzina"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomFormControl>
          <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grupa"
            variant="outlined"
            value={group}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Ten</MenuItem>
            <MenuItem value={30}>Ten</MenuItem>
          </Select>
        </CustomFormControl>
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomFormControl>
          <InputLabel id="demo-simple-select-label">Typ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Typ"
            variant="outlined"
            value={type}
            onChange={makeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Ten</MenuItem>
            <MenuItem value={30}>Ten</MenuItem>
          </Select>
        </CustomFormControl>
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomTextField
          id="outlined-basic"
          label="Opis"
          variant="outlined"
          multiline
          rows={4}
          onChange={handleInput}
          inputProps={{ maxLength: 200 }}
          sx={{ flexGrow: 1 }}
        />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
        marginLeft="48%"
      >
        <Typography sx={{ fontSize: 10, textAlign: 'right' }}>
          {text.length}/200 znaków
        </Typography>
      </Box>
      <BootstrapButton>Dodaj do kalendarza</BootstrapButton>
    </Wrapper>
  );
};
