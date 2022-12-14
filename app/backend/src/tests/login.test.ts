import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando o login', () => {
   let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves({
         username: 'Admin',
         role: 'admin',
         email: 'admin@admin.com',
         password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
      } as Users);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('resposta do post/login', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login')
       .send({
        email: 'admin@admin.com',
        password: 'secret_admin'
       })

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.have.property('token')

  });

  it('resposta get/login/validate', async () => {
    const responseLogin = await chai.request(app).post('/login').send({
      email: "admin@admin.com",
      password: "secret_admin"
    });

    chaiHttpResponse = await chai
    .request(app).get('/login/validate').set('Authorization', responseLogin.body.token);

 expect(chaiHttpResponse.status).to.be.equal(200)
 expect(chaiHttpResponse.body).to.have.property('role')
  })
});
