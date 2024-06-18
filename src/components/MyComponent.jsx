import React, { useState } from 'react';
import { Button, Collapse } from '@mui/material';

const MyComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const handleToggle = () => {
    setShowButton(prev => !prev);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleToggle}>
        Toggle Button
      </Button>
      <Collapse in={showButton}>
        <Button variant="contained" color="primary">
          Collapsible Button
        </Button>
      </Collapse>
    </div>
  );
};

export default MyComponent;
