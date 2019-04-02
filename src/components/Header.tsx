import * as React from 'react';
import closeIcon from './../assets/close-icon.png';


class Header extends React.Component<Props> {

  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

interface Props {
  imageUrl: string
  teamName: string
  onClose: (event: any) => void
}

export default Header;
