'use strict';
/**
 * @test:name        @archivistnerd/testLib/test
 * @test:package     testLib
 * @test:licence     MIT
 * @test:copyright   Copyright (c) 2020 Archivist-Nerd
 */
require('../.')
        /**
         * @test:attempt      testlib.add
         */
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

        .exec();