import * as React from 'react';


class PopupWindow extends React.Component<Props> {
  scLauncher: any
  emojiPopup: any

  componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  }

  componentWillUnmount() {
    this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  }

  interceptLauncherClick = (e) => {
    const { isOpen } = this.props;
    const clickedOutside = !this.emojiPopup.contains(e.target) && isOpen;
    clickedOutside && this.props.onClickedOutside(e);
  }

  render() {
    const { isOpen, children } = this.props;
    return (
      <div className="sc-popup-window" ref={e => this.emojiPopup = e}>
        <div className={`sc-popup-window--cointainer ${isOpen ? '' : 'closed'}`}>
          <input
            onChange={this.props.onInputChange}
            className="sc-popup-window--search"
            placeholder="Search emoji..."
          />
          {children}
        </div>
      </div>
    )
  }
}

export interface Props {
  isOpen: boolean
  onClickedOutside: (event: any) => void
  onInputChange: (event: any) => void
}

export default PopupWindow;