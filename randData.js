'use strict'

const faker = require('faker')
const { buildArquitect } = require('./structure')

module.exports = function () {
  const headers = ['Name', 'Email', 'Product', 'Price']
  let data = []

  for (let i=0; i<100; i++) {
    const obj = {}
    obj['Name'] = faker.name.findName()
    obj['Email'] = faker.internet.email()
    obj['Product'] = faker.commerce.product()
    obj['Price'] = faker.commerce.price()
    data.push(obj)
  }

  const structure = buildArquitect(headers, data)
  return structure
}