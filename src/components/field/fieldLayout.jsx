import styles from './field.module.css';
import React from 'react';
import { FieldContainer } from './fieldContainer';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export function FieldLayout({handleClick}) {
	// const { fields } = store.getState();
	const fields = useSelector((state) => state.fields);
	return (
		<div className={styles.container}>
			{fields?.map((field, index) => (
				<FieldContainer
					key={index}
					index={index}
					field={field}
					handleClick={handleClick}
				/>
			))}
		</div>
	);
}

FieldLayout.propTypes ={
	// fields: PropTypes.array.isRequired,
	handleClick: PropTypes.func
}
