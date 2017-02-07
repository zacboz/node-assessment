import test from 'ava';
import request from 'supertest';
import app from '../server';
import sinon from 'sinon';
import userCtrl from '../userCtrl';

let stub;
test.before(() => {
  stub = sinon.stub(userCtrl, 'readAll')

  stub.withArgs().returns([{id: 1, first_name: 'foo'}]);
})

test('GET: /api/users', async t => {
  let res = await request(app)
    .get('/api/users')
    .expect(200)
  
  t.true(Array.isArray(res.body));

  res = res.body[0];

  t.is(res.id, 1);
  t.is(res.first_name, 'foo');
})