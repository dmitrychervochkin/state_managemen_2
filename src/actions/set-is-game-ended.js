export function setIsGameEnded(delta){
	return {
		type: 'SET_IS_GAME_ENDED',
		payload: delta,
	};
};
