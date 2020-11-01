'use strict';
/**
 * @test:name        @archivistnerd/testLib/test
 * @test:package     testLib
 * @test:licence     MIT
 * @test:copyright   Copyright (c) 2020 Archivist-Nerd
 */
require('../.')
        /**
         * @test:attempt      tests testlib.add
         */
        .add(
          'testlib.add( name, testFn, resultTestFn)',
          ()      => ({ works: true }),
          (result)=> (result.works==true)
        )

        .exec();