import { isNumber } from '@/core/validators/functions/numberFunctions';

describe('src / core / validators / functions / numberFunctions', () => {
  test('TEST isNumber function, SHOULD return true when input is number', async () => {
    // GIVEN
    const input = 1;

    // WHEN
    const result = isNumber(input)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST isNumber function, SHOULD return true when input is not number', async () => {
    // GIVEN
    const input = '1/';

    // WHEN
    const result = isNumber(input)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST isNumber function, SHOULD return true when input is not number', async () => {
    // GIVEN
    const input = '1';

    // WHEN
    const result = isNumber(input)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST isNumber function, SHOULD return true when input is not number', async () => {
    // GIVEN
    const input = 'abcdefg';

    // WHEN
    const result = isNumber(input)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST isNumber function, SHOULD return true when input is not number', async () => {
    // GIVEN
    const input = '';

    // WHEN
    const result = isNumber(input)

    // THEN
    expect(result).toBe(false);
  });

});
