import { isEmail } from '@/core/validators/functions/isEmail';

describe('src - core - validators - functions - iEmail', () => {
    test('TEST isEmail function, SHOULD return true when input is valid', async () => {
        // GIVEN
        const input = 'email@email.com';

        // WHEN
        const result = isEmail(input)

        // THEN
        expect(result).toBe(true);
    });

    test('TEST isEmail function, SHOULD return true when input is invalid', async () => {
        // GIVEN
        const input = 'email@@email.com';

        // WHEN
        const result = isEmail(input)

        // THEN
        expect(result).toBe(false);
    });
});
