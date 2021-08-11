
describe('Jest Mocking', () => {
    it('should record function calls', ()=>{
        const handler = jest.fn();

        handler(1,2,3);
        handler('a');

        expect(handler.mock.calls).toEqual([
            [1,2,3],
            ['a']
        ]);
    });

    it('should support an implementation', ()=>{
        const f = jest.fn((a,b) => a + b);
        expect(f(4,8)).toBe(12);
        expect(f.mock.calls).toEqual([
            [4,8]
        ]);
        expect(f.mock.results).toEqual([{
            type: "return",
            value: 12
        }]);
    });

    it('should support fixed results', () => {
        const f = jest.fn();
        f.mockReturnValueOnce(12).mockReturnValue(0);
        expect(f()).toBe(12);
        expect(f()).toBe(0);
        expect(f()).toBe(0);
    });
});