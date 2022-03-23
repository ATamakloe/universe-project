import { Card } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </Card>
  );
}
