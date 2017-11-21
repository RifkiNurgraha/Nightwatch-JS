const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const env = require('dotenv').config();

var api = supertest(process.env.API_BASE_URL_BO);
var common = require ('./../../../helper/common.js');

var customerSearchPath =  "/customer/search";

var getCustomerSearch = function(custSearch, description, describeIt, tokenSelection, response) {
    describe('eCart - GET /customer/search', function() {
      describe('#' + description, function() {
        it(describeIt, function(done) {
          api.get(customerSearchPath)
            .query({q: custSearch})
            .set('Authorization', common.bearer(tokenSelection))
            .set('Accept', 'application/json')
            .end(function(err, result) {
              response(result);
              done(err);
        })
      })
    })
  })
};

module.exports = {
  getCustomerSearch: getCustomerSearch
}
