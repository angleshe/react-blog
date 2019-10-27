import * as Utils from '../../../app/utils/utils'
import assert = require('power-assert')

describe('test/app/utils/utils', () => {
  describe('type test', () => {
    const testData = {
      stringTest1: 'asd',
      stringTest2: '',
      stringTest3: new String(),
      numberTest1: 1,
      numberTest2: Infinity,
      numberTest3: -2,
      numberTest4: 0,
      numberTest5: NaN,
      numberTest6: new Number(),
      objectTest1: {
        a: 1
      },
      objectTest2: {},
      objectTest3: new Object(),
      booleanTest1: true,
      booleanTest2: false,
      booleanTest3: new Boolean(),
      functionTest1: a => a,
      functionTest2: () => void 0,
      functionTest3: async () => 0,
      arrayTest1: [1, '2', { a: 'test' }, false],
      arrayTest2: new Array(),
      arrayTest3: []
    }
    const testKeys: string[] = Object.keys(testData)
    describe('isArray', () => {
      it('should exit', () => {
        assert(Utils.isArray)
      })
      testKeys.forEach((item: string) => {
        it (testData[item].toString(), () => {
          let res = Utils.isArray(testData[item])
          assert(/^arrayTest\d+$/.test(item) ? res : !res)
        })
      })
    })
    describe('isObject', () => {
      it('should exit', () => {
        assert(Utils.isObject)
      })
      testKeys.forEach((item: string) => {
        it (testData[item].toString(), () => {
          let res = Utils.isObject(testData[item])
          assert(/^objectTest\d+$/.test(item) ? res : !res)
        })
      })
    })
  })
})