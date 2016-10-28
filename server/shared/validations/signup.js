/**
 * Created by meng on 2016/10/8.
 */
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
  let errors = {};

  if(Validator.isEmpty(data.username)){
    errors.username = 'This field is required';
  }
  if(Validator.isEmpty(data.email)){
    errors.email = 'This field is required';
  }
  if(!Validator.isEmail(data.email)){
    errors.email = 'This email is invalid';
  }
  if(Validator.isEmpty(data.password)){
    errors.password = 'This field is required';
  }
  if(Validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'This field is required';
  }
  if(!Validator.equals(data.password,data.passwordConfirmation)){
    errors.passwordConfirmation = 'password must match';
  }
  return {
    errors,
    isValid:isEmpty(errors)
  }
}