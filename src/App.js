import React, { useState, createContext } from 'react';
import Post from './Post';
import Header from './Header';

export const ThemeContext = createContext('dark');

function App() {
  const [theme, setTheme] = useState('dark');

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 50, read: false },
  ]);

  function handleToogleTheme(){
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  function handleRefresh() {
    setPosts((prevState) => [

      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50
      }
    ])

    console.log({ posts });
  }

  function handleRemovePost(postId) {
    setPosts(
      (prevState) => (
        prevState.filter(post => post.id !== postId)
      ));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header 
      title="JStack's Blog"
      onToggleTheme={handleToogleTheme}>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeContext.Provider>
  );
}

export default App;