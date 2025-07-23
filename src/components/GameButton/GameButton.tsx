import Button from '@mui/material/Button';
import { SxProps } from '@mui/material';

interface IGameButtonProps {
  handleClick?: () => void;
  text: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  isDisabled?: boolean;
  sx?: SxProps;
}

function GameButton({ handleClick, isDisabled, text, type, sx }: IGameButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      sx={{
        borderRadius: 2,
        fontWeight: 700,
        fontSize: '1.1rem',
        textTransform: 'none',
        boxShadow: 2,
        px: 4,
        py: 1.5,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}

export default GameButton;
