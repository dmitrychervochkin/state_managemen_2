import styles from './App.module.css';
import { LogoContainer } from './logo/logo';
import { FieldLayout } from './components/field/fieldLayout';
import { InfoContainer } from './components/info/infoContainer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayer, setIsDraw, setFields, setIsGameEnded, RESET_GAME } from './actions'
import { selectCurrentPlayer, selectFields, selectIsGameEnded } from './selectors';

export function App() {
	const fields = useSelector(selectFields);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const dispatch = useDispatch();

	function whoIsWinner(field){
		const WIN_PATTERNS = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8], [2, 4, 6], // Варианты побед по диагонали
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] &&	field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	};

	function handleClick(index) {
		const fieldsCopy = [...fields];

		if(!isGameEnded && fieldsCopy[index] === ''){
			fieldsCopy[index] = currentPlayer;
			dispatch(setFields(fieldsCopy));
			if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') !== -1){
				dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
			};
		};

		if(whoIsWinner(fieldsCopy)){
			dispatch(setIsGameEnded(true));
			return null
		} else if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') === -1){
			dispatch(setIsDraw(true));
		};
	};

	function handleRestart(){
		dispatch(RESET_GAME);
	};

	return (
		<div className={styles.App}>
			<LogoContainer />
			<InfoContainer/>
			<FieldLayout handleClick={handleClick} />
			<button
				onClick={handleRestart}
				className={styles.restart_btn}
			>
				Начать заново
			</button>
		</div>
	);
};

