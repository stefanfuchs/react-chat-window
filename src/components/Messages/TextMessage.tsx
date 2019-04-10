import * as React from 'react';
import Linkify from 'react-linkify';
import { MessageInterface } from '.';


const TextMessage = (props: Props) => {
  return <div className="sc-message--text">{
    <Linkify properties={{ target: '_blank' }}>{props.content}</Linkify>
  }</div>
}

export interface Props extends MessageInterface {
  content: string
}

export default TextMessage
