import test from 'ava';
import request from 'supertest';
import app from '../server';
import sinon from 'sinon';
import userCtrl from '../userCtrl';

var sandbox = sinon;
test.before(() => {
  let stub = sandbox.stub(userCtrl, 'readAll')

  stub.withArgs().returns([{id: 1, first_name: 'foo'}]);

  stub = sandbox.stub(userCtrl, 'findUserById')

  stub.withArgs(1).returns({id: 1, first_name: 'foo'})

  stub = sandbox.stub(userCtrl, 'getUsersByFavorite')

  stub.withArgs('chocolate').returns([{id:1, favorites: ['chocolate']}])

  stub = sandbox.stub(userCtrl, 'getAdmins')

  stub.withArgs().returns([{id: 2, first_name: 'foo', type: 'admin'}])

  stub = sandbox.stub(userCtrl, 'getNonAdmins')

  stub.withArgs().returns([{id: 1, first_name: 'bar', type: 'user'}])

  stub = sandbox.stub(userCtrl, 'updateUser')

  stub.withArgs(1, {first_name: 'foo'}).returns({id: 1, first_name: 'foo'})

  stub = sandbox.stub(userCtrl, 'createUser')

  stub.withArgs(
    {
      first_name:'foo',
      last_name: 'bar',
      email: 'an@email.com',
      gender: 'unknown',
      language: 'english',
      age: 12,
      city: 'Amsterdam',
      state: 'Nebraska',
      type: 'admin',
      favorites: ['chocolate']
    }).returns(
      {
        id: 1,
        first_name:'foo',
        last_name: 'bar',
        email: 'an@email.com',
        gender: 'unknown',
        language: 'english',
        age: 12,
        city: 'Amsterdam',
        state: 'Nebraska',
        type: 'admin',
        favorites: ['chocolate']
      }
    )

    stub = sandbox.stub(userCtrl, 'removeUser')

    stub.withArgs(1).returns({id: 1, first_name: 'foo', type: 'admin'})

})

test.after.always(() => sandbox.restore())

test('GET: /api/users', async t => {
  let res = await request(app)
    .get('/api/users')
    .expect(200)

  t.true(Array.isArray(res.body));

  res = res.body[0];

  t.is(res.id, 1);
  t.is(res.first_name, 'foo');
})

test('GET: /api/users/ + userId', async t => {
  let res = await request(app)
    .get('/api/users/1')
    .expect(200)

  t.true(typeof res.body === 'object');
  t.true(!Array.isArray(res.body));

  res = res.body;
  t.is(res.id, 1);
  t.is(res.first_name, "foo");
})

test('GET: /api/admins', async t => {
  let res = await request(app)
    .get('/api/admins')
    .expect(200)

  t.true(Array.isArray(res.body));

  res = res.body[0];

  t.is(res.id, 2);
  t.is(res.first_name, "foo");
  t.is(res.type, "admin");
})

test('GET: /api/nonadmins', async t => {
  let res = await request(app)
    .get('/api/nonadmins')
    .expect(200)

  t.true(Array.isArray(res.body));

  res = res.body[0];

  t.is(res.id, 1);
  t.is(res.first_name, "bar");
  t.is(res.type, "user");
})

test('PUT: /api/users/ + userId', async t => {
  let res = await request(app)
    .put('/api/users/1')
    .send({'first_name': 'foo'})
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)

    t.true(typeof res.body === 'object');
    t.true(!Array.isArray(res.body));

  res = res.body;

  t.is(res.id, 1);
  t.is(res.first_name, "foo");
})

test('POST: /api/users/', async t => {
  let res = await request(app)
    .post('/api/users')
    .send({
      first_name:'foo',
      last_name: 'bar',
      email: 'an@email.com',
      gender: 'unknown',
      language: 'english',
      age: 12,
      city: 'Amsterdam',
      state: 'Nebraska',
      type: 'admin',
      favorites: ['chocolate']
    })
    .expect(200)

    t.true(typeof res.body === 'object');
    t.true(!Array.isArray(res.body));


  res = res.body;

  t.is(res.id, 1);
  t.is(res.first_name, "foo");
  t.is(res.type, "admin");
})

test('DELETE: /api/users/ + userId', async t => {
  let res = await request(app)
    .delete('/api/users/1')
    .expect(200)

    t.true(typeof res.body === 'object');
    t.true(!Array.isArray(res.body));


  res = res.body;

  t.is(res.id, 1);
  t.is(res.first_name, "foo");
  t.is(res.type, "admin");
})
