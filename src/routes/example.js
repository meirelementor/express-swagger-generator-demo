const express = require('express');
const { exampleController } = require('../controllers');

const router = express.Router();

/**
 * @typedef Example
 * @property {string} foo.required
 * @property {string} bar.required
 */

/**
 * @typedef Error
 * @property {object[]} error
 */

/**
 * This route returns `Hello 🌍`
 * @route GET /hello
 * @group Demo - swagger generator demo
 * @returns {string} 200 - response message
 */
router.get('/hello', exampleController.getHello);

/**
 * This route returns the passed param
 * @route GET /with-param/{id}
 * @param {string} id.path.required
 * @group Demo - swagger generator demo
 * @returns {object} 200 - {id: param}
 */
router.get('/with-param/:id', exampleController.getParams);

/**
 * This route returns the passed param
 * @route GET /with-param-enum/{id}
 * @param {enum} id.path.required - available id's - eg: 1,2
 * @group Demo - swagger generator demo
 * @returns {object} 200 - {id: param}
 */
router.get('/with-param-enum/:id', exampleController.getParams);

/**
 * This route returns passed query
 * @route GET /with-query
 * @param {string} type.query.required
 * @group Demo - swagger generator demo
 * @returns {object} 200 - {type: string}
 */
router.get('/with-query', exampleController.getQuery);

/**
 * This route returns passed header
 * @route GET /with-special-header
 * @param {string} foo.header.required
 * @group Demo - swagger generator demo
 * @returns {object} 200 - {headers: ...}
 */
router.get('/with-special-header', exampleController.getHeaders);

/**
 * This route accepts x-www-form-urlencoded
 * @route POST /form
 * @group Demo - swagger generator demo
 * @param {string} foo.formData.required
 * @param {string} bar.formData.required
 * @produces application/json
 * @consumes application/x-www-form-urlencoded
 * @returns {Example.model} 200
 */
router.post('/form', exampleController.getBody);

/**
 * This route accepts json
 * @route POST /json
 * @group Demo - swagger generator demo
 * @param {Example.model} data.body
 * @produces application/json
 * @consumes application/json
 * @returns {Example.model} 200
 */
router.post('/json', exampleController.getBody);

/**
 * This route returns an error
 * @route GET /bad-request
 * @group Demo - swagger generator demo
 * @returns {Error.model} 400
 */
router.get('/bad-request', exampleController.getError);

/**
 * This route is secured with JWT
 * @route GET /secured
 * @group Demo - swagger generator demo
 * @returns {string} 200 - JWT
 * @returns {string} 401 - Unauthorized
 * @security JWT
 */
router.get('/secured', exampleController.getAuthorization);

module.exports.router = router;
