import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IYearsSliderProps {
  userYear: number;
  photoYear: number | null;
  isAnswer: boolean;
  distance: number | null;
  setUserYear: (value: React.SetStateAction<number>) => void;
  isLoaded: boolean;
}

const minYear = 2000;
const maxYear = 2025;
const marks = [
  { value: 2000, label: '2000' },
  { value: 2010, label: '2010' },
  { value: 2020, label: '2020' },
  { value: 2025, label: '2025' },
];

function YearsSlider({
  userYear,
  photoYear,
  isAnswer,
  distance,
  setUserYear,
  isLoaded,
}: IYearsSliderProps) {
  // Відображення для відповіді (disable, два значення)
  if (isAnswer && photoYear !== null) {
    return (
      <Box sx={{ width: '100%', px: 2, mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="body2" color="text.secondary">{minYear}</Typography>
          <Typography variant="body2" color="text.secondary">{maxYear}</Typography>
        </Box>
        <Slider
          min={minYear}
          max={maxYear}
          value={[userYear, photoYear]}
          marks={marks}
          disabled
          valueLabelDisplay="on"
          sx={{
            color: distance === 0 ? 'success.main' : 'primary.main',
            height: 8,
            borderRadius: 2,
            '& .MuiSlider-thumb': {
              width: 24,
              height: 24,
              bgcolor: distance === 0 ? 'success.main' : 'primary.main',
              border: '2px solid #fff',
            },
            '& .MuiSlider-markLabel': {
              fontWeight: 600,
            },
          }}
        />
      </Box>
    );
  }

  // Основний режим (одне значення)
  return (
    <Box sx={{ width: '100%', px: 2, mt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" color="text.secondary">{minYear}</Typography>
        <Typography variant="body2" color="text.secondary">{maxYear}</Typography>
      </Box>
      <Slider
        min={minYear}
        max={maxYear}
        value={userYear}
        marks={marks}
        valueLabelDisplay="on"
        onChange={(_, value) => setUserYear(Number(value))}
        disabled={!isLoaded}
        sx={{
          color: 'primary.main',
          height: 8,
          borderRadius: 2,
          '& .MuiSlider-thumb': {
            width: 24,
            height: 24,
            bgcolor: 'primary.main',
            border: '2px solid #fff',
          },
          '& .MuiSlider-markLabel': {
            fontWeight: 600,
          },
        }}
      />
    </Box>
  );
}

export default YearsSlider;
