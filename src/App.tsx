// npm modules
import './App.css';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

// component
function App() {
  // event handlers
  const handleStoplightListItemButtonClick = () => {
    window.open(process.env.REACT_APP_STOPLIGHT_URL, 'blank');
  };

  const handleRedoclyListItemButtonClick = () => {
    window.open(process.env.REACT_APP_REDOCLY_URL, 'blank');
  };

  const handlePostmanListItemButtonClick = () => {
    window.open(process.env.REACT_APP_POSTMAN_URL, 'blank');
  };

  // render
  return (
    <Box
      sx={{
        backgroundColor: grey['A200'],
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        p: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: grey['A100'],
          borderRadius: 1,
          boxShadow: 1,
          width: '100%',
          maxWidth: '40rem',
          pb: 2,
          pl: 2,
          pr: 2,
          pt: 3,
        }}
      >
        {/* header */}
        <Typography
          children="Documentation Previews"
          variant="h5"
          sx={{ fontWeight: 700, pl: 4, pr: 4 }}
        />

        {/* list */}
        <List>
          {/* stoplight item */}
          <ListItem divider>
            <ListItemButton onClick={handleStoplightListItemButtonClick}>
              <ListItemText>
                <Typography children="Stoplight" variant="h6" />
              </ListItemText>
              <ListItemIcon sx={{ justifyContent: 'right' }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          {/* redocly item */}
          <ListItem divider>
            <ListItemButton onClick={handleRedoclyListItemButtonClick}>
              <ListItemText>
                <Typography children="Redocly" variant="h6" />
              </ListItemText>
              <ListItemIcon sx={{ justifyContent: 'right' }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>

        {/* postman item */}
        <ListItem>
          <ListItemButton onClick={handlePostmanListItemButtonClick}>
            <ListItemText>
              <Typography children="Postman" variant="h6" />
            </ListItemText>
            <ListItemIcon sx={{ justifyContent: 'right' }}>
              <ChevronRightIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
}

export default App;
