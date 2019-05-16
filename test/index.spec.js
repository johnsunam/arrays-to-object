const { convertArraysToObject } = require('../index.js');

describe('convert two arrays to single object', () => {
  it('should return object', () => {
    let result = convertArraysToObject(['firstKey', 'secondKey'], ['firstValue', 'secondValue']);
    expect(result).toEqual({'firstKey': 'firstValue', 'secondKey': 'secondValue'});
  })
})