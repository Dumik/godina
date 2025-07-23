import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface ICorrectAnswerProps {
  year: number | null;
  title: string;
  region: string;
  distance: number | null;
  isAnswer: boolean;
}

function CorrectAnswer({
  year,
  title,
  region,
  distance,
  isAnswer,
}: ICorrectAnswerProps) {
  if (!isAnswer) return null;

  const isCorrect = distance === 0;

  return (
    <Box sx={{ width: '100%', maxWidth: 420, mx: 'auto', my: 2 }}>
      <Card
        elevation={isCorrect ? 8 : 2}
        sx={{
          borderRadius: 3,
          bgcolor: isCorrect ? '#e8f5e9' : '#fff',
          border: isCorrect ? '2px solid #43a047' : '1px solid #e3f0ff',
          boxShadow: isCorrect ? 6 : 2,
        }}
      >
        <CardContent sx={{ textAlign: 'center', p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            {isCorrect ? (
              <CheckCircleIcon color="success" sx={{ fontSize: 32, mr: 1 }} />
            ) : (
              <ErrorIcon color="warning" sx={{ fontSize: 32, mr: 1 }} />
            )}
            <Typography variant="h5" fontWeight={700} color={isCorrect ? 'success.main' : 'primary.main'}>
              {year ? `${year} год` : ''}
            </Typography>
          </Box>
          {title && (
            <Typography variant="subtitle1" color="text.secondary" fontWeight={500} mb={0.5}>
              {title}
            </Typography>
          )}
          {region && (
            <Typography variant="body2" color="text.secondary">
              {region}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default CorrectAnswer;
