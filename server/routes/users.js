/**
 * Created by meng on 2016/9/30.
 */
import express from 'express';
import commonValidations from '../shared/validations/signup'
import User from '../models/user';
import {
	aesEncrypt
} from '../shared/hash';
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

function validateInput(data, otherValidations) {
	let {
		errors
	} = otherValidations(data);

	return User.findOne({
		where: {
			$or: [{
				email: data.email
			}, {
				username: data.username
			}]
		}
	}).then(user => {
		if (user) {
			if (user.get('username') === data.username) {
				errors.username = 'There is user with such username';
			}
			if (user.get('email') === data.email) {
				errors.email = 'There is user with such email';
			}
		}

		return {
			errors,
			isValid: isEmpty(errors)
		}
	});
	//use promise
	/*return Promise.all([
		User.findAll({
			where: {
				email: data.email
			}
		}).then(user => {
			if (user.length !== 0) {
				errors.email = 'There is user with such email';
			}
		}),
		User.findAll({
			where: {
				username: data.username
			}
		}).then(user => {
			if (user.length !== 0) {
				errors.username = 'There is user with such username';
			}
		})
	]).then(() => {
		return {
			errors,
			isValid: isEmpty(errors)
		}
	})*/
}

router.get('/:indentifier', (req, res) => {
	//do not use promise
	User.findOne({
		attributes: ['username', 'email'],
		where: {
			$or: [{
				email: req.params.indentifier
			}, {
				username: req.params.indentifier
			}]
		}
	}).then(user => {
		res.json({
			user
		});
	})
})

router.post('/', (req, res) => {
	validateInput(req.body, commonValidations).then(({
		errors,
		isValid
	}) => {
		if (isValid) {
			const {
				username,
				password,
				timezone,
				email
			} = req.body;
			const passworld_digest = aesEncrypt(password, 'key10');
			User.create({
				username,
				passworld_digest,
				timezone,
				email
			}).then(user => res.json({
				success: true
			}))
		} else {
			res.status(400).json(errors);
		}
	})
});

export default router;