import React from 'react';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export function FieldContainer({field, index, handleClick}) {
	
	return(
		<button
			className={styles.cell}
			onClick={() => {
				handleClick(index)
			}}
		>
			{field}
		</button>
	)
}

FieldContainer.propTypes = {
	field: PropTypes.string,
	index: PropTypes.number,
	handleClick: PropTypes.func
}
