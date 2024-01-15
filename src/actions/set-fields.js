export function setFields(delta){
	return {
		type: 'SET_FIELDS',
		payload: delta,
	};
};
