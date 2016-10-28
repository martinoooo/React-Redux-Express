/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import SignupForm from './SignupForm';
import {
  userSignupRequest
} from '../../actions/signupActions';
import {
  addFlashMessages
} from '../../actions/flashMessages';
import {
  connect
} from 'react-redux';

class SignupPage extends React.Component {
  render() {
    const {
      userSignupRequest,
      addFlashMessages
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessages} />
        </div>
      </div>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessages: React.PropTypes.func.isRequired
}

export default connect(null, {
  userSignupRequest,
  addFlashMessages
})(SignupPage);