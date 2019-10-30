#### 出处：https://juejin.im/post/5b6c39bde51d45195c079d62

## globals API ##
- describe(name, fn)：描述块，讲一组功能相关的测试用例组合在一起
- it(name, fn, timeout)：别名test，用来放测试用例
- afterAll(fn, timeout)：所有测试用例跑完以后执行的方法
- beforeAll(fn, timeout)：所有测试用例执行之前执行的方法
- afterEach(fn)：在每个测试用例执行完后执行的方法
- beforeEach(fn)：在每个测试用例执行之前需要执行的方法

注：全局和describe都可以有上面四个周期函数，describe的after函数优先级要高于全局的after函数，describe的before函数优先级要低于全局的before函数

## jest对象

- jest.fn(implementation)：返回一个全新没有使用过的mock function，这个function在被调用的时候会记录很多和函数调用有关的信息
- jest.mock(moduleName, factory, options)：用来mock一些模块或者文件
- jest.spyOn(object, methodName)：返回一个mock function，和jest.fn相似，但是能够追踪object[methodName]的调用信息，类似Sinon

## 常见断言 ## 

- expect(value)：要测试一个值进行断言的时候，要使用expect对值进行包裹
- toBe(value)：使用Object.is来进行比较，如果进行浮点数的比较，要使用toBeCloseTo
- not：用来取反
- toEqual(value)：用于对象的深比较
- toMatch(regexpOrString)：用来检查字符串是否匹配，可以是正则表达式或者字符串
- toContain(item)：用来判断item是否在一个数组中，也可以用于字符串的判断
- toBeNull(value)：只匹配null
- toBeUndefined(value)：只匹配undefined
- toBeDefined(value)：与toBeUndefined相反
- toBeTruthy(value)：匹配任何使if语句为真的值
- toBeFalsy(value)：匹配任何使if语句为假的值
- toBeGreaterThan(number)： 大于
- toBeGreaterThanOrEqual(number)：大于等于
- toBeLessThan(number)：小于
- toBeLessThanOrEqual(number)：小于等于
- toBeInstanceOf(class)：判断是不是class的实例
- anything(value)：匹配除了null和undefined以外的所有值
- resolves：用来取出promise为fulfilled时包裹的值，支持链式调用
- rejects：用来取出promise为rejected时包裹的值，支持链式调用
- toHaveBeenCalled()：用来判断mock function是否被调用过
- toHaveBeenCalledTimes(number)：用来判断mock function被调用的次数
- assertions(number)：验证在一个测试用例中有number个断言被调用
- extend(matchers)：自定义一些断言

### 三种渲染方法

- shallow：浅渲染，是对官方的Shallow Renderer的封装。将组件渲染成虚拟DOM对象，只会渲染第一层，子组件将不会被渲染出来，使得效率非常高。不需要DOM环境， 并可以使用jQuery的方式访问组件的信息
- render：静态渲染，它将React组件渲染成静态的HTML字符串，然后使用Cheerio这个库解析这段字符串，并返回一个Cheerio的实例对象，可以用来分析组件的html结构
- mount：完全渲染，它将组件渲染加载成一个真实的DOM节点，用来测试DOM API的交互和组件的生命周期。用到了jsdom来模拟浏览器环境

三种方法中，shallow和mount因为返回的是DOM对象，可以用simulate进行交互模拟，而render方法不可以。一般shallow方法就可以满足需求，如果需要对子组件进行判断，需要使用render，如果需要测试组件的生命周期，需要使用mount方法。

### 常用方法

- simulate(event, mock)：模拟事件，用来触发事件，event为事件名称，mock为一个event object
- instance()：返回组件的实例
- find(selector)：根据选择器查找节点，selector可以是CSS中的选择器，或者是组件的构造函数，组件的display name等
- at(index)：返回一个渲染过的对象
- get(index)：返回一个react node，要测试它，需要重新渲染
- contains(nodeOrNodes)：当前对象是否包含参数重点 node，参数类型为react对象或对象数组
- text()：返回当前组件的文本内容
- html()： 返回当前组件的HTML代码形式
- props()：返回根组件的所有属性
- prop(key)：返回根组件的指定属性
- state()：返回根组件的状态
- setState(nextState)：设置根组件的状态
- setProps(nextProps)：设置根组件的属性