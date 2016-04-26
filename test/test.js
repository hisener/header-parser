var supertest = require('supertest');
var assert = require('assert');

var server = supertest.agent('http://localhost:3000');

describe('Initial JSON object test', function() {

  it('should return json object contains ip, language and OS', function(done) {
    
    server
      .get('/api')
      .set('Accept-Language', 'tr-TR,tr;q=0.8,en-US;q=0.6,en;q=0.4')
      .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.86 Safari/537.36')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.equal(200, res.status);
        assert.notEqual(null, res.body.ipaddress);
        assert.notEqual(null, res.body.language);
        assert.notEqual(null, res.body.software);
        done();
      });
  });
});
