import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ITimerProps {
  seconds: number;
  isLoading: boolean;
}

function Timer({ seconds, isLoading }: ITimerProps) {
  if (isLoading) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 12,
        left: 16,
        zIndex: 10,
        bgcolor: '#fff',
        borderRadius: 2,
        px: 2,
        py: 0.5,
        boxShadow: 2,
        display: 'flex',
        alignItems: 'center',
        minWidth: 48,
        minHeight: 32,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color={seconds <= 10 ? 'error.main' : 'primary.main'}
        sx={{ letterSpacing: 1, fontVariantNumeric: 'tabular-nums' }}
      >
        {seconds}
      </Typography>
    </Box>
  );
}

export default Timer;
