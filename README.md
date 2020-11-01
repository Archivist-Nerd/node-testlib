# node-testlib
[![npm version](https://img.shields.io/npm/v/@archivistnerd/testlib.svg)](https://www.npmjs.com/package/@archivistnerd/testlib)

Archivist nerd's testlib: A bare minimum node test suite

> A very small minimilistic test suite for node.

## Installation

```sh
npm install -g @archivistnerd/testlib
```

## Example

```javascript
require('@archivistnerd/testlib')
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
```

## License

MIT
