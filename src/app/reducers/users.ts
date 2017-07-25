import { ActionReducer, Action } from '@ngrx/store';
import { AppState } from '../AppState'

const init = {
  list: []
}

export const users: ActionReducer<any> = (state = init, action: Action) => {
	switch (action.type) {
		case 'LOADED_USERS':
			return (<any>Object).assign({}, state, {
			list: action.payload
		})

		default:
			return state
	}
}
