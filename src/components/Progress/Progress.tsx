import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Timer from '../Timer/Timer';

interface IProgressProps {
  round: number;
  score: number;
  seconds: number;
  isLoading: boolean;
}

function Progress({ round, score, seconds, isLoading }: IProgressProps) {
  return (
    <Box sx={{
      width: '100%',
      maxWidth: 480,
      mx: 'auto',
      mb: 2,
      mt: { xs: 6, md: 0},
      bgcolor: '#fff',
      borderRadius: 3,
      boxShadow: 2,
      p: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
    }}>
      <Typography variant="h6" color="primary.main" fontWeight={700}>
        Раунд: {round} з 10
      </Typography>
      <Box sx={{ width: '100%', mb: 1 }}>
        <LinearProgress
          variant="determinate"
          value={(round - 1) * 10}
          sx={{ height: 8, borderRadius: 2, bgcolor: '#e3f0ff', '& .MuiLinearProgress-bar': { bgcolor: 'primary.main' } }}
        />
      </Box>
      <Timer seconds={seconds} isLoading={isLoading} />
      <Typography variant="h6" color="text.secondary" fontWeight={600}>
        Рахунок: {score}
      </Typography>
    </Box>
  );
}

export default Progress;
