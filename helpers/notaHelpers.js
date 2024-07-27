// notaHelpers.js
import tareasConfig from '../config/tareasConfig.js';

export function generateNota(tipoTarea, campos, materialesGasto, materialesRecuperado) {
	const tareaConfig = tareasConfig[tipoTarea];

	if (!tareaConfig) {
		return '';
	}

	let notaGenerada = tareaConfig.plantillas.base || '';

	// Generar la nota usando los campos y condiciones
	Object.keys(campos).forEach(campoId => {
		const campo = tareaConfig.campos.find(c => c.id === campoId);
		if (campo) {
			let valorCampo = campos[campoId];

			// Aplica condiciones si existen
			if (campo.condiciones && valorCampo !== undefined) {
				const condiciones = campo.condiciones;
				if (condiciones[valorCampo]) {
					valorCampo = condiciones[valorCampo];
				}
			}

			// Reemplazar en la plantilla
			if (tareaConfig.plantillas[campoId]) {
				notaGenerada += tareaConfig.plantillas[campoId].replace('{valorCampo}', valorCampo).replace('{direccionAmplificador}', campos.direccionAmplificador).replace('{direccionTap}', campos.direccionTap);
			}
		}
	});

	// Añadir materiales gastados
	notaGenerada += generateMaterialesNota(materialesGasto, 'gastados');

	// Añadir materiales recuperados
	notaGenerada += generateMaterialesNota(materialesRecuperado, 'recuperados');

	return notaGenerada;
}

function generateMaterialesNota(materiales, tipo) {
	let notaMateriales = '';

	if (materiales.length > 0) {
		notaMateriales += `<br />Se ${tipo === 'gastados' ? 'gastaron' : 'recuperaron'} los siguientes materiales:<br />`;
		materiales.forEach(material => {
			notaMateriales += `- ${material}<br />`;
		});
	} else {
		notaMateriales += `<br />No se ${tipo === 'gastados' ? 'utilizaron' : 'recuperaron'} materiales.<br />`;
	}

	return notaMateriales;
}
