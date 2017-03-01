import trim from '../';

describe('trim', () => {
    it('should trim leading and trailing characters', () => {
        expect(trim('$$ test $$', 1))
            .toBe('$ test $');
        expect(trim('$$ test $$', 2))
            .toBe(' test ');
        expect(trim('$$ test $$', 3))
            .toBe('test');
    });
});
