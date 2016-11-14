import React, {PropTypes, Component} from 'react'
import utils from '../utils'
import Home from '../components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      mapdata: {},
    };
  }
  componentDidMount() {
    utils
      .getEnterprisesPublic()
      .then(enterprises => {
        console.log(enterprises);
        this.setState({
          mapdata: enterprises.data.mapData,
          isLoading: false
        })
      })
  }
  render() {
    return (
      <div>
        <Home
          isLoading={this.state.isLoading}
          mapData={this.state.mapdata} />
      </div>
    );
  }
}
HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};
