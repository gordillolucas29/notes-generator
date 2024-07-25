import tareasConfig from '../config/tareasConfig.js';

export function generateNota(tipoTarea, campos, materialesGasto, materialesRecuperado) {
	const tareaConfig = tareasConfig[tipoTarea];

	if (!tareaConfig) {
		return '';
	}

	let notaGenerada = '';

	if (tipoTarea == "SRR") {
		notaGenerada += `Se llega a sitio, se procede a tomar mediciones en red verificando niveles fuera de rango.<br />`;
	}

	tareaConfig.campos.forEach(campo => {
		const valorCampo = campos[campo.id];

		if (valorCampo !== undefined && valorCampo !== '') {
			switch (campo.id) {
				// LDI
				case 'hogaresNodo':
					notaGenerada += `Nodo de ${valorCampo} hogares ubicado en ${campos.direccionNodoOptico}.<br />`;
					break;
				case 'direccionNodoOptico':
					notaGenerada += `Dirección del nodo óptico: ${valorCampo}.<br />`;
					break;
				case 'medicionesNiveles':
					if (valorCampo) {
						notaGenerada += `Se tomaron mediciones de niveles.<br />`;
					}
					break;
				case 'medicionesTXRX2':
					if (valorCampo) {
						notaGenerada += `Mediciones en TX y RX2 realizadas.<br />`;
					}
					break;
				case 'puertoAfectado':
					notaGenerada += `Puerto afectado: ${valorCampo}.<br />`;
					break;
				case 'trabajoConectoresSalidaNodo':
					if (valorCampo) {
						notaGenerada += `Se trabajó en los conectores de la salida del nodo.<br />`;
					}
					break;
				case 'direccionPuertoAfectado':
					notaGenerada += `Dirección del puerto afectado: ${valorCampo}.<br />`;
					break;
				case 'subnodo':
					if (campos.hogaresNodo === '2000') {
						notaGenerada += `Subnodo afectado: ${valorCampo}.<br />`;
					}
					break;
				// SRR
				case 'condicionEntrada':
					notaGenerada += `Se toman mediciones en dicho activo verificando niveles de entrada ${valorCampo}.<br />`;
					if (valorCampo === 'fuera de rango') {
						notaGenerada += `Se procede a verificar el estado del cableado y conector de entrada en activo.
						Se verifica conector de entrada con malla quebrada procediendo a reconectorizar correctamente el mismo, verificando así niveles en entrada ok.<br />`;
						// Aquí se debería añadir la lógica para el tipo de problema encontrado
					}
					break;
				case 'condicionSalida':
					notaGenerada += `Se chequean niveles de salida verificando los mismos ${valorCampo}.<br />`;
					if (valorCampo === 'fuera de rango') {
						notaGenerada += `Se procede a ajustar niveles en salida según lápida de plano.<br /><br />`;
					} else {
						notaGenerada += `<br />`;
					}
					break;
				// General
				case 'tipoAmplificador':
					notaGenerada += `Se dirige hacia amplificador ${valorCampo} ubicado en ${campos.direccionAmplificador}.<br />`;
					break;
				case 'operadorBase':
					notaGenerada += `Se comunica con ${valorCampo} operador de base quien indica comunicarse con Ore.<br />`;
					break;
				case 'operadorOre':
					notaGenerada += `Se confirma niveles operativos con ${valorCampo} operador de Ore quien brinda el cierre de la tarea.<br />`;
					break;
				default:
					break;
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
