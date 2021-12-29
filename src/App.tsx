// npm modules
import React from 'react';
import {
  color,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';

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
        backgroundColor: color.grey.A200,
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
          backgroundColor: color.grey.A100,
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
        <Typography variant="h5" sx={{ fontWeight: 700, pl: 4, pr: 4 }}>
          Documentation Previews
        </Typography>

        {/* list */}
        <List>
          {/* stoplight item */}
          <ListItem divider>
            <ListItemButton onClick={handleStoplightListItemButtonClick}>
              <ListItemText>
                <Typography variant="h6">Stoplight</Typography>
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
                <Typography variant="h6">Redocly</Typography>
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
              <Typography variant="h6">Postman</Typography>
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
