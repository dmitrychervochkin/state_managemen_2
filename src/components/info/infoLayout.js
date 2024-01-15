import { useSelector } from 'react-redux';
import styles from './info.module.css';
import PropTypes from 'prop-types';

export function InfoLayout(){
	const isDraw = useSelector((state) => state.isDraw);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	if(isDraw){
		return(
			<div className={styles.status}>Ничья!</div>
		)
	} else if(!isDraw && isGameEnded){
		return(
			<div className={styles.status}>Победил - {currentPlayer}!</div>
		)
	} else if(!isDraw && !isGameEnded){
		return(
			<div className={styles.status}>Ходит - {currentPlayer}</div>
		)
	}
};

InfoLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}
