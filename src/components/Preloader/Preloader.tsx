import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Preloader() {
  return (
    <Box sx={{ width: '100%', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'transparent' }}>
      <CircularProgress size={64} thickness={4.5} color="primary" />
    </Box>
  );
}

export default Preloader;
