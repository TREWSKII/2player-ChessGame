import test from 'ava';
import kova from './index';

test('test', t => {

  const object = {
    a: {
      b: {
        c: {
          d: 'CHANGE ME'
        }
      },
      e: 'CHANGE ME'
    }
  }

  t.deepEqual(kova(object, 'CHANGE ME', 'CHANGED'), {
    a: {
      b: {
        c: {
          d: 'CHANGED'
        }
      },
      e: 'CHANGED'
    }
  })

})
