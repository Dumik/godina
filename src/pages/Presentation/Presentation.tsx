import {
  Container,
  Card,
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Presentation() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'linear-gradient(135deg, #fff0f5 0%, #fdfcff 100%)',
        py: { xs: 3, sm: 6 },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Card
          elevation={8}
          sx={{
            borderRadius: 5,
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 6 },
            width: '100%',
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            textAlign: 'center',
            bgcolor: '#ffffffee',
            boxShadow: '0 8px 30px rgba(255,192,203,0.25)',
          }}
        >
          {/* Іконка зверху */}
          <FavoriteRoundedIcon sx={{ fontSize: 48, color: '#e91e63' }} />

          {/* Заголовок */}
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              color: '#d81b60',
              letterSpacing: 1,
              fontSize: { xs: '1.9rem', sm: '2.3rem' },
            }}
          >
            З річницею, дорогі!
          </Typography>

          {/* Привітання */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}
          >
            Від ваших друзів — <b>невеликий інтерактивний подарунок</b> до вашої річниці 💞
            <br />
            Спробуйте згадати, в який рік відбувалися ці епізоди вашого життя,
            що залишили слід у памʼяті вас і ваших близьких.
            <br />
            <br />
            <i>Любимо вас 💖</i>
          </Typography>

          {/* Акардеон з правилами */}
          <Accordion
            elevation={0}
            sx={{
              width: '100%',
              bgcolor: 'transparent',
              border: '1px solid #f3cbd3',
              borderRadius: 2,
              mt: -1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontWeight: 700, color: 'primary.main' }}
              >
                📜 Правила гри
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: 1.6 }}
              >
              Гра на інтуїцію та памʼять:
                <br /><br />
              • Вам показують випадкову фотографію з періоду <b>2000–2025</b> року.
                <br />
              • Потрібно обрати, в якому саме році вона була зроблена.
                <br />
              • Усього <b>10 раундів</b>, кожне фото — новий виклик.
                <br />
              • За правильну відповідь — <b>100 балів</b>.
                <br />
              • У фіналі — можливість зберегти свій результат і потрапити до <b>топ-10</b> гравців!
                <br />
              • <b>Щораз у новій грі — інші фотографії</b>, тож кожна спроба — нове випробування.
              </Typography>
            </AccordionDetails>

          </Accordion>

          {/* Кнопки */}
          <Box sx={{ width: '100%' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                fontWeight: 700,
                fontSize: '1.05rem',
                borderRadius: 3,
                py: 1.5,
              }}
              onClick={() => (window.location.hash = '#/game')}
            >
              🎮 Почати гру
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              sx={{
                fontWeight: 700,
                fontSize: '1.05rem',
                borderRadius: 3,
                py: 1.5,
                mt: 2,
              }}
              onClick={() => (window.location.hash = '#/leaders')}
            >
              🏆 Таблиця Результатів
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default Presentation;
