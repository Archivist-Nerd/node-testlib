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
 * @api:Returns     Object
 *                        add   ( name, testFn, resultTestFn )
 *                        exec  ()
 */
const write   = txt=>process.stdout.write(txt)
    , writeln = txt=>process.stdout.write(txt+'\n')
    ;

module.exports = ( ()=>{
  let tests = []
    , results = []
    ;
  /**
   * @api:name    describe    
   * @api:group   functions
   *
   * @api:Param   {String}    Name or Description of test.
   * @api:Param   {Function}  test function code
   *
   * @api:Example:
   *      testlib.describe(
   *                  'Simple testLib.add( name, testFn=()=>false, resultTestFn=()=>false)',
   *                  ()=>{
   *                    it('Should return true', (done)=>{
   *                      done()
   *                    })
   *                  }
   *              );
   */
  function describe( description, fn){
    let tests = 0
      , fails = 0
      , test  = {
                  group: description,
                  failed: []
                }
      ;
    if (typeof name == undefined || typeof fn != 'function') return results
    write(`\n${description}\n`)
    /**
     * @api:name    describe.it    
     * @api:group   functions
     *
     * @api:Param   {String}    Name or Description of test.
     * @api:Param   {Function}  test function code
     *
     * @api:Returns {Array}     array of strings. 1 for each failed test
     *
     * @api:Example:
     *      it('Should return true', (done)=>{
     *        done()
     *      });
     */
    function it( _description, fn){
      if (typeof name == undefined || typeof fn != 'function') return false
      tests++
      let result = fn()
      if (result !== true) {
        fails++
        test.failed.push(`#${tests} ${_description}`)
      }
      write(`${result? ' ':'x'}  #${tests} ${_description}\n`)
    }

    fn(it)

    if (fails==0) return results

    writeln(`\n   ${test.failed.length} failed tests`)
    test.failed.forEach( rec=>write(`     ${rec}\n`) )
    results.push( test )

    return results
  }
  /**
   * @api:name    add  Adds a new test to the list of tests to run
   * @api:group   functions
   *
   * @api:Param   {String}    Name or Description of test.
   * @api:Param   {Function}  test function code
   * @api:Param   {Function}  function to test result, returns true if successful
   *
   * @api:Example:
   *      testlib.add(
   *                  'Simple testLib.add( name, testFn=()=>false, resultTestFn=()=>false)',
   *                  ()       => ({ works: true }),
   *                  (result) => (result.works==true)
   *              );
   */
  function add( name, testFn=()=>false, resultTestFn) {
    if (typeof name == undefined) return false
    tests.push({
      name,
      testFn,
      resultTestFn,
    })
    return this
  }
  /**
   * @api:name    exec  Executes all tests that have been added
   * @api:group   functions
   *
   * @api:Example:
   *      testlib.exec();
   */
  function exec() {
    if (tests.length==0) return false

    tests.every( test=>{
      let result  = test.testFn()
        , success = (typeof test.resultTestFn != 'function')? result:test.resultTestFn( result )
        ;
      test.success = success? 'success ':'fail     '
      console.log( `${test.success}\t${test.name}` )
      return success
    })
    return this
  }
  /**
   * @api:Returns     Object
   *                        add         ( name, testFn, resultTestFn )
   *                        describe    ( description, {function} )
   *                        exec        ()
   */
  return {
    add,
    exec,
    describe,
  }
})();