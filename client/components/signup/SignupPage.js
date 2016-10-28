/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import SignupForm from './SignupForm';
import {
  userSignupRequest,
  isUserExists
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
      addFlashMessages,
      isUserExists
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm 
            userSignupRequest={userSignupRequest} 
            addFlashMessage={addFlashMessages} 
            isUserExists={isUserExists} />
        </div>
      </div>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessages: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, {
  userSignupRequest,
  addFlashMessages,
  isUserExists
})(SignupPage);