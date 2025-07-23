import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

import Progress from '../../components/Progress/Progress';
import Photograph from '../../components/Photograph/Photograph';
import CorrectAnswer from '../../components/CorrectAnswer/CorrectAnswer';
import Controller from '../../components/Controller/Controller';
import Preloader from '../../components/Preloader/Preloader';
import Total from '../../components/Total/Total';
import { photos } from '../../data/photos';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './Game.scss';

function Game() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoYear, setPhotoYear] = useState<number | null>(null);
  const [photoTitle, setPhotoTitle] = useState<string>('');
  const [photoRegion, setPhotoRegion] = useState<string>('');
  const [userYear, setUserYear] = useState<number>(0);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [isTotal, setIsTotal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);

  function randomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  const expiryTimestamp: Date = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 30);

  const { seconds, isRunning, pause, restart } = useTimer({
    expiryTimestamp,
  });

  function getPoints() {
    if (photoYear) setDistance(Math.abs(photoYear - userYear));
  }

  function showAnswer() {
    setIsAnswer(true);
    pause();
    getPoints();
  }

  function getRandomPhoto() {
    setIsLoading(true);
    // Вибираємо фото, яке ще не використовувалося у цій грі
    let availableIndexes = photos.map((_, idx) => idx).filter(idx => !usedIndexes.includes(idx));
    if (availableIndexes.length === 0) {
      // Якщо всі фото використані, починаємо спочатку
      availableIndexes = photos.map((_, idx) => idx);
      setUsedIndexes([]);
    }
    const randomIdx = availableIndexes[randomInteger(0, availableIndexes.length - 1)];
    const photo = photos[randomIdx];
    setPhotoUrl(photo.src);
    setPhotoYear(photo.year);
    setPhotoTitle(photo.title || '');
    setPhotoRegion(photo.region || '');
    setUsedIndexes(prev => [...prev, randomIdx]);
    setIsLoading(false);
    const newExpiry = new Date();
    newExpiry.setSeconds(newExpiry.getSeconds() + 30);
    restart(newExpiry);
  }

  function resetRound() {
    setIsLoading(true);
    setPhotoUrl(null);
    setPhotoYear(null);
    setDistance(null);
    setIsAnswer(false);
    setUserYear(0);
    setRound(round + 1);
    getRandomPhoto();
  }

  function restartGame() {
    setIsLoading(true);
    setPhotoUrl(null);
    setPhotoYear(null);
    setIsAnswer(false);
    setUserYear(0);
    setIsTotal(false);
    setScore(0);
    setRound(1);
    setDistance(null);
    setUsedIndexes([]);
    getRandomPhoto();
  }

  useEffect(() => {
    getRandomPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let points = 0;
    if (distance !== null && distance === 0) {
      points = 100;
    }
    setScore(score + points);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance]);

  useEffect(() => {
    if (!isRunning) {
      showAnswer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning]);

  return isTotal ? (
    <Total score={score} restartGame={restartGame} />
  ) : (
    <Box
      className="game"
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bgcolor: '#f5f7fa',
        p: { xs: 1, sm: 2 },
        position: 'relative',
      }}
    >
      {/* Кнопки у правому верхньому куті */}
      <Box sx={{ position: 'fixed', top: 16, right: 24, zIndex: 1000, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{ fontWeight: 600, borderRadius: 2, bgcolor: '#fff', boxShadow: 1 }}
          onClick={() => setIsTotal(true)}
        >
          Закінчити гру
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          sx={{ fontWeight: 600, borderRadius: 2, bgcolor: '#fff', boxShadow: 1 }}
          onClick={() => { window.location.hash = '#/'; }}
        >
          На головну
        </Button>
      </Box>
      <Box sx={{ width: '100%', maxWidth: 520, flex: 'none', mt: 2 }}>
        <Progress
          round={round}
          score={score}
          seconds={seconds}
          isLoading={isLoading}
        />
      </Box>
      <Box
        sx={{
          flex: '1 1 auto',
          minHeight: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 600,
          overflow: 'hidden',
          alignSelf: 'center',
          my: 1,
        }}
      >
        {isLoading ? (
          <Preloader />
        ) : (
          <Photograph
            link={photoUrl}
            distance={distance}
            getRandomPhoto={getRandomPhoto}
            setIsLoaded={setIsLoaded}
            maxHeight="100%"
          />
        )}
      </Box>
      <Box sx={{ width: '100%', maxWidth: 520, flex: 'none', mb: 1, position: 'relative' }}>
        <CorrectAnswer
          year={photoYear}
          title={photoTitle}
          region={photoRegion}
          distance={distance}
          isAnswer={isAnswer}
        />
        <Box sx={{ mt: 2, mb: 2 }}>
          <Controller
            userYear={userYear}
            photoYear={photoYear}
            isAnswer={isAnswer}
            distance={distance}
            round={round}
            setUserYear={setUserYear}
            setIsTotal={setIsTotal}
            showAnswer={showAnswer}
            resetRound={resetRound}
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Game;
