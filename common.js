//同步函数
export function format(str = '', len, zero = '0', lorR = 'l') {
    let buStr = ''
    if (typeof str !== 'string') {
        throw Error('"format"第一个参数只接受字符串');
        // str = str + ''
    }
    if (str.length < len) {
        let zeroLen = len - str.length
        buStr = Array.from({ length: zeroLen }, () => { return zero }).join('')
    }
    return lorR === 'l' ? (buStr + str) : (str + buStr)
}

export function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {}
    let keys = Object.keys(obj) //对象自身所有可枚举的属性，不包括原型
    for (let key of keys) {
        result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
    return result
}

export function deepCopy2(source) {
    var result = Array.isArray(source) ? [] : {};
    for (var key in source) { //对象自身包括原型
        if (Object.prototype.hasOwnProperty.call(source, key)) { //只拷贝对象自身的属性
            result[key] = typeof source[key] === 'object' ? deepCopy2(source[key]) : source[key];
        }
    }
    return result;
}

export const testCount = (cb, arr) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}


//异步函数
export const fetchApple = (callback) => {
    setTimeout(() => callback('apple'), 500)
}

let timerId = null
export function debounce(cb) {
    return function() {
        if (timerId) clearTimeout(timerId)
        timerId = setTimeout(() => {
            cb({ res: { name: 'hud' } })
        }, 500);
    }
}

import axios from 'axios'

const users = {
    1: {
        name: 'h',
    },
    2: {
        name: 'd',
    },
};
export function getUser(id) {
    return new Promise((resolve, reject) => {
        if (users[id])
            resolve(users[id])
        else
            reject({ error: `User with ${id} not found.` })
    })

    // axios('http://jsonplaceholder.typicode.com/users/1')
    //     .then(res => res)
    //     .catch(error => console.log(error));
}