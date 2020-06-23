import { RepositoryType } from '../../../API'
import { ContributeType } from '../../../API/api'
import * as types from './types'
import { ActionsType } from './actions'

const initialState = {
    repositories: null as RepositoryType[] | null,
    totalCount: 10,
    contributorsOfActiveRepository: null as ContributeType[] | null,
    activeRepositoryId: null as number | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case types.GET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload,
            }
        case types.GET_REPOSITORIES_THROUGH_SEARCH:
            return {
                ...state,
                repositories: action.payload,
            }
        case types.GET_TOTAL_COUNT_REPOSITORIES:
            return {
                ...state,
                totalCount: action.payload,
            }
        case types.SET_ACTIVE_REPOSITORY:
            return {
                ...state,
                activeRepositoryId: action.payload,
            }
        case types.GET_CONTRIBUTES_OF_ACTIVE_REPOSITORY:
            return {
                ...state,
                contributorsOfActiveRepository: action.payload,
            }
        default:
            return state
    }
}
