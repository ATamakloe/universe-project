import { useEffect, useState } from 'react';
import { CircularProgress, List, Card, CardContent, Typography, Link } from '@mui/material';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Layout from '../Layout/Layout';
import ListLayout from '../ListLayout/ListLayout';

export default function PostDetail() {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let params = useParams();
  const location = useLocation();
  const post = location.state.post;
  const navigate = useNavigate();
  const url = `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`;

  useEffect(() => {
    async function fetchPosts() {
      setCommentData([]);
      setLoading(true);
      const response = await fetch(url);
      const comments = await response.json();
      setLoading(false);
      setCommentData(comments);
    }
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Header />
      {isLoading && <CircularProgress />}
      <ListLayout>
        <Typography variant="h5">Post</Typography>
        <Post post={post} />
        <Link
          component="button"
          variant="h6"
          style={{ margin: '10px' }}
          onClick={() => navigate(`/author/${post.userId}`, { state: { userId: post.userId } })}
        >
          More posts by this authour
        </Link>
        <Typography variant="h5">Comments</Typography>
        {commentData.map((comment) => (
          <Comment comment={comment} />
        ))}
      </ListLayout>
    </Layout>
  );
}
