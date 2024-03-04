import React, { useEffect } from 'react';
import SwaggerEditorBundle from 'swagger-editor-dist/swagger-editor-bundle';
import SwaggerEditorStandalonePreset from 'swagger-editor-dist/swagger-editor-standalone-preset';
import 'swagger-editor-dist/swagger-editor.css';
import './SwaggerEditor.css';
import SwaggerSaveButton from '../Buttons/SwaggerSaveButton';

const SwaggerEditorUI = () => {
	useEffect(() => {
		const editor = SwaggerEditorBundle({
			dom_id: '#swagger-editor',
			layout: 'StandaloneLayout',
			presets: [SwaggerEditorStandalonePreset],
			queryConfigEnabled: true,
		});
		window.editor = editor;
		return () => {
			// after the SwaggerEditor have been disposed of, terminate the worker manually
			editor.jsonSchemaValidatorActions.terminateWorker();
		};
	}, []);

	return (
		<main>
			<section className='btn-container'>
				<SwaggerSaveButton />
			</section>
			<div id='swagger-editor'></div>;
		</main>
	);
};

export default SwaggerEditorUI;
