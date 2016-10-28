/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import timezones from '../../data/timezones'
import map from 'lodash/map';
import TextFieldGruop from '../common/TextFieldGroup'
import {
  browserHistory
} from 'react-router';
import validateInput from '../../../server/shared/validations/signup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: '',
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid() {
    const {
      errors,
      isValid
    } = validateInput(this.state);

    if (!isValid) {
      this.setState({
        errors
      });
    }

    return isValid;
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'dddddddd'
          });
          browserHistory.push('/');
        },
        (data) => {
          this.setState({
            errors: data.response.data,
            isLoading: false
          })
        }
      )
    }
  }
  render() {
    const {
      errors
    } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Hello</h1>
        <TextFieldGruop
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          type="text"
          value={this.state.username}
          field="username"
        />

        <TextFieldGruop
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          type="text"
          value={this.state.password}
          field="password"
        />

        <TextFieldGruop
          error={errors.passwordConfirmation}
          label="passwordConfirmation"
          onChange={this.onChange}
          type="text"
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <TextFieldGruop
          error={errors.email}
          label="email"
          onChange={this.onChange}
          type="text"
          value={this.state.email}
          field="email"
        />

        <div className="form-gruop" >
          <label className="control-label">timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>-----</option>
            {options}
          </select>
        </div>

        <div className="from-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SignupForm