import React, { Component } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { fetchDog } from '../../actions' 
import './style.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { fetchDog } = this.props;
    return (
      <div className="login-container">
        <button onClick={() => fetchDog()}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url}/></p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  url: get(state, 'reducer.url', ''),
  loading: get(state, 'reducer.loading', false),
  error: get(state, 'reducer.error', false),
});

const mapDispatchToProps = dispatch => ({
  fetchDog: () => dispatch(fetchDog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
