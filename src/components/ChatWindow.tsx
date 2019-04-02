import * as React from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = [
      "sc-chat-window",
      (this.props.isOpen ? "opened" : "closed")
    ];
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
        />
        <MessageList
          messages={messageList}
          // imageUrl={this.props.agentProfile.imageUrl}
        />
        <UserInput
          onSubmit={this.onUserInputSubmit.bind(this)}
          onFilesSelected={this.onFilesSelected.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

interface Props {
  agentProfile: any,
  isOpen: boolean,
  onClose: (event: any) => void,
  onFilesSelected?: (event: any) => void,
  onUserInputSubmit: (event: any) => void,
  showEmoji: boolean
  messageList: any[]
}

export default ChatWindow;
