var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Me', () => {
    it('returns "Susan"', () => {
      expect(index.Me).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the Me and height', () => {
      expect(index.message).toInclude(index.Me)
      expect(index.message).toInclude(index.height)
    })
  })

})

