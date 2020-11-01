'use strict';
/**
 * @api             testlib
 * @api:npm         @archivistnerd/testLib
 * @api:git         https://github.com/Archivist-Nerd/node-testLib
 * @api:Licence     MIT
 * @api:Copyright   Copyright (c) 2020 Archivist-Nerd
 *
 *
 * @api:Example:
 *      const testlib = require('@archivistnerd/testLib');
 *
 */
let TestLib = {
      tests: []
    }
  ;

TestLib.add = ( name, testFn=()=>false, resultTestFn=()=>false) => {
  if (typeof name == undefined) return false
  TestLib.tests.push({
    name,
    testFn,
    resultTestFn,
  })
  return TestLib
}

TestLib.exec = () => {
  if (TestLib.tests.length==0) return false

  TestLib.tests.every( test=>{
    let result  = test.testFn()
      , success = test.resultTestFn( result )
      ;
    test.success = success? 'success ':'fail     '
    console.log( `${success? 'success ':'fail     '}\t${test.name}` )
    return success
  })
  return TestLib
}
/**
 *     module export
 */
module.exports = TestLib;