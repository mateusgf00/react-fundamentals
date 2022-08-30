import React from 'react';
import Post from './Post';

function App() {
  return (
    <>
      <h1>Component App</h1>
      <h2>Posts da semana</h2>

      <hr />
      
      <Post
        title="Título da noticias 01"
        subtitle="subtítulo da noticia 01"
      />
      <Post
        title="Título da noticias 02"
        subtitle="subtítulo da noticia 02"
      />
      <Post
        title="Título da noticias 03"
        subtitle="subtítulo da noticia 03"
      />
    </>
  );
}

export default App;