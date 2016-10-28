/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import TextFieldGruop from '../common/TextFieldGroup';
import {
  createEvent
} from '../../actions/eventActions';
import {
  connect
} from 'react-redux'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }
  render() {
    const {
      errors,
      title,
      isLoading
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Game Event</h1>
        
        <TextFieldGruop
          error={errors.title}
          onChange={this.onChange}
          value={title}
          field="title"
          label='title'
        />

          <button type='submit' className="btn btn-primary btn-lg">
            Create
          </button>
      </form>
    )
  }
}

EventForm.protoTypes = {
  createEvent: React.PropTypes.func.isRequired,
}
export default connect(null, {
  createEvent
})(EventForm)