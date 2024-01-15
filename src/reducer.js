export const initialState = {
	fields: ['', '', '', '', '', '', '', '', ''],
	isDraw: false,
	isGameEnded: false,
	currentPlayer: 'X'
};

export function appReducer(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: payload
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: payload
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: payload
			};
		}
		case 'SET_FIELDS': {
			return {
				...state,
				fields: payload
			};
		}
		case 'RESET_GAME': {
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
};
