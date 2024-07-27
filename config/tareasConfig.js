// tareasConfig.js
const tareasConfig = {
	SRR: {
		campos: [
			{ label: 'Tipo de amplificador', id: 'tipoAmplificador', type: 'select', options: ['HGD', 'HGBT', 'Line Extender'] },
			{ label: 'Dirección del amplificador', id: 'direccionAmplificador', type: 'text' },
			{ label: 'Condición de los niveles de entrada', id: 'condicionEntrada', type: 'select', options: ['OK', 'fuera de rango'] },
			{ label: 'Condición de los niveles de salida', id: 'condicionSalida', type: 'select', options: ['operativos', 'fuera de rango'] },
			{ label: 'Tipo de Tap', id: 'tipoTap', type: 'select', options: ['2x8', '2x11', '2x14', '2x17', '2x20', '2x23', '2x26', '2x29', '2x32', '4x8', '4x11', '4x14', '4x17', '4x20', '4x23', '4x26', '4x29', '4x32', '8x11', '8x14', '8x17', '8x20', '8x23', '8x26', '8x29', '8x32'] },
			{ label: 'Dirección del tap', id: 'direccionTap', type: 'text' },
			{ label: 'Operador de base', id: 'operadorBase', type: 'text' },
			{ label: 'Operador de ore', id: 'operadorOre', type: 'text' }
		],
		plantillas: {
			base: "Se llega a sitio, se procede a tomar mediciones en red verificando niveles fuera de rango.<br />",
			tipoAmplificador: "Se dirige hacia amplificador {valorCampo} ubicado en {direccionAmplificador}.<br />",
			condicionEntrada: "{condiciones.condicionEntrada}",
			condicionSalida: "{condiciones.condicionSalida}",
			tipoTap: "Se dirige hacia tap {valorCampo} ubicado en {direccionTap}.<br />"
			// Otras plantillas...
		},
		condiciones: {
			condicionEntrada: {
				OK: "Se toman mediciones en dicho activo verificando niveles de entrada normales.<br />",
				'fuera de rango': "Se procede a verificar el estado del cableado y conector de entrada en activo. Se verifica conector de entrada con malla quebrada, procediendo a reconectorizar correctamente el mismo.<br />"
			},
			condicionSalida: {
				operativos: "Se chequean niveles de salida verificando los mismos normales.<br />",
				'fuera de rango': "Se procede a ajustar niveles en salida según lápida de plano.<br />"
			}
		}
	},
	// Otros tipos de tarea...
};

export default tareasConfig;
