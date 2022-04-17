import { mock } from 'configurations/axios-mock-adapter';
import database from 'core/fake-api/database';
import jwt from 'jsonwebtoken';

const jwtConfig = {
	secret: 'super duper secret key for jwt',
	refreshSecret: 'super duper secret key for jwt refresh token',
	expireTime: '10m',
	refreshExpireTime: '30m'
};

mock.onPost('/account/login').reply((req) => {
	const { username, password } = JSON.parse(req.data);

	const user = database.accounts.find((user) => user.username === username);

	if (user) {
		try {
			if (user.password !== password) return [400, {}];

			const token = jwt.sign(
				{ id: user.id, role: user.role },
				jwtConfig.secret,
				{
					expiresIn: jwtConfig.expireTime
				}
			);
			const refreshToken = jwt.sign(
				{ id: user.id, role: user.role },
				jwtConfig.refreshSecret,
				{
					expiresIn: jwtConfig.refreshExpireTime
				}
			);

			const response: {
				[key: string]: any;
			} = {
				...user,
				token,
				refreshToken
			};

			delete response.password;

			return [200, response];
		} catch (err) {
			return [500, {}];
		}
	}

	return [404, {}];
});

mock.onGet('/account/info').reply((req) => {
	const { headers } = req;

	try {
		const token = headers?.Authorization.toString().split(' ').at(-1);

		if (!token) return [404, {}];

		const tokenData = jwt.verify(token, jwtConfig.secret);

		if (tokenData) return [200, tokenData];
	} catch (err) {
		return [500, err];
	}

	return [404, {}];
});

mock.onPost('/account/register').reply((req) => {
	const { username, password } = JSON.parse(req.data);

	if (
		database.accounts.find((acc) => acc.username === username) ||
		username === ''
	)
		return [400, {}];

	try {
		const prevId = database.accounts.at(-1)?.id;

		const newUser = {
			id: prevId ? prevId + 1 : 0,
			role: 'user',
			username
		};

		database.accounts.push({ ...newUser, password });
		return [201, newUser];
	} catch (err) {
		return [500, err];
	}
});
