import * as React from 'react';
import { useState, useRef } from 'react';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

import {
  Wrapper,
  BootstrapButton,
  CustomTextField,
  CustomFormControl,
  CustomMenuItem,
  CustomMenuItemTop,
  CustomMenuItemBottom,
  styles,
  DateLabel,
  InputFieldDate,
  Date,
  CalendarIcon,
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
  const [active, setActive] = useState({
    name: false,
    date: false,
    description: false,
  });

  const [inputLength, setInputLengths] = useState({
    name: 0,
    date: 0,
    description: 0,
  });

  const [empty, setEmpty] = useState({
    name: true,
    date: true,
    description: true,
  });
  const handleFieldChange = (
    field: 'name' | 'date' | 'time' | 'description',
    length: number,
  ) => {
    setInputLengths((prev) => ({ ...prev, [field]: length }));
    setEmpty((prev) => ({ ...prev, [field]: length === 0 }));
  };

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateChange = (newValue: Dayjs) => {
    const formattedDate = newValue ? newValue.format('DD-MM-YYYY') : '';
    setSelectedDate(newValue);
    setUserDate(formattedDate);
    setIsDatePickerOpen(false);
    handleFieldChange('date', newValue ? 10 : 0);
    setActive((prev) => ({ ...prev, date: false }));
    setInputLengths((prev) => ({ ...prev, date: formattedDate.length }));
    setEmpty((prev) => ({ ...prev, date: !formattedDate }));
  };

  const handleCalendarIconClick = () => {
    setIsDatePickerOpen(true);
    setUserDate('');
    setActive({ ...active, date: false });
  };

  const [userDate, setUserDate] = useState('');

  const handleDateInputChange = (event) => {
    const value = event.target.value;
    setUserDate(value);
    handleFieldChange('date', value.length);
  };

  const handleClick = () => {
    setSelectedDate(null);
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
          <Date
            $dateOn={active.date}
            onFocus={() => {
              if (!isDatePickerOpen) {
                setActive({ ...active, date: true });
              }
            }}
            onBlur={() => {
              if (!isDatePickerOpen) {
                setActive({ ...active, date: false });
                setEmpty((prev) => ({ ...prev, date: !userDate }));
              }
            }}
          >
            <DateLabel
              active={active.date || (!empty.date && inputLength.date > 0)}
              $dateOn={active.date}
            >
              Data
            </DateLabel>
            <InputFieldDate
              placeholder={active.date ? 'DD-MM-YYYY' : ''}
              value={
                userDate ||
                (selectedDate ? selectedDate.format('DD-MM-YYYY') : '')
              }
              onChange={handleDateInputChange}
              onClick={handleClick}
            />
            <CalendarIcon icon={faCalendar} onClick={handleCalendarIconClick} />
            <DatePicker
              open={isDatePickerOpen}
              onClose={() => {
                setIsDatePickerOpen(false);
                setActive({ ...active, date: false });
              }}
              onChange={handleDateChange}
              disablePast
              disableOpenPicker
              desktopModeMediaQuery="(min-width:0px)"
              slots={{
                field: () => (
                  <input
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      pointerEvents: 'none',
                      width: 0,
                      height: 0,
                    }}
                  />
                ),
              }}
            />
          </Date>
        </LocalizationProvider>
      </Box>
      <Box sx={styles.container}>
        <CustomTextField
          id="outlined-basic"
          label="Godzina"
          variant="outlined"
        />
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
          fullWidth
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
