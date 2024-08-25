import { isPureString, isPureStringAllowSpace, maxLength, minLength } from '@/core/validators/functions/stringFunctions';

describe('src / core / validators / functions / stringFunction', () => {
  test('TEST isPureString function, SHOULD return true when input does not contain special character', async () => {
    // GIVEN
    const input = 'hello';

    // WHEN
    const result = isPureString(input)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST isPureString function, SHOULD return false when input contains special character', async () => {
    // GIVEN
    const input = 'hello$';

    // WHEN
    const result = isPureString(input)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST isPureStringAllowSpace function, SHOULD return true when input does not contain special character', async () => {
    // GIVEN
    const input = 'hello ';

    // WHEN
    const result = isPureStringAllowSpace(input)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST isPureStringAllowSpace function, SHOULD return false when input does not contain special character', async () => {
    // GIVEN
    const input = 'hello$';

    // WHEN
    const result = isPureStringAllowSpace(input)

    // THEN
    expect(result).toBe(false);
  });


  test('TEST maxLength function, SHOULD return true when giving string length is lower than given max value', async () => {
    // GIVEN
    const input = 'hello';
    const max = 5;

    // WHEN
    const result = maxLength(input, max)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST maxLength function, SHOULD return false when giving string length is greater than given max value', async () => {
    // GIVEN
    const input = 'hellox';
    const max = 5;

    // WHEN
    const result = maxLength(input, max)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST maxLength function, SHOULD return false when giving value is undefined', async () => {
    // GIVEN
    const input = undefined;
    const max = 5;

    // WHEN
    const result = maxLength(input, max)

    // THEN
    expect(result).toBe(false);
  });


  test('TEST minLength function, SHOULD return true when giving string length is greater than given min value', async () => {
    // GIVEN
    const input = 'hello';
    const min = 5;

    // WHEN
    const result = minLength(input, min)

    // THEN
    expect(result).toBe(true);
  });

  test('TEST minLength function, SHOULD return false when giving string length is lower than given max value', async () => {
    // GIVEN
    const input = 'hell';
    const max = 5;

    // WHEN
    const result = minLength(input, max)

    // THEN
    expect(result).toBe(false);
  });

  test('TEST minLength function, SHOULD return false when giving value is undefined', async () => {
    // GIVEN
    const input = undefined;
    const max = 5;

    // WHEN
    const result = minLength(input, max)

    // THEN
    expect(result).toBe(false);
  });

});
