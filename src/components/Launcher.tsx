import * as React from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/close-icon.png';
import { MessageInterface } from './Messages';

class Launcher extends React.Component<Props, State> {

  public static defaultProps = {
    newMessagesCount: 0,
    showEmoji: true
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.mute) { return; }
    const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    const isIncoming = nextMessage ? nextMessage.author === 'them' : false;
    const isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound()
    }
  }

  playIncomingMessageSound() {
    var audio = new Audio(incomingMessageSound);
    audio.play();
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }
  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    return (
      <div id="sc-launcher">
        <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
          <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
          <img className={"sc-open-icon"} src={launcherIconActive} />
          <img className={"sc-closed-icon"} src={launcherIcon} />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          // onFilesSelected={this.props.onFilesSelected}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
          // showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

const MessageCount = (props: { count: number, isOpen: boolean }) => {
  if (props.count === 0 || props.isOpen === true) { return null }
  return (
    <div className={"sc-new-messages-count"}>
      {props.count}
    </div>
  )
}

export interface Props {
  onMessageWasReceived?: (...args: any) => any,
  onMessageWasSent?: (...args: any) => any,
  // onFilesSelected?: (...args: any) => any,
  agentProfile?: any,
  newMessagesCount?: number,
  isOpen?: boolean,
  handleClick?: (...args: any) => any,
  messageList?: MessageInterface[],
  mute?: boolean,
  showEmoji?: boolean,
}

export interface State {
  launcherIcon: string
  isOpen: boolean
}

// Launcher.defaultProps = {
//   newMessagesCount: 0,
//   showEmoji: true
// }

export default Launcher;
