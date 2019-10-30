import {GET, RouterList} from '../../../app/decorator/router.decorator'
import * as assert from 'assert';

describe('test/app/decorator/router.decorator', () => {
  describe('GET', () => {
    it('@GET', () => {
      RouterList.splice(0, RouterList.length)
      class TestClass {
        @GET
        public testMethod () {}
      }
      new TestClass()
      assert(RouterList.length && RouterList[0])
      assert(RouterList[0].url === '')
      assert(RouterList[0].action === 'testMethod')
      assert(RouterList[0].controller)
      assert(!RouterList[0].params)
      assert(RouterList[0].method === 'get')
    })
    it('@GET()', () => {
      RouterList.splice(0, RouterList.length)
      class TestClass {
        @GET()
        public testMethod () {}
      }
      new TestClass()
      assert(RouterList.length && RouterList[0])
      assert(RouterList[0].url === '')
      assert(RouterList[0].action === 'testMethod')
      assert(RouterList[0].controller)
      assert(!RouterList[0].params)
      assert(RouterList[0].method === 'get')
    })
    it('@GET("/path")', () => {
      RouterList.splice(0, RouterList.length)
      class TestClass {
        @GET('/path')
        public testMethod () {}
      }
      new TestClass()
      assert(RouterList.length && RouterList[0])
      assert(RouterList[0].url === '/path')
      assert(RouterList[0].controller)
      assert(!RouterList[0].params)
      assert(RouterList[0].method === 'get')
    })
    it('@GET(["id", "param"])', () => {
      RouterList.splice(0, RouterList.length)
      class TestClass {
        @GET(['id', 'param'])
        public testMethod () {}
      }
      new TestClass()
      assert(RouterList.length && RouterList[0])
      assert(RouterList[0].url === '')
      assert(RouterList[0].controller)
      assert(RouterList[0].params && RouterList[0].params[0] === 'id' && RouterList[0].params[1] === 'param')
      assert(RouterList[0].method === 'get')
    })
    it('@GET("/urlPath", ["id", "param"])', () => {
      RouterList.splice(0, RouterList.length)
      class TestClass {
        @GET('/urlPath', ['id', 'param'])
        public testMethod () {}
      }
      new TestClass()
      assert(RouterList.length && RouterList[0])
      assert(RouterList[0].url === '/urlPath')
      assert(RouterList[0].controller)
      assert(RouterList[0].params && RouterList[0].params[0] === 'id' && RouterList[0].params[1] === 'param')
      assert(RouterList[0].method === 'get')
    })
  })
})
