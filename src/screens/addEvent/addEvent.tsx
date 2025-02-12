import * as React from 'react';
import { useState, useRef } from 'react';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import {
  Wrapper,
  BootstrapButton,
  CustomTextField,
  CustomFormControl,
  CustomMenuItem,
  CustomMenuItemTop,
  CustomMenuItemBottom,
  styles,
} from './addEventStyle';
import { theme } from '../../assets/styles/theme';

export const AddEvent = () => {
  const [text, setText] = useState<string>('');

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setText(event.target.value);
  };

  const [openTyp, setOpenTyp] = useState(false);
  const [openGrupa, setOpenGrupa] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
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
      <CustomTextField
        style={{ width: '100%' }}
        fullWidth
        id="outlined-basic"
        label="Nazwa wydarzenia"
        sx={{ input: { color: theme.colors.black_100 } }}
      />
      <Box sx={styles.container}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Data"
            format="DD MMM YYYY"
            slots={{ textField: CustomTextField }}
            slotProps={{
              textField: {
                inputProps: {
                  className: CustomTextField,
                },
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{
                          color: theme.colors.grey_25,
                          height: '1.5rem',
                          width: '1.5rem',
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={styles.container}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            label="Godzina"
            ampm={false}
            slots={{ textField: CustomTextField }}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          ...styles.container,
          position: 'relative',
          transition: 'margin 0.3s ease',
          marginBottom: openGrupa ? `${dropdownHeight}px` : '0px',
        }}
      >
        <CustomFormControl
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderBottomLeftRadius: openGrupa ? '0rem' : '0.4rem',
                borderBottomRightRadius: openGrupa ? '0rem' : '0.4rem',
              },
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Grupa"
            variant="outlined"
            open={openGrupa}
            onClick={() => handleToggleGrupa(!openGrupa)}
            onOpen={() => handleToggleGrupa(true)}
            onClose={() => handleToggleGrupa(false)}
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                ref: dropdownRef,
                sx: { ...styles.customList },
              },
            }}
            IconComponent={() => (
              <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={openGrupa ? faChevronUp : faChevronDown}
                  style={{
                    color: theme.colors.grey_25,
                    transform: 'translate(-100%, 0%)',
                  }}
                />
              </span>
            )}
          >
            <CustomMenuItem
              value={10}
              sx={{
                borderBottom: '0.2rem solid',
                borderColor: theme.colors.grey_50,
              }}
            >
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              One
            </CustomMenuItem>
            <CustomMenuItem
              value={20}
              sx={{
                borderBottom: '0.2rem solid',
                borderColor: theme.colors.grey_50,
              }}
            >
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              Two
            </CustomMenuItem>
            <CustomMenuItem value={30}>
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              Three
            </CustomMenuItem>
          </Select>
        </CustomFormControl>
      </Box>
      <Box
        sx={{
          ...styles.container,
          position: 'relative',
          transition: 'margin 0.3s ease',
          marginBottom: openTyp ? `${dropdownHeight}px` : '0px',
        }}
      >
        <CustomFormControl
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderBottomLeftRadius: openTyp ? '0rem' : '0.4rem',
                borderBottomRightRadius: openTyp ? '0rem' : '0.4rem',
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
                sx: { ...styles.customList },
              },
            }}
            IconComponent={() => (
              <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={openGrupa ? faChevronUp : faChevronDown}
                  style={{
                    color: theme.colors.grey_25,
                    transform: 'translate(-100%, 0%)',
                  }}
                />
              </span>
            )}
          >
            <CustomMenuItemTop
              value={10}
              sx={{
                borderBottom: '0.2rem solid',
                borderColor: theme.colors.grey_50,
              }}
            >
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              One
            </CustomMenuItemTop>
            <CustomMenuItem
              value={20}
              sx={{
                borderBottom: '0.2rem solid',
                borderColor: theme.colors.grey_50,
              }}
            >
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              Two
            </CustomMenuItem>
            <CustomMenuItemBottom value={30}>
              <Avatar sx={styles.groupAvatar}>
                <img
                  src="./group-avatar.png"
                  alt="Group Avatar"
                  style={styles.groupAvatar}
                />
              </Avatar>
              Three
            </CustomMenuItemBottom>
          </Select>
        </CustomFormControl>
      </Box>
      <Box sx={styles.container}>
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
        sx={{
          ...styles.container,
          '& > :not(style)': { m: '0.2rem', width: '100%' },
        }}
      >
        <Typography
          sx={{ fontSize: 10, textAlign: 'right', color: theme.colors.grey_50 }}
        >
          {text.length}/200 znaków
        </Typography>
      </Box>
      <BootstrapButton
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFFFF',
          border: '0.3rem solid #FF0000',
        }}
      >
        Dodaj do kalendarza
      </BootstrapButton>
    </Wrapper>
  );
};
