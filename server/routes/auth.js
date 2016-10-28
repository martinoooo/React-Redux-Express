import express from 'express';
import {
	aesDecrypt
} from '../shared/hash';
import jwt from 'jsonwebtoken'
import config from '../config';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
	const {
		identifier,
		password
	} = req.body;

	User.findOne({
		where: {
			$or: [{
				username: identifier
			}, {
				email: identifier
			}]
		}
	}).then(user => {
		if (user) {
			if (password === aesDecrypt(user.get('passworld_digest'), 'key10')) {
				const token = jwt.sign({
					id: user.get('id'),
					username: user.get('username')
				}, config.jwtSecret)
				res.json({
					token
				});
			} else {
				res.status(401).json({
					errors: {
						form: 'Invalid Credentials'
					}
				})
			}
		} else {
			res.status(401).json({
				errors: {
					form: 'Invalid Credentials'
				}
			})
		}
	})
});

export default router;