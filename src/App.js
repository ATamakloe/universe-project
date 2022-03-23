import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import ListLayout from './components/ListLayout/ListLayout';

function App() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setPostData([]);
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
        {postData.map((postData) => (
          <Post post={postData} />
        ))}
      </ListLayout>
    </Layout>
  );
}

export default App;
