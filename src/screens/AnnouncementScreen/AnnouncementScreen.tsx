import * as React from 'react';

import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { Wrapper, styles } from './AnnouncementScreenStyle';

export const AnnouncementScreen = () => {
  const [openWhite, setOpenWhite] = React.useState(false);
  const handleOpenWhite = () => setOpenWhite(true);
  const handleCloseWhite = () => setOpenWhite(false);
  const [openRed, setOpenRed] = React.useState(false);
  const handleOpenRed = () => setOpenRed(true);
  const handleCloseRed = () => setOpenRed(false);

  const handleBoxClickWhite = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const clickedElement = event.target as HTMLElement;
    const elementId = clickedElement.id;
    const Index = informationData.findIndex(
      (informationData) => informationData.id === Number(`${elementId}`),
    );
    handleOpenWhite();
    const GroupName = informationData[Index].group;
    const TopicName = informationData[Index].topic;
    const CreatorName = informationData[Index].author;
    setGroup(`${GroupName}`);
    setTopic(`${TopicName}`);
    setCreator(`${CreatorName}`);
    const ChoosenDescription = informationData[Index].description;
    setDescription(`${ChoosenDescription}`);
    const ChoosenDate = informationData[Index].date;
    setDate(`${ChoosenDate}`);
  };

  const handleBoxClickRed = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    const clickedElement = event.target as HTMLElement;
    const elementId = clickedElement.id;
    const Index = informationData.findIndex(
      (informationData) => informationData.id === Number(`${elementId}`),
    );
    handleOpenRed();
    const GroupName = informationData[Index].group;
    const TopicName = informationData[Index].topic;
    const CreatorName = informationData[Index].author;
    setGroup(`${GroupName}`);
    setTopic(`${TopicName}`);
    setCreator(`${CreatorName}`);
    const ChoosenDescription = informationData[Index].description;
    setDescription(`${ChoosenDescription}`);
    const ChoosenDate = informationData[Index].date;
    setDate(`${ChoosenDate}`);
  };

  const [group, setGroup] = React.useState('');
  const [topic, setTopic] = React.useState('');
  const [creator, setCreator] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState('');

  const informationData = [
    {
      id: 0,
      group: 'Informatyka Stosowana 2023',
      topic: 'Informacja z dziekanatu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Sebastian Wróbel',
      date: '11.09.2024',
    },
    {
      id: 1,
      group: 'Informatyka Stosowana 2024',
      topic: 'Zebranie na RPG',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      author: 'Mateusz Januszkiewicz',
      date: '15.08.2024',
    },
    {
      id: 2,
      group: 'Informatyka Stosowana 2025',
      topic: 'Nowy kierunkowy serwer majkraft',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      author: 'OliTroli',
      date: '24.12.2024',
    },
    {
      id: 3,
      group: 'Informatyka Stosowana 2026',
      topic: 'Alpejskie przygody',
      description:
        'Kiedy powrócisz już ja będę czekał Ulicą pójdę wzdłuż kupię gazetę Zabiorę z sobą psa usiądę na ławce Skończę scenariusz by gotowy był Wieczorem wieczorem przed mym domem Wystawię ekran i wyświetlę film Coś o mnie i o tobie Będę leczył chore sąsiadów sny Z nieba przyleciał mój wielki przyjaciel Kiedy lądował ja jadłem kanapkę Wyśnił że chyba jest chorym człowiekiem Usiądź wygodnie i nie martw się bo Wieczorem wieczorem przed mym domem Wystawię ekran i wyświetlę film Coś o mnie i o tobie Będę leczył chore sąsiadów sny Wieczorem przed mym domem Wystawię ekran i wyświetlę film Coś o mnie i o tobie Będę leczył chore sąsiadów sny Wieczorem przed mym domem Wystawię ekran i wyświetlę film Coś o mnie i o tobie Będę leczył chore sąsiadów sny',
      author: 'Dawid Szmitka',
      date: '01.06.2024',
    },
  ];

  return (
    <Wrapper>
      <Modal
        keepMounted
        open={openWhite}
        onClose={handleCloseWhite}
        sx={{ backdropFilter: 'blur(3px)' }}
      >
        <Box sx={styles.WhiteContainerModule}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Avatar sx={styles.groupAvatar}>
              <img
                src="./group-avatar.png"
                alt="Group Avatar"
                style={styles.groupAvatar}
              />
            </Avatar>
            <Typography style={styles.groupWhite}>{group}</Typography>
          </Box>
          <Typography style={styles.topicWhite}>{topic}</Typography>
          <Typography style={styles.descriptionModuleWhite}>
            {description}
          </Typography>
          <Typography style={styles.creatorWhiteModal}>{creator}</Typography>
          <Typography style={styles.dateWhite}>{date}</Typography>
        </Box>
      </Modal>
      <Modal
        keepMounted
        open={openRed}
        onClose={handleCloseRed}
        sx={{ backdropFilter: 'blur(3px)' }}
      >
        <Box sx={styles.RedContainerModule}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Avatar sx={styles.groupAvatar}>
              <img
                src="./group-avatar.png"
                alt="Group Avatar"
                style={styles.groupAvatar}
              />
            </Avatar>
            <Typography style={styles.groupRed}>{group}</Typography>
          </Box>
          <Typography style={styles.topicRed}>{topic}</Typography>
          <Typography style={styles.descriptionModuleRed}>
            {description}
          </Typography>
          <Typography style={styles.creatorRedModal}>{creator}</Typography>
          <Typography style={styles.dateRed}>{date}</Typography>
        </Box>
      </Modal>
      <FontAwesomeIcon icon={faChevronDown} style={styles.arrow} />
      <Typography sx={styles.title}>Ogłoszenia</Typography>
      {informationData.map((info, id) => (
        <>
          {id % 2 == 0 && (
            <Box
              sx={styles.WhiteContainer}
              onClick={handleBoxClickWhite}
              key={id}
              id={info.id.toString()}
            >
              <Box
                sx={{ display: 'inline-flex', alignItems: 'center' }}
                id={info.id.toString()}
              >
                <Avatar sx={styles.groupAvatar} id={info.id.toString()}>
                  <img
                    src="./group-avatar.png"
                    alt="Group Avatar"
                    style={styles.groupAvatar}
                  />
                </Avatar>
                <Typography id={info.id.toString()} style={styles.groupWhite}>
                  {info.group}
                </Typography>
              </Box>
              <Typography id={info.id.toString()} style={styles.topicWhite}>
                {info.topic}
              </Typography>
              <Typography
                id={info.id.toString()}
                style={styles.descriptionWhite}
              >
                {info.description}
              </Typography>
              <Typography id={info.id.toString()} style={styles.creatorWhite}>
                {info.author}
              </Typography>
            </Box>
          )}
          {id % 2 == 1 && (
            <Box
              sx={styles.RedContainer}
              onClick={handleBoxClickRed}
              key={id + 1}
              id={info.id.toString()}
            >
              <Box
                sx={{ display: 'inline-flex', alignItems: 'center' }}
                id={info.id.toString()}
              >
                <Avatar sx={styles.groupAvatar} id={info.id.toString()}>
                  <img
                    src="./group-avatar.png"
                    alt="Group Avatar"
                    style={styles.groupAvatar}
                  />
                </Avatar>
                <Typography id={info.id.toString()} sx={styles.groupRed}>
                  {info.group}
                </Typography>
              </Box>
              <Typography id={info.id.toString()} style={styles.topicRed}>
                {info.topic}
              </Typography>
              <Typography id={info.id.toString()} style={styles.descriptionRed}>
                {info.description}
              </Typography>
              <Typography id={info.id.toString()} style={styles.creatorRed}>
                {info.author}
              </Typography>
            </Box>
          )}
        </>
      ))}
      <Button variant="contained" style={styles.button}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{
            transform: 'translate(-0.6rem, 0rem)',
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
        Dodaj ogłoszenie dla grupy
      </Button>
    </Wrapper>
  );
};
