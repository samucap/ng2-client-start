import { ActionReducer, Action } from '@ngrx/store';
import { AppState } from '../AppState'

const init = {
  authed: null
}

export const user: ActionReducer<any> = (state = init, action: Action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return (<any>Object).assign({}, state, {
			authed: action.payload
		})

		default:
			return state
	}
}
