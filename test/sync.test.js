import { format, deepCopy, deepCopy2, testCount } from '../common';

test('format', () => {
    expect(format()).toBe('')

    // expect(format(12)).toBe('12')
    // expect(format(12, 3)).toBe('012')
    expect(format('123', 5)).toBe('00123')
    expect(format('123', 5, 'x')).toBe('xx123')
    expect(format('123', 5, 'x', 'r')).toBe('123xx')

    //toHaveLength
    expect(format('123', 5, 'x', 'r')).toHaveLength(5)


    //测试异常是否正确抛出，必须使用一个函数将将被测试的函数做一个包装
    function formatFn() {
        format(3);
    }
    expect(formatFn).toThrow('"format"第一个参数只接受字符串');
})

test('deepCopy', () => {
    expect(deepCopy('1')).toBe('1')
    let ary = [1, 2, 3]

    //返回的对象内存地址不同，用===比较 toBe
    expect(deepCopy(ary)).not.toBe(ary)

    //返回的对象深度相同 toEqual
    expect(deepCopy(ary)).toEqual(ary)

    let obj = { m: 1, n: 2, ary: [1, 2, 3], per: { name: 'hud' } }
    expect(deepCopy(obj)).not.toBe(obj)
    expect(deepCopy(obj)).toEqual(obj)

    expect(deepCopy2(obj)).not.toBe(obj)
    expect(deepCopy2(obj)).toEqual(obj)
})

describe('被调用次数', () => {
    test('testCount', () => {
        let fn = jest.fn()
        testCount(fn, [2, 3, 4])
        expect(fn).toHaveBeenCalledTimes(3)
    })
})