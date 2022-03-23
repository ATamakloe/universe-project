import { useEffect, useState } from 'react';
import { CircularProgress, List, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Post from '../Post/Post';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import ListLayout from '../ListLayout/ListLayout';

export default function AuthorDetail() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let location = useLocation();
  const authorId = location.state.userId;
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${authorId}`;
  useEffect(() => {
    async function fetchPosts() {
      setPostData([]);
      setLoading(true);
      const response = await fetch(url);
      const posts = await response.json();
      setLoading(false);
      setPostData(posts);
    }
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Header />
      {isLoading && <CircularProgress />}
      <ListLayout>
        <Typography variant="h5">{`Posts by Author ${authorId}`}</Typography>
        {postData.map((post) => (
          <Post post={post} />
        ))}
      </ListLayout>
    </Layout>
  );
}
