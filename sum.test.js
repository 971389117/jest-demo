import {add,minus,multi} from './sum'

test('add',()=>{
    expect(add(1,2)).toBe(3)
})
test('minus',()=>{
    expect(minus(1,2)).toBe(-1)
})
test('multi',()=>{
    expect(multi(3,2)).toBe(6)
})
