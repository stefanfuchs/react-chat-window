import * as React from 'react';
import Linkify from 'react-linkify';
import { MessageInterface } from '.';


const ImageMessage = (props: Props) => {
  return (
    <div className="sc-message--image">
      <img src={props.content} />
      <Linkify properties={{ target: '_blank' }}>{props.description}</Linkify>
    </div>
  )
}

export interface Props extends MessageInterface {
  // content: string
}

export default ImageMessage
