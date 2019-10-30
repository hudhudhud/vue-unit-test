import { fetchApple, debounce, getUser, } from '../common';

test('the data is apple', (done) => {
    expect.assertions(2)
    const callback = data => {
        expect(data).not.toBe('apple1')
        expect(data).toBe('apple')
        done()
    }
    fetchApple(callback)
})


test('debounce', (done) => {
    //验证当前测试中有 1 处断言会被执行，在测试异步代码时，能确保回调中的断言被执行。
    expect.assertions(1)
    let fun = (data) => {
        console.log(data)
        let res = data
        expect(res.res.name).toBe('hud')
        done()
    }

    //连续调两次，只打出一次结果
    debounce(fun)()
    debounce(fun)()

    // expect(fun).toHaveBeenCalledTimes(1)
})

//当对Promise进行测试时，一定要在断言之前加一个return，不然没有等到Promise的返回，测试函数就会结束;或者用done函数告诉用例什么时候结束
describe('getUser', () => {
    test('test with resolve', () => {
        return expect(getUser(1)).resolves.toEqual({ name: 'h' });
    })
    test('test error with reject', () => {
        return expect(getUser(3)).rejects.toEqual({ error: 'User with 3 not found.' });
    })

    test('test with promise', () => {
        return getUser(1).then(res => {
            expect(res.name).toBe('h');
        })
    })
    test('test error with promise', () => {
        return getUser(3).catch(res => {
            expect(res.error).toBe('User with 3 not found.');
        })
    })

    test('test with async', async() => {
        expect.assertions(1);
        let res = await getUser(1)
        expect(res.name).toBe('h');
    })

    //使用async不用进行return返回，并且要使用try/catch来对异常进行捕获。
    test('test error with async', async(done) => {
        try {
            await getUser(3)
        } catch (res) {
            expect(res.error).toBe('User with 3 not found.');
        }
        done()
    })
})