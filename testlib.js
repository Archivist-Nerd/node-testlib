'use strict';
/**
 * @api             testlib
 * @api:npm         @archivistnerd/testLib
 * @api:git         https://github.com/Archivist-Nerd/node-testLib
 * @api:Licence     MIT
 * @api:Copyright   Copyright (c) 2020 Archivist-Nerd
 */
const write   = txt=>process.stdout.write(txt)
    , writeln = txt=>process.stdout.write(txt+'\n')
    ;

module.exports = ( ()=>{
  let tests = []
    , results = []
    ;
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

  function add( name, testFn=()=>false, resultTestFn) {
    if (typeof name == undefined) return false
    tests.push({
      name,
      testFn,
      resultTestFn,
    })
    return this
  }

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

  return {
    add,
    exec,
    describe,
  }
})();