import { useEffect, useState } from 'react';
import { TextField, Card, CardContent, Typography, Box, Button } from '@mui/material';
import GameButton from '../GameButton/GameButton';

interface ITotalProps {
  score: number;
  restartGame: () => void;
}

function Total({ score, restartGame }: ITotalProps) {
  const [value, setValue] = useState<string>('');

  function saveScore() {
    if (value.length > 0) {
      localStorage.setItem('name', value);
      // Зберігаємо результат у localStorage
      const prevScores = JSON.parse(localStorage.getItem('localScores') || '[]');
      const newScores = [
        ...prevScores,
        { name: value, score },
      ];
      // Зберігаємо лише топ-10 результатів
      newScores.sort((a, b) => b.score - a.score);
      localStorage.setItem('localScores', JSON.stringify(newScores.slice(0, 10)));
    }
  }

  useEffect(() => {
    const userName = localStorage.getItem('name');
    if (userName) setValue(userName);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
      <Card sx={{ minWidth: 320, maxWidth: 400, mx: 'auto', borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h4" align="center" fontWeight={700} color="primary.main" gutterBottom>
            Итог: {score} из 1000 баллов
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={2}>
            Введите имя, чтобы сохранить результат и попасть в таблицу лидеров
          </Typography>
          <Box component="form"
            onSubmit={(evt) => {
              evt.preventDefault();
              saveScore();
              restartGame();
            }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
          >
            <TextField
              type="search"
              label="Имя"
              variant="filled"
              autoComplete="new-password"
              sx={{
                background: 'white',
                borderRadius: 2,
                width: '100%',
                maxWidth: 260,
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <GameButton text="Новая игра" type="submit" sx={{ width: '100%', maxWidth: 260 }} isDisabled={!value.trim()} />
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: '100%', maxWidth: 260, fontWeight: 700 }}
              disabled={!value.trim()}
              onClick={() => {
                saveScore();
                window.location.hash = '#/leaders';
              }}
            >
              Таблица лидеров
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Total;
