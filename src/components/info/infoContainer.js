import { InfoLayout } from "./infoLayout";
import PropTypes from 'prop-types';

export function InfoContainer(){
	return(
		<InfoLayout/>
	)
}

InfoContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}
