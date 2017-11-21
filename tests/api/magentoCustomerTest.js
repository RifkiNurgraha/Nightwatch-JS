const should = require('chai').should();
const expect = require('chai').expect;
const common = require('./../helper/common.js');
var magentoCustomer = require('./../page-objects/api/magentoCustomer.js');

var magentoCustomerString = {
description: 'Magento Custoemr - Search by ID'
};

magentoCustomer.getCustomerDetail(4295, magentoCustomerString.description, 'OK', 'correct_token', function(response) {
    console.log("==============");
    console.log(response.status);
    expect(response.status).to.equal(20);
    expect(response.body.data[0].firstname).to.contain('PT Awal saha');
});
