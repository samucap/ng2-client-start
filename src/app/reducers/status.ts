import { ActionReducer, Action } from '@ngrx/store';
import { AppState } from '../AppState'

const init = {
  latest: {}
}

export const status: ActionReducer<any> = (state = init, action: Action) => {
	switch (action.type) {
		case 'STATUS_UPDATE':
			return (<any>Object).assign({}, state, {
			latest: action.payload
		})

		default:
			return state
	}
}
