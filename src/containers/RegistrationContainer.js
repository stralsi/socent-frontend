import React, {PropTypes, Component} from 'react'
import Registration from '../components/Registration'
import utils from '../utils'
export default class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      enterprises: {},
    };
  }
  componentDidMount() {
    const id = this.props.params.id

    utils
      .getEnterprise(id)
      .then(enterprise => {
        this.setState({
          enterprise: enterprise.data,
          isLoading: false
        })
      })
	}
  render() {
    return (
      <div>
        <Registration
          isLoading={this.state.isLoading}
          enterprises={this.state.enterprises} />
      </div>
    );
  }
}
RegistrationContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
