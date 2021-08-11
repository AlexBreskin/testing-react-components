describe('Jest Async', () => {
    it('should work for functions that explicitly return a promise', () => {
        return Promise.resolve(1 + 1).then((v) => expect(2).toBe(v));
    });
    it('should work for functions that explicitly return a promise', async () => {
        await Promise.resolve(1 + 1).then((v) => expect(2).toBe(v));
    });
    it('should work for functions that explicitly return a promise (2)', () => {
        return expect(Promise.resolve(1 + 1)).resolves.toBe(2);
    });
    it('should work for async functions', async () => {
        return expect(Promise.resolve(1 + 1)).resolves.toBe(2);
    });
});