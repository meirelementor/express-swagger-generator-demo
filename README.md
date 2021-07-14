## Example of how to use [express-swagger-generator](https://www.npmjs.com/package/express-swagger-generator) package

The `express-swagger-generator` creates for you the `swagger` documentation. You only need to add `jsdoc` documentation above each route.

### Important files ⚠️:
- [swagger-options.js](./src/swagger-options.js)
- [app.js](./src/app.js)
- [example.js](./src/routes/example.js)

### To see the `swagger` result:
- `cp .env.example .env`
- install dependencies with `npm install`
- run with `npm start`
- open [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

### Environment Variables
```bash
HOST=localhost
PORT=8080
```
