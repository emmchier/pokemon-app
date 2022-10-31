import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface EmptyContentTypes {
  message: string;
}

export const EmptyContent: FC<EmptyContentTypes> = ({ message = '' }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Typography variant="h4">{message}</Typography>
      <Box
        sx={{
          opacity: 0.1,
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          width={250}
          height={250}
          alt="No content"
        />
      </Box>
    </Container>
  );
};
