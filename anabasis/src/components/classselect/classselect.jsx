import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import './classselect.css';

const imageModules = import.meta.glob('../../assets/classicons/*.png', { eager: true, import: 'default' });

const images = Object.entries(imageModules).map(([path, src]) => {
  const name = path.split('/').pop().replace('.png', '');
  return { name, src };
});

const SelectableIcon = styled(Box)(({ selected }) => ({
  width: '100%',
  height: 'auto',
  cursor: 'pointer',
  filter: selected ? 'none' : 'grayscale(100%)',
  transition: 'filter 0.3s ease-in-out',
  border: selected ? '2px solid #1976d2' : '2px solid transparent',
  borderRadius: 8,
}));

function ClassSelect({ onSelectionChange }) {
    const [selectedIcons, setSelectedIcons] = useState([]);

    const toggleSelect = (iconName) => {
        setSelectedIcons((prev) =>
          prev.includes(iconName)
            ? prev.filter((name) => name !== iconName)
            : [...prev, iconName]
        );
        
        onSelectionChange(selectedIcons);
    };

   
    return (
        <div className='grid'>
        <Grid container spacing={2}>
          {images.map(({ name, src }) => (
            <Grid item key={name} size={2}>
              <SelectableIcon
                component="img"
                src={src}
                alt={name}
                selected={selectedIcons.includes(name)}
                onClick={() => toggleSelect(name)}
              />
            </Grid>
          ))}
        </Grid>
        </div>
    );

}

export default ClassSelect;

