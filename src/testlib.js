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
/**
 * @api:name    add  Adds a new test to the list of tests to run
 * @api:group   functions
 *
 * @api:Param {String}   Name or Description of test.
 * @api:Param {Function} test function code
 * @api:Param {Function} function to test result, returns true if successful
 *
 * @api:Example:
 *      testlib.add(
 *                  'Simple testLib.add( name, testFn=()=>false, resultTestFn=()=>false)',
 *                  ()       => ({ works: true }),
 *                  (result) => (result.works==true)
 *              );
 */
TestLib.add = ( name, testFn=()=>false, resultTestFn=()=>false) => {
  if (typeof name == undefined) return false
  TestLib.tests.push({
    name,
    testFn,
    resultTestFn,
  })
  return TestLib
}
/**
 * @api:name    exec  Executes all tests that have been added
 * @api:group   functions
 *
 * @api:Example:
 *      testlib.exec();
 */
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
 *     export bargs variable
 */
module.exports = TestLib;