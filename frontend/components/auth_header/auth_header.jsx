import React from "react";
import { Link } from "react-router-dom";

class AuthHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown_open: false };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.logout = this.logout.bind(this);
    this.clickLinks = this.clickLinks.bind(this);
  }

  openDropdown(event) {
    event.preventDefault();
    this.setState(
      {
        dropdown_open: true
      },
      () => {
        document.addEventListener("click", this.closeDropdown);
      }
    );
  }

  closeDropdown(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState(
        {
          dropdown_open: false
        },
        () => {
          document.removeEventListener("click", this.closeDropdown);
        }
      );
    }
  }

  clickLinks() {
    this.setState({ dropdown_open: false }, () => {
      document.removeEventListener("click", this.closeDropdown);
    });
  }

  logout() {
    this.setState({ dropdown_open: false }, () => {
      document.removeEventListener("click", this.closeDropdown);
      this.props.logout();
    });
  }

  render() {
    const { currentUser, openModal } = this.props;
    if (!currentUser) this.state.dropdown_open = false;
    const { dropdown_open } = this.state;
    const dropdown = currentUser ? (
      <div
        className="user-dropdown"
        ref={ele => {
          this.dropdownMenu = ele;
        }}
      >
        <ul
          className={
            dropdown_open ? "user-dropdown-ul show" : "user-dropdown-ul"
          }
        >
          <li>
            <Link to={`/users/${currentUser.id}`} onClick={this.clickLinks}>
              Profile
            </Link>
          </li>
          {/* <li><Link to="/">Galleries</Link></li> */}
          <li>
            <Link to="/likedphotos">Liked photos</Link>
          </li>
          <li>
            <button onClick={this.logout}>Log out</button>
          </li>
        </ul>
      </div>
    ) : null;
    const elements = currentUser ? (
      <>
        <div className="user-thumb" onClick={this.openDropdown}>
          <img src={window.userURL} alt={currentUser.username} />
        </div>
        {dropdown}
        {/* <a className="messenger"/>
                    <a className="notifications" /> */}
        <a className="upload-button" onClick={openModal}>
          <div className="upload-arrow"></div>
          <span>Upload</span>
        </a>
      </>
    ) : (
      <>
        <Link to="/login" className="auth-login">
          Log in
        </Link>
        <Link to="/signup" className="auth-signup">
          Sign Up
        </Link>
      </>
    );
    return <div className="auth-header">{elements}</div>;
  }
}
export default AuthHeader;
