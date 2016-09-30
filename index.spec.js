var expect = require('chai').expect;
var lamdalocal = require('lambda-local');
var path = require('path');

describe ('index.spec.js', function () {

    it('should pass', function (done) {

        var jsonPayLoad = {
            'key1': 'value1',
            'key2': 'value2',
            'key3': 'value3'
        };

        var lambdaPath = path.join(__dirname, './index.js');

        var testJson = {
            event: jsonPayLoad,
            lambdaPath: lambdaPath,
            callback: function (err, data) {

                expect(err).to.equal(null);
                expect(data).to.equal('Hello World!');
                done();
            }
        };

        lamdalocal.execute(testJson);
    });

});