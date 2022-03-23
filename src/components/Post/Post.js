import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Post({ post }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ cursor: 'pointer', marginBottom: '5px', padding: '5px', border: 'solid', borderWidth: '0.5px' }}
      onClick={() => navigate(`/post/${post.id}`, { state: { post: post } })}
    >
      <CardContent>
        <Typography>
          <span style={{ fontWeight: 'bold', textAlign: 'start' }}> Title: </span>
          {post.title}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold' }}> Post: </span>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
