import React, { PropTypes as T, Component } from 'react'
import { IndexLink } from 'react-router'
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap'
import { StickyContainer, Sticky } from 'react-sticky'
import AuthService from './utils/AuthService'
import './components/Navi/navi.css'
import './App.css'
import Img from './components/Img'
import Footer from './components/Footer'
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
      isLoading: true,
      profile: this.props.auth.getProfile()
    }
    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({ profile: newProfile})
    });
  }
  logout() {
    this.props.auth.logout();
    this.context.router.push('/');
    this.setState({profile: {}})
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
        <NavItem className="logout" eventKey={1} onClick={this.logout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true"></i></NavItem>;
      // profile_details =
      //   <Navbar.Text>Bun venit {profile.name}</Navbar.Text>;
      if (profile.picture) {
        profile_details =
          <Img src={profile.picture} className='avatar' alt={profile.name} />;
      }
    } else {
      login_button = (
        <NavItem className="login-in" eventKey={1} onClick={this.props.auth.login.bind(this)}>
          <i className="fa fa-sign-in" aria-hidden="true"></i>
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
                <IndexLink to="/"><Img src='nav-logo.jpg' alt="Bine ati venit" /></IndexLink>
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
            <Col xs={12} md={12}>{children}</Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
