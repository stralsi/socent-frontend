import React, { PropTypes as T, Component } from 'react'
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap'
import { StickyContainer, Sticky } from 'react-sticky'
import AuthService from './utils/AuthService'
import './components/Navi/navi.css'
import './App.css'
import Img from './components/Img'
class App extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: this.props.auth.getProfile()
    }
    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    });
  }

  logout() {
    this.props.auth.logout();
    this.context.router.push('/home');
  }

  render() {
    const { profile } = this.state;

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.auth
      })
    }

    let profile_details = null;
    let login_button = null;
    let logout_button = null;

    if (this.props.auth.isLoggedIn()) {
      logout_button =
        <NavItem eventKey={1} onClick={this.logout.bind(this)}>Logout</NavItem>;
      // profile_details =
      //   <div>Bun venit {profile.name}</div>;

        profile_details =
          <Img src={profile.picture} className='avatar' alt={profile.name} />;
    } else {
      login_button = (
        <NavItem eventKey={1} href="#" onClick={this.props.auth.login.bind(this)}>
          Sign in
        </NavItem>
      );
    }


    return (
      <div>
      <StickyContainer>
        <Sticky>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="logo" href="/">
                <Img src='nav-logo.jpg' alt="Bine ati venit" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {login_button}
              {logout_button}

            </Nav>
            {profile_details}
          </Navbar.Collapse>
        </Navbar>
        </Sticky>
      </StickyContainer>
        <Grid>
          <Row>
            <Col xs={4} md={2} className="sidebar">
              Sidebar
            </Col>
            <Col xs={10} md={5}>{children}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
