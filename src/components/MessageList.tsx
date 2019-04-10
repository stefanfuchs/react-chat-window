import * as React from 'react';
import Message, { MessageInterface } from './Messages'

interface Props {
  messages: MessageInterface[]
  // imageUrl: string
}

class MessageList extends React.Component<Props> {
  scrollList: HTMLDivElement

  constructor(props: Props) {
    super(props);
  }

  componentDidUpdate(prevProps: Props, prevState: any) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render() {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
          return <Message message={message} key={i} />
        })}
      </div>)
  }
}

export default MessageList