export const ADD_TODO = 'ADD_TODO'

interface IncrementTodosAction {
    type: typeof ADD_TODO,
    payload: number,
}

export interface HomeState {
    todos: number,
    headline: string,
}

export type HomeActionTypes = IncrementTodosAction