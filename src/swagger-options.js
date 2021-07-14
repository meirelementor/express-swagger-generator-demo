const { HOST, PORT } = process.env;

const options = {
	swaggerDefinition: {
		info: {
			description: 'This is a sample server',
			title: 'Swagger',
			version: '1.0.0',
		},
		host: `${HOST}:${PORT}`,
		basePath: '/v1',
		produces: ['application/json'],
		accepts: ['application/x-www-form-urlencoded', 'application/json'],
		schemes: ['http', 'https'],
		securityDefinitions: {
			JWT: {
				type: 'apiKey',
				in: 'header',
				name: 'Authorization',
				description: '',
			},
		},
	},
	basedir: __dirname, //app absolute path
	files: ['./routes/*.js'], //Path to the API handle folder
};

module.exports = options;
