import * as React from 'react'
import TextMessage from './TextMessage'
// import EmojiMessage from './EmojiMessage'
// import FileMessage from './FileMessage'
// import chatIconUrl from './../../assets/chat-icon.svg'
import chatIconUrl from './../../assets/Avatar_fly.png.webp'
import { Message as ChatProtocolMessage, MessageType } from '@stefancfuchs/chat-message-protocol'
import ImageMessage from './ImageMessage';

export interface MessageInterface extends ChatProtocolMessage {
  author: 'me' | 'them'
}

class Message extends React.Component<Props> {

  _renderMessageOfType(type: MessageInterface["type"]) {
    switch (type) {
      case MessageType.TEXT:
        return <TextMessage {...this.props.message} />
      case MessageType.IMAGE:
        return <ImageMessage {...this.props.message} />
      // case 'emoji':
      // return <EmojiMessage {...this.props.message} />
      // case 'file':
      // return <FileMessage {...this.props.message} />
      default:
        console.error(`Attempting to load message with unsupported file type '${type}'`)
        return <div></div>
    }
  }

  render() {
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${chatIconUrl})`
          }}></div>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export interface Props {
  message: MessageInterface
}

export default Message