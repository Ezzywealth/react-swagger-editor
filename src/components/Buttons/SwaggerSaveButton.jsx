import React from 'react';
import './SWaggerSaveButton.css';

const SwaggerSaveButton = () => {
	const handleSave = () => {
		const data = localStorage.getItem('swagger-editor-content');
		console.log(data);
	};
	return <button onClick={handleSave}>Save</button>;
};

export default SwaggerSaveButton;
