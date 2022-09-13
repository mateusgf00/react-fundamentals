import React from 'react';
import PostHeader from './PostHeader';

function Post(props) {
  return (
    <>
      <article>
        <PostHeader 
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
        />
        <br />
        <small>{props.post.subtitle}</small><br />
        <small>{props.post.likes}</small>
      </article>
      <br />
    </>
  )
}

export default Post;