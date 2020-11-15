'use strict'

import chai from 'chai'
import chaiHttp from 'chai-http'
import 'mocha'
import app from '../../src/app'
import NasaImageData from '../../src/model/nasaImageData'

chai.use(chaiHttp)

const expect = chai.expect

const image: NasaImageData = {
  imageDate: '2020-11-14T23:37:47.641Z',
  imageUrl: 'https://api.nasa.gov/planetary/earth/imary?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.05'
}

describe('imageRoute', () => {
  it('should respond with HTTP 404 status because there is no params', async () => {
    return chai
      .request(app)
      .get(`/image`)
      .then(res => {
        expect(res.status).to.be.equal(404)
      })
  })
})