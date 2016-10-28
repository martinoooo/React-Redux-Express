/**
 * Created by meng on 2016/10/8.
 */
import React from 'react';
import classnames from 'classnames';

class TextFieldGruop extends React.Component {
  render() {
    const {
      error,
      value,
      onChange,
      type,
      field,
      label
    } = this.props;
    return (
      <div className={classnames("form-gruop",{"has-error":error})} >
      <label className="control-label">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className="form-control"
      />
      {error && <span className="help-block">{error}</span>}
      </div>
    )
  }

}

TextFieldGruop.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

TextFieldGruop.defaultProps = {
  type: 'text'
}

export default TextFieldGruop;