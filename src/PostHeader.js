import React from "react";
import Button from "./Button";

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong>
      <Button onClick={() => props.onRemove(props.post.id)}>
        Remover
      </Button>
    </>
  )
}