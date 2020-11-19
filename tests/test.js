'use strict';
/**
 * @test:name        @archivistnerd/testLib/test
 * @test:package     testLib
 * @test:licence     MIT
 * @test:copyright   Copyright (c) 2020 Archivist-Nerd
 */
//let describe = require('../src/testlib').describe
let describe = require('../.').describe
  ;
/**
 * @test:Group 1   testlib.v0.1.1 tests
 */
describe( 'test (add,exec)', it=>{
  let testLib = require('../.')
    ;

  it('test.add', ()=>{
    /**
     * @test:attempt      testlib.add
     */
    testLib
      .add(
        'testlib.add( name, testFn, resultTestFn)',
        ()      => ({ works: true }),
        (result)=> (result.works==true)
      )
      /**
       * @test:attempt      returns true so no need for resultTestFn
       */
      .add(
        'testlib.add( name, testFn )',
        ()      => true
      )
    return true
  })

  it('test.exec', ()=>{
    testLib.exec()
    return true
  })
});
/**
 * @test:Group 2   testlib.v0.1.2 tests
 */
describe( 'test (describe, it)', it=>{
  it('test-description', ()=>{
    return true
  })

  it('test-description 2', ()=>{
    return true
  })

  it('test-fail', ()=>{
    return false
  })

  it('test-fail (no return value)', ()=>{
  })
});
