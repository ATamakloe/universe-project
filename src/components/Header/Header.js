import { CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <CardHeader
      onClick={() => navigate('/')}
      style={{ backgroundColor: 'blue', width: '100%', cursor: 'pointer', color: 'white', textAlign: 'center' }}
      title="Universe Twitter"
    />
  );
}
