import React, { FC } from 'react';

import { Box } from '@mui/material';
import { GitHub } from '@mui/icons-material';

export const Footer: FC = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ m: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="a"
          href="https://github.com/emmchier"
          target="_blank"
          sx={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <GitHub sx={{ mr: 1 }} />
          Emmanuel Chierchie
        </Box>
      </Box>
    </Box>
  );
};
