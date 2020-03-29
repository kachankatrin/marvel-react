import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Story(props) {
  const {story: {title, comics}} = props
  return (
    <ListGroup.Item variant="info">
      <div>
      {title}
      </div>
      <div>
      {comics.items[0].name}
      </div>
    </ListGroup.Item>
  )
}
export default Story;