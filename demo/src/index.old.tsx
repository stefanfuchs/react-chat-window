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
import { MessageType } from '@stefancfuchs/chat-message-protocol';



class Demo extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false
    };
  }

  _onMessageWasSent(message: MessageInterface) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
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

  _sendMessage(text: string) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: MessageType.TEXT,
          content: text
        }]
      })
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    })
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
        onMessageWasSent={this._onMessageWasSent.bind(this)}
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
