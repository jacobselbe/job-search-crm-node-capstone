'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const {app, runServer, closeServer} = require('../server');

chai.use(chaiHttp);

describe('server', function () {
    
    before(function () {
        return runServer();
    });

    after(function () {
        return closeServer();
    });

    it('should return return status 200 and html', function () {
        return chai
            .request(app)
            .get('/')
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;//should this be json?
            });
    });
});