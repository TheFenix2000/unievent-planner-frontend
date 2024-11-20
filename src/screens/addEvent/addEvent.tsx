import * as React from 'react';
import { useState, useRef } from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
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
  CustomMenuItemTop,
  CustomMenuItemBottom,
} from './addEventStyle';
import { theme } from '../../assets/styles/theme';

export const AddEvent = () => {
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

  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [openGrupa, setOpenGrupa] = useState(false);
  const [openTyp, setOpenTyp] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleGrupa = (isOpen) => {
    setOpenGrupa(isOpen);
    if (isOpen) {
      setTimeout(() => {
        if (dropdownRef.current) {
          setDropdownHeight(dropdownRef.current.clientHeight);
        }
      }, 0);
    } else {
      setDropdownHeight(0);
    }
  };
  const handleToggleTyp = (isOpen) => {
    setOpenTyp(isOpen);
    if (isOpen) {
      setTimeout(() => {
        if (dropdownRef.current) {
          setDropdownHeight(dropdownRef.current.clientHeight);
        }
      }, 0);
    } else {
      setDropdownHeight(0);
    }
  };

  return (
    <Wrapper>
      <Typography sx={{ ml: 1 }} variant="h6" component="div" fontSize={30}>
        Dodaj wydarzenie dla grupy
      </Typography>
      <Box
        component="form"
        sx={{ '& > :not(style)': { marginTop: 2, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomTextField
          style={{ width: '100%' }}
          fullWidth
          id="outlined-basic"
          label="Nazwa wydarzenia"
          sx={{ input: { color: theme.colors.black_100 } }}
        />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { marginTop: 2, width: '100%' } }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <BasicDatePicker />
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { marginTop: 2, width: '100%' } }}
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
        sx={{
          position: 'relative',
          '& > :not(style)': { marginTop: 2, width: '100%' },
          transition: 'margin 0.3s ease',
          marginBottom: openGrupa ? `${dropdownHeight}px` : '0px',
        }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomFormControl
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderBottomLeftRadius: openGrupa ? '0px' : '4px',
                borderBottomRightRadius: openGrupa ? '0px' : '4px',
              },
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grupa"
            variant="outlined"
            onClick={() => handleToggleGrupa(!openGrupa)}
            inputProps={{
              sx: {
                borderBottomLeftRadius: open ? 0 : '4px',
                borderBottomRightRadius: open ? 0 : '4px',
                transition: 'border-radius 0.3s ease',
              },
            }}
            open={openGrupa}
            onOpen={() => handleToggleGrupa(true)}
            onClose={() => handleToggleGrupa(false)}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                ref: dropdownRef,
                sx: {
                  borderLeft: '1px solid',
                  borderRight: '1px solid',
                  borderColor: theme.colors.black_100,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px',
                  '& .MuiList-root': {
                    paddingBottom: 0,
                    paddingTop: 0,
                  },
                  '& .MuiInputBase-root': {
                    borderBottomLeftRafius: '0px',
                    borderBottomRightRafius: '0px',
                  },
                },
              },
            }}
            IconComponent={() => (
              <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: theme.colors.grey_25,
                    transform: 'translate(-100%, 0%)',
                  }}
                />
              </span>
            )}
          >
            <CustomMenuItemTop value={10}>Ten</CustomMenuItemTop>
            <CustomMenuItem value={20}>Ten</CustomMenuItem>
            <CustomMenuItemBottom value={30}>Ten</CustomMenuItemBottom>
          </Select>
        </CustomFormControl>
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { marginTop: 2, width: '100%' },
          transition: 'margin 0.3s ease',
          marginBottom: openTyp ? `${dropdownHeight}px` : '0px',
        }}
        noValidate
        autoComplete="off"
        flex-direction="column"
      >
        <CustomFormControl
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderBottomLeftRadius: openTyp ? '0px' : '4px',
                borderBottomRightRadius: openTyp ? '0px' : '4px',
              },
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Typ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Typ"
            variant="outlined"
            open={openTyp}
            onClick={() => handleToggleTyp(!openTyp)}
            onOpen={() => handleToggleTyp(true)}
            onClose={() => handleToggleTyp(false)}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                ref: dropdownRef,
                sx: {
                  borderLeft: '1px solid',
                  borderRight: '1px solid',
                  borderColor: theme.colors.black_100,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px',
                  '& .MuiList-root': {
                    paddingBottom: 0,
                    paddingTop: 0,
                  },
                  '& .MuiInputBase-root': {
                    borderBottomLeftRafius: '0px',
                    borderBottomRightRafius: '0px',
                  },
                },
              },
            }}
            IconComponent={() => (
              <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{
                    color: theme.colors.grey_25,
                    transform: 'translate(-100%, 0%)',
                  }}
                />
              </span>
            )}
          >
            <CustomMenuItemTop value={10}>Ten</CustomMenuItemTop>
            <CustomMenuItem value={20}>Ten</CustomMenuItem>
            <CustomMenuItemBottom value={30}>Ten</CustomMenuItemBottom>
          </Select>
        </CustomFormControl>
      </Box>
      <Box
        component="form"
        sx={{ '& > :not(style)': { marginTop: 2, width: '100%' } }}
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
