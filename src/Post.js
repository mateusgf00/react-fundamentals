import React from 'react';

function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>
          Remover
        </button>
        <br />
        <small>{props.post.subtitle}</small><br />
        <small>{props.likes}</small>
      </article>
      <br />
    </>
  )
}

export default Post;