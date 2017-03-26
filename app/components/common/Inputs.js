import React, {PropTypes} from 'react';

export const TextInput = ({name, onChange, placeholder, value, label}) => {
	let l = label ?  <label htmlFor={name}>{label}</label> : "";
	
	return (
		<div className="form-group">
			{l}
			<div className="field">
				<input 
					type="text"
					name={name}
					className="form-control"
					placeholder={placeholder}
					defaultValue={value}
					onChange={onChange} />
			</div>
		</div>
	)
}

export const TextArea = ({name, onChange, placeholder, value, label, rows}) => {
	let l = label ?  <label htmlFor={name}>{label}</label> : "";
	return (
		<div className="form-group">
			{l}
			<div className="field">
				<textarea 
					type="text"
					name={name}
					className="form-control"
					placeholder={placeholder}
					defaultValue={value}
					rows={rows || 3}
					onChange={onChange} />
			</div>
		</div>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string
}