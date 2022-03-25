import { invertirString, revertString2 } from './invertStr';

describe('it tests inverString fn', () => {
  // test('returns an inverted string')
  it('returns an inverted string', () => {
    const result = invertirString('hola');

    expect(result).toBe('aloh');

  });

  test('when param is not a string', () => {
    // expect(result).toBe(undefined);
    //Numero
    expect(invertirString(2))
      .toBeUndefined();

    //Objeto
    expect(invertirString({}))
      .toBeUndefined();

    //Array
    expect(invertirString([]))
      .toBeUndefined();

    //no param
    expect(invertirString())
      .toBeUndefined();

    //null param
    expect(invertirString(null))
      .toBeUndefined();
  });

  it('works with error', () => {
    const result = invertirString('hi');
    expect(result !== "ih").toBeFalsy();
  });
});

describe('it test revertString2 fn', () => {
  it('returns an inverted string', () => {
    const result = revertString2('hola');
    expect(result).toBe('aloh');
  });
});