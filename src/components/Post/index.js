import React from 'react';
import PostHeader from './PostHeader';

import { Subtitle, Rate } from './styles';
import styles from './Post.scss';

function Post(props) {
  return (
    <article className={
      props.post.removed ? styles.postDeleted : styles.post

    }>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Rate> Media: {props.post.likes}</Rate>
    </article>

  )
}

export default Post;