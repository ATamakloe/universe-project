import { Card, CardContent, Typography } from '@mui/material';

export default function Comment({ comment }) {
  return (
    <Card
      style={{ marginBottom: '5px', paddingTop: '5px', paddingBottom: '5px', border: 'solid', borderWidth: '0.5px' }}
    >
      <CardContent>
        <Typography>
          <span style={{ fontWeight: 'bold' }}> Name: </span>
          {comment.name}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold' }}> Comment: </span>
          {comment.body}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold' }}> Email: </span>
          {comment.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
