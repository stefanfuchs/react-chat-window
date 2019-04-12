import * as React from 'react'
import { render } from 'react-dom'
import { Launcher } from '../../src'
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from "../assets/monster.png";
// import Highlight from "react-highlight.js";
import '../assets/styles'
import { MessageInterface } from 'src/components/Messages';
import { MessageType, ChatClient } from '@stefancfuchs/chat-message-protocol';
import { Message as ChatProtocolMessage } from '@stefancfuchs/chat-message-protocol'


class Demo extends React.Component<Props, State> {

  protected chatClient: ChatClient

  constructor(props: Props) {
    super(props);
    this.state = {
      messageList: [],
      newMessagesCount: 0,
      isOpen: false
    };
    this.chatClient = new ChatClient("http://localhost:3001", {
      existingId: 'asdf',
      onMessageReceived: this.handleMessageReceived
    })
  }

  handleMessageWasSent = (message: MessageInterface) => {
    this.chatClient.sendMessage(message)
    this.setState(prevState => ({
      messageList: [...prevState.messageList, message]
    }))
  }

  // _onFilesSelected(fileList) {
  //   const objectURL = window.URL.createObjectURL(fileList[0]);
  //   this.setState({
  //     messageList: [...this.state.messageList, {
  //       type: 'file', author: "me",
  //       data: {
  //         url: objectURL,
  //         fileName: fileList[0].name
  //       }
  //     }]
  //   })
  // }

  /** Handles a new message incoming from the server */
  handleMessageReceived = (message: ChatProtocolMessage) => {
    if (message.content.length > 0) {
      this.setState(prevState => {
        const newMessagesCount = prevState.isOpen ? prevState.newMessagesCount : prevState.newMessagesCount + 1
        return {
          newMessagesCount,
          messageList: [...prevState.messageList, { ...message, author: 'them', }]
        }
      })
    }
  }

  /** Simulate an incoming message using the textarea */
  _sendMessage(text: string) {
    if (text.length > 0) {
      this.setState(prevState => {
        const newMessagesCount = prevState.isOpen ? prevState.newMessagesCount : prevState.newMessagesCount + 1
        return {
          newMessagesCount,
          messageList: [...prevState.messageList, {
            author: 'them',
            type: MessageType.TEXT,
            content: text
          }]
        }
      })
    }
  }

  _handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      newMessagesCount: 0
    }))
  }

  render() {
    return <div>
      <Header />
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this.handleMessageWasSent}
        // onFilesSelected={this._onFilesSelected.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
        showEmoji
      />
      <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer />
    </div>
  }
}

export interface Props {

}

export interface State {
  messageList: MessageInterface[]
  newMessagesCount: number
  isOpen: boolean
}

render(<Demo />, document.querySelector('#demo'))
