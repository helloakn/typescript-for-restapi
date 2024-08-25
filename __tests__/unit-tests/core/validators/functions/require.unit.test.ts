import { required } from '@/core/validators/functions/required';

describe('src / core / validators / functions / require', () => {
  test('TEST required function, SHOULD return true when input is not null', async () => {
    // GIVEN
    const input = 'hello';

    // WHEN
    const result = required(input)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST required function, SHOULD return false when input is null or undefined or empty string', async () => {
    // GIVEN
    const inputNull = null;
    const inputUndefined = null;
    const inputEmptyString = '';

    // WHEN
    const resultNull = required(inputNull);
    const resultUndefined = required(inputUndefined);
    const resultEmptyString = required(inputEmptyString);

    // THEN
    expect(resultNull).toBe(false);
    expect(resultUndefined).toBe(false);
    expect(resultEmptyString).toBe(false);
  });

});
