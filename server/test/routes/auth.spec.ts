import supertest from 'supertest';
import should from 'should';

describe('Auth Router', function () {
  const request = supertest.agent('http://localhost:4000/api/auth');

  const email = 'test';
  const password = 'test';
  const nickname = 'test';

  context('POST: /signup', () => {
    it('신규 회원가입이 성공하면 사용자 정보를 응답한다.', async () => {
      const now = new Date();
      const email = `test@${now.getTime()}.test`;
      const password = 'test';
      const nickname = now.toString();
      const response = await request.post('/signup').send({
        email,
        password,
        nickname,
      });

      should(response.status).equal(200);
      should(response.body).has.properties([
        'id',
        'email',
        'nickname',
        'createdAt',
        'updatedAt',
      ]);
      should(response.body).not.has.property('password');
      should(response.body.email).equal(email);
      should(response.body.nickname).equal(nickname);

      await request
        .post('/login')
        .send({ email, password })
        .then((response) => {
          should(response.status).is.true;
        });

      await request.delete(`/withdraw/${response.body.id}`).then((response) => {
        should(response.body).is.true;
      });
    });

    it('이미 존재하는 아이디로 회원가입을 시도하면 400을 응답한다.', async () => {
      const response = await request
        .post('/signup')
        .send({ email, password, nickname });

      should(response.status).equal(400);
    });
  });

  context('POST: /login', () => {
    it('로그인을 성공하면 사용자 정보를 응답한다.', async () => {
      const response = await request.post('/login').send({ email, password });

      should(response.body).has.properties([
        'id',
        'email',
        'nickname',
        'createdAt',
        'updatedAt',
      ]);

      await request.post('/logout');
    });

    it('아이디 / 비밀번호가 틀리면 400을 응답한다.', async () => {
      const response = await request
        .post('/login')
        .send({ email: 'wrong email', password: 'wrong password' });

      should(response.status).equal(400);
    });
  });

  context('POST: /logout', () => {
    it('로그아웃이 성공하면 쿠기가 제거된다.', async () => {
      await request.post('/login').send({ email, password });

      const logoutResponse = await request.post('/logout');

      should(logoutResponse.header['set-cookie'][0]).equal(
        'AUTH_TOKEN=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      );
    });
  });

  context('DELETE: /withdraw/:userId', () => {
    it('탈퇴가 성공하면 true를 응답받는다.', async () => {
      const email = 'auth-withdraw-test';
      await request.post('/signup').send({ email, password, nickname });

      const loginResponse = await request
        .post('/login')
        .send({ email, password });

      const withdrawResponse = await request.delete(
        `/withdraw/${loginResponse.body.id}`
      );

      should(withdrawResponse.body.data).is.true;
    });
  });

  context('GET: /me', () => {
    it('로그인 상태에서 내 정보를 응답한다.', async () => {
      await request.post('/login').send({ email, password });

      const response = await request.get('/me');

      should(response.body).has.properties([
        'id',
        'email',
        'nickname',
        'createdAt',
        'updatedAt',
      ]);

      await request.post('/logout');
    });

    it('로그아웃 상태에서 ', async () => {
      const response = await request.get('/me');

      should(response.status).equal(400);
    });
  });
});
