import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rotas do teams', () => {
   let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves([
        {
            "id": 1,
            "teamName": "Avaí/Kindermann"
        },
        {
            "id": 2,
            "teamName": "Bahia"
        },
        {
            "id": 3,
            "teamName": "Botafogo"
        },
        {
            "id": 4,
            "teamName": "Corinthians"
        },
        {
            "id": 5,
            "teamName": "Cruzeiro"
        },
        {
            "id": 6,
            "teamName": "Ferroviária"
        },
        {
            "id": 7,
            "teamName": "Flamengo"
        },
        {
            "id": 8,
            "teamName": "Grêmio"
        },
        {
            "id": 9,
            "teamName": "Internacional"
        },
        {
            "id": 10,
            "teamName": "Minas Brasília"
        },
        {
            "id": 11,
            "teamName": "Napoli-SC"
        },
        {
            "id": 12,
            "teamName": "Palmeiras"
        },
        {
            "id": 13,
            "teamName": "Real Brasília"
        },
        {
            "id": 14,
            "teamName": "Santos"
        },
        {
            "id": 15,
            "teamName": "São José-SP"
        },
        {
            "id": 16,
            "teamName": "São Paulo"
        }
    ] as Teams[]);
  });

  after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('resposta do get/teams', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/teams')

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.be.an('array')
    expect(chaiHttpResponse.body).to.be.not.empty;

  });
});

describe('Testando rotas do teams por Id', () => {
    let chaiHttpResponse: Response;
 
   before(async () => {
     sinon
       .stub(Teams, "findOne")
       .resolves(
         {
            "id": 1,
            "teamName": "Avaí/Kindermann"
         } as Teams);
   });
 
   after(()=>{
     (Teams.findOne as sinon.SinonStub).restore();
   })
 
   it('resposta do get/teams/id', async () => {
     chaiHttpResponse = await chai
        .request(app).get('/teams/1')
 
     expect(chaiHttpResponse.status).to.be.equal(200)
     expect(chaiHttpResponse.body).to.be.an('object')
     expect(chaiHttpResponse.body).to.be.not.empty;
 
   });
 });
