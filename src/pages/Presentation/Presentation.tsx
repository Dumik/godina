import { Container, Card, Typography, Box, Button } from '@mui/material';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

function Presentation() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e3f0ff 0%, #fafcff 100%)', py: { xs: 2, sm: 6 } }}>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Card elevation={6} sx={{ borderRadius: 4, p: { xs: 2, sm: 4 }, width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <CameraAltRoundedIcon color="primary" sx={{ fontSize: 56, mb: 1 }} />
            <Typography variant="h3" color="primary.main" fontWeight={800} align="center" gutterBottom sx={{ letterSpacing: 1, fontSize: { xs: '2rem', sm: '2.5rem' } }}>
              Godina
            </Typography>
            <Typography variant="h6" color="text.primary" fontWeight={700} align="center" gutterBottom>
              Угадай точный год современной фотографии
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 1.5 }}>
            <b>Godina</b> — это быстрая игра на внимательность и память!<br/>
            Тебе показывают случайную фотографию из XXI века.<br/>
            Выбери точный год из диапазона <b>2000–2025</b>.<br/>
            <br/>
            <b>10 раундов</b> — 10 фото.<br/>
            За каждый точный ответ — 100 баллов.<br/>
            В конце ты можешь сохранить свой результат и попасть в <b>топ-10</b> игроков.<br/>
            <br/>
            Играй, соревнуйся с друзьями и проверь свою интуицию!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '100%', fontWeight: 700, fontSize: '1.1rem', borderRadius: 2, py: 1.5, mt: 1 }}
            onClick={() => window.location.hash = '#/game'}
          >
            Начать игру
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: '100%', fontWeight: 700, fontSize: '1.1rem', borderRadius: 2, py: 1.5, mt: 2 }}
            onClick={() => window.location.hash = '#/leaders'}
          >
            Таблица лидеров
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default Presentation;
