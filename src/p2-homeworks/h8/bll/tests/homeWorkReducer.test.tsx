import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Maria', age: 31},
        {_id: 1, name: 'Emma', age: 22},
        {_id: 2, name: 'Sophia', age: 16},
        {_id: 3, name: 'Isabella', age: 64},
        {_id: 4, name: 'Mia', age: 35},
        {_id: 5, name: 'Olivia', age: 45},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const result = [
        1, 3, 4, 5, 2, 0
    ].filter((el, i) => el === newState[i]._id)
    expect(result.length).toBe(newState.length)
    expect(newState[0]._id).toBe(1)

})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState[0]._id).toBe(0)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState.length).toBe(4)
})
