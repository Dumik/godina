import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function BasicTable() {
  const [topScore, setTopScore] = useState<
    | {
        name: string;
        score: number;
      }[]
    | null
  >(null);

  const userName = localStorage.getItem('name');

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('localScores') || '[]');
    setTopScore(scores);
  }, []);

  const getRowColor = (index: number) => {
    if (index === 0) return 'warning.light';
    if (index === 1) return 'grey.200';
    if (index === 2) return 'orange.100';
    return 'background.paper';
  };

  return (
    <Box sx={{ mt: 4, mb: 2, width: '100%', maxWidth: 500, mx: 'auto' }}>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          sx={{ fontWeight: 700, borderRadius: 2, px: 3 }}
          onClick={() => window.location.hash = '#/game'}
        >
          Начать новую игру
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          sx={{ fontWeight: 700, borderRadius: 2, px: 3 }}
          onClick={() => window.location.hash = '#/'}
        >
          На главную
        </Button>
      </Box>
      <Paper elevation={4} sx={{ borderRadius: 4, p: 2 }}>
        <Typography variant="h5" align="center" fontWeight={700} mb={2} color="primary.main">
          Лучшие игроки
        </Typography>
        <TableContainer>
          <Table size="small" aria-label="Таблица лидеров">
            <TableBody>
              {topScore && topScore.length > 0 ? (
                topScore.map((user, index) => (
                  <TableRow
                    key={user.name + user.score}
                    sx={{
                      backgroundColor:
                        user.name === userName
                          ? 'success.light'
                          : getRowColor(index),
                    }}
                  >
                    <TableCell align="center" sx={{ fontWeight: 700, fontSize: 18, width: 32 }}>
                      {index < 3 ? <EmojiEventsIcon color={index === 0 ? 'warning' : index === 1 ? 'disabled' : 'warning'} fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} /> : null}
                      {index + 1}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: user.name === userName ? 700 : 500, fontSize: 18 }}>
                      {user.name}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: user.name === userName ? 700 : 500, fontSize: 18 }}>
                      {user.score}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography variant="body1" color="text.secondary" sx={{ py: 3 }}>
                      Пока нет результатов — сыграйте и попадите в топ-10!
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
