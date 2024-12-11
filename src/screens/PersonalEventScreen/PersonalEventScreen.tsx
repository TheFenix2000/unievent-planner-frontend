import { useState } from 'react';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

import {
  Wrapper,
  Title,
  Name,
  NameLabel,
  InputFieldName,
  Date,
  DateLabel,
  Time,
  TimeLabel,
  DescriptionBox,
  DescriptionLabel,
  InputFieldDescription,
  Description,
  AddButton,
} from './PersonalEventScreenStyle';

const PersonalEvent = () => {
  const [active, setActive] = useState({
    name: false,
    date: false,
    time: false,
    description: false,
  });

  const [inputLength, setInputLengths] = useState({
    name: 0,
    date: 0,
    time: 0,
    description: 0,
  });

  const [empty, setEmpty] = useState({
    name: true,
    date: true,
    time: true,
    description: true,
  });

  const [content, setContent] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
  });

  const handleFieldChange = (
    field: 'name' | 'date' | 'time' | 'description',
    value: string,
  ) => {
    const length = value.length;
    setContent((prev) => ({ ...prev, [field]: value }));
    setInputLengths((prev) => ({ ...prev, [field]: length }));
    setEmpty((prev) => ({ ...prev, [field]: length === 0 }));
  };

  const handleNameChange = (event) =>
    handleFieldChange('name', event.target.value);

  const handleDateChange = (newValue: Dayjs) => {
    const formattedDate = newValue ? newValue.format('DD-MM-YYYY') : '';
    handleFieldChange('date', formattedDate);
  };

  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

  const handleTimeChange = (newTime: Dayjs | null) => {
    if (newTime) {
      const formattedTime = newTime.format('HH:mm');
      handleFieldChange('time', formattedTime);
    }
    setSelectedTime(newTime);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    if (value.length <= 200) {
      handleFieldChange('description', value);
    }
  };

  const handleAddButtonClick = () => {
    console.log(content);
  };

  return (
    <Wrapper>
      <Title>
        <h2>Dodaj wydarzenie dla siebie</h2>
      </Title>

      <Name
        $nameOn={active.name}
        onFocus={() => setActive({ ...active, name: true })}
        onBlur={() => setActive({ ...active, name: false })}
      >
        <NameLabel
          active={active.name || (!empty.name && inputLength.name > 0)}
          $nameOn={active.name}
        >
          Nazwa wydarzenia
        </NameLabel>
        <InputFieldName value={content.name} onChange={handleNameChange} />
      </Name>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Date
          $dateOn={active.date}
          onFocus={() => {
            setActive({ ...active, date: true });
          }}
          onBlur={() => {
            setActive({ ...active, date: false });
            setEmpty((prev) => ({ ...prev, date: false }));
          }}
        >
          <DateLabel
            active={active.date || (!empty.date && inputLength.date > 0)}
            $dateOn={active.date}
          >
            Data
          </DateLabel>
          <DatePicker
            format="DD-MM-YYYY"
            onChange={handleDateChange}
            slots={{
              openPickerIcon: () => <FontAwesomeIcon icon={faCalendar} />,
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                placeholder: active.date ? 'DD-MM-YYYY' : '',
                variant: 'outlined',
                sx: {
                  '& .MuiOutlinedInput-root': {
                    width: '100%',
                    '& fieldset': { border: 'none' },
                  },
                },
              },
            }}
          />
        </Date>
        <Time
          $timeOn={active.time}
          onFocus={() => {
            setActive({ ...active, time: true });
          }}
          onBlur={() => {
            setActive({ ...active, time: false });
            setEmpty({ ...empty, time: false });
          }}
        >
          <TimeLabel
            active={active.time || (!empty.time && inputLength.time > 0)}
            $timeOn={active.time}
          >
            Godzina
          </TimeLabel>
          <TimeField
            value={selectedTime}
            onChange={handleTimeChange}
            format="HH:mm"
            slotProps={{
              textField: {
                fullWidth: true,
                placeholder: active.time ? 'hh:mm' : '',
                variant: 'outlined',
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { border: 'none' },
                  },
                },
              },
            }}
          />
        </Time>
      </LocalizationProvider>

      <DescriptionBox
        $descriptionOn={active.description}
        onFocus={() => setActive({ ...active, description: true })}
        onBlur={() => setActive({ ...active, description: false })}
      >
        <DescriptionLabel
          active={
            active.description ||
            (!empty.description && inputLength.description > 0)
          }
          $descriptionOn={active.description}
        >
          Opis
        </DescriptionLabel>
        <InputFieldDescription
          value={content.description}
          onChange={handleDescriptionChange}
        />
      </DescriptionBox>
      <Description>
        <p>{inputLength.description}/200 znaków</p>
      </Description>

      <AddButton>
        <Button onClick={handleAddButtonClick} variant="text">
          Dodaj do kalendarza
        </Button>
      </AddButton>
    </Wrapper>
  );
};

export default PersonalEvent;
