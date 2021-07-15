require('dotenv').config();
const express = require('express');
const expressSwagger = require('express-swagger-generator');
const routes = require('./routes');
const swaggerOptions = require('./swagger-options');

const PORT = process.env.PORT || 8080;

const app = express();
expressSwagger(app)(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(process.env.BASE_PATH, routes);

app.use((result, req, res, next) => {
	if (result instanceof Error) {
		switch (result.message) {
			case 'Unauthorized':
				return res.status(401).send('Unauthorized');
			default:
				return res.status(500).send('Internal Server Error');
		}
	}
	res.send(result);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
