import * as React from 'react';
import { useState } from 'react';

import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  CustomMenuItem,
} from './addEventStyle';

export const AddEvent = () => {
  const [group, setGroup] = React.useState('');

  const [type, setType] = React.useState('');

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

  return (
    <Wrapper>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="1x"
            style={{
              position: 'absolute',
              color: 'black',
              transform: 'translate(60%, 50%)', // Center the arrow in the middle of the circle
            }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            size="2x"
            style={{
              color: '#BBBBBB',
              top: '0',
              left: '0',
            }}
          />
        </div>
      </Box>
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
        <CustomFormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grupa"
            variant="outlined"
            value={group}
            fullWidth
            onChange={handleChange}
            IconComponent={() => (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{
                  color: '#BBBBBB',
                  transform: 'translate(-100%, 0%)',
                }}
              />
            )}
          >
            <CustomMenuItem value={10}>Ten</CustomMenuItem>
            <CustomMenuItem value={20}>Ten</CustomMenuItem>
            <CustomMenuItem value={30}>Ten</CustomMenuItem>
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
            IconComponent={() => (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{
                  color: '#BBBBBB',
                  transform: 'translate(-100%, 0%)',
                }}
              />
            )}
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
