type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: 'CHANGE_LOADING', isLoading
})