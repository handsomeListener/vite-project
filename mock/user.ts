export default [
	{
		url: '/api/user/info',
		method: 'GET',
		response: () => {
			return {
				code: 200,
				data: {
					username: 'test',
					password: 'test123'
				}
			}
		}
	}
]