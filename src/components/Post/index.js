import React from 'react';
import PostHeader from './PostHeader';

import { Container, Subtitle, Rate } from './styles';

function Post(props) {
  return (
    <Container removed={props.post.removed}>
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
    </Container>

  )
}

export default Post;