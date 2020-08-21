import React from 'react';
import Card from "./Card"

const Comments = ({name, comment}) => {
  return (
    <div>
      <Card>
        <h1>{name}</h1>
        <p>{comment}</p>
      </Card>
    </div>
  )
}

export default Comments
