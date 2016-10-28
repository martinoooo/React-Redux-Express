/**
 * Created by meng on 2016/10/8.
 */
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'This field is identifier';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}