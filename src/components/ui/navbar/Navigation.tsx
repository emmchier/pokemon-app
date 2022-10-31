import React, { FC } from 'react';

import { Divider, List, ListItem, Typography } from '@mui/material';
import { SwitchMode } from './SwitchMode';
import Link from 'next/link';
import { grey } from '@mui/material/colors';

interface NavLink {
  name: string;
  to: string;
}

interface NavigationTypes {
  isDarkMode?: boolean;
  setIsDarkMode: (e: boolean) => void;
  items: NavLink[];
}

export const Navigation: FC<NavigationTypes> = ({ isDarkMode, setIsDarkMode, items }) => {
  return (
    <List sx={{ display: { xs: 'block', sm: 'flex' } }}>
      {items?.map((item: NavLink, index: number) => (
        <ListItem key={index}>
          <Link href={item.to}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                color: isDarkMode ? '#FFFFFF' : '#000000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'regular',
              }}
            >
              {item.name}
            </Typography>
          </Link>
        </ListItem>
      ))}
      <Divider
        sx={{
          display: { sm: 'none', xs: 'block' },
          background: isDarkMode ? grey[500] : grey[200],
          margin: '10px 0',
        }}
      />
      <ListItem>
        <SwitchMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </ListItem>
    </List>
  );
};
