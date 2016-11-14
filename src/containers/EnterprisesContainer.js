import React, {PropTypes as T, Component} from 'react'
import utils from '../utils'
import Enterprises from '../components/Enterprises'

export default class EnterprisesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      enterprises: [],
    };
  }
  componentDidMount() {
    utils
      .getEnterprises()
      .then(enterprises => {
        this.setState({
          enterprises: enterprises.data.enterprises,
          isLoading: false
        })
      })
  }
  render() {
    return (
      <div>
        <Enterprises
          isLoading={this.state.isLoading}
          enterprises={this.state.enterprises} />
      </div>
    );
  }
}
EnterprisesContainer.contextTypes = {
  router: T.object.isRequired,
};
