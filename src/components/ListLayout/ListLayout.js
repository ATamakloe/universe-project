import { List } from '@mui/material';

export default function ListLayout({ children }) {
  return (
    <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '70%' }}>{children}</List>
  );
}
