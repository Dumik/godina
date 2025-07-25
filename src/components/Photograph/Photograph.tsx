import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';

interface IPhotographProps {
  link: string | null;
  distance: number | null;
  getRandomPhoto: () => void;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  maxHeight?: string;
}

function Photograph({
  link,
  distance,
  getRandomPhoto,
  setIsLoaded,
}: IPhotographProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setImgError(false);
  }, [link]);

  if (!link) return null;

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 0, sm: 2 },
      }}
    >
      <Card
        elevation={6}
        sx={{
          borderRadius: { xs: 2, sm: 4 },
          boxShadow: 6,
          border: distance === 0 ? '3px solid #43a047' : '2px solid #e3f0ff',
          transition: 'border 0.3s',
          position: 'relative',
          bgcolor: '#fff',
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
          height: 'auto',

          maxHeight: { xs: '30vh', md: '50vh' },

        }}
      >
        {isLoading && !imgError && (
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <CircularProgress color="primary" />
          </Box>
        )}
        <CardMedia
          component="img"
          image={link}
          alt="Game photo"
          sx={{
            width: '100%',
            maxWidth: '100%',
            maxHeight: { xs: '30vh', md: '50vh' },
            objectFit: 'scale-down',
            display: 'block',
            borderRadius: { xs: 2, sm: 4 },
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s',
          }}
          onLoad={() => {
            setIsLoading(false);
            setIsLoaded(true);
          }}
          onError={() => {
            setIsLoading(false);
            setImgError(true);
            setIsLoaded(false);
            getRandomPhoto();
          }}
        />

        {imgError && (
          <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
            Не удалось загрузить фото
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default Photograph;
