import React from 'react';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const HabitInfo = () => {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [value, setValue] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  
  const handleValue = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Analisis de habitos
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ¿Cual crees que es la primera pregunta?
      </Typography>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value={1}>1</ToggleButton>
        <ToggleButton value={2}>2</ToggleButton>
        <ToggleButton value={3}>3</ToggleButton>
        <ToggleButton value={4}>4</ToggleButton>
        <ToggleButton value={5}>5</ToggleButton>
        <ToggleButton value={6}>6</ToggleButton>
        <ToggleButton value={7}>7</ToggleButton>
        <ToggleButton value={8}>8</ToggleButton>
        <ToggleButton value={9}>9</ToggleButton>
        <ToggleButton value={10}>10</ToggleButton>
      </ToggleButtonGroup>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ¿Cual crees que es la primera pregunta?
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleValue}
        aria-label="text alignment"
      >
        <ToggleButton value={1}>1</ToggleButton>
        <ToggleButton value={2}>2</ToggleButton>
        <ToggleButton value={3}>3</ToggleButton>
        <ToggleButton value={4}>4</ToggleButton>
        <ToggleButton value={5}>5</ToggleButton>
        <ToggleButton value={6}>6</ToggleButton>
        <ToggleButton value={7}>7</ToggleButton>
        <ToggleButton value={8}>8</ToggleButton>
        <ToggleButton value={9}>9</ToggleButton>
        <ToggleButton value={10}>10</ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>
  )
}

export default HabitInfo
