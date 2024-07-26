const tareasConfig = {
	SRR: {
		campos: [
			{ label: 'Tipo de amplificador', id: 'tipoAmplificador', type: 'select', options: ['HGD', 'HGBT', 'Line Extender'] },
			{ label: 'Dirección del amplificador', id: 'direccionAmplificador', type: 'text' },
			{ label: 'Condición de los niveles de entrada', id: 'condicionEntrada', type: 'select', options: ['OK', 'fuera de rango'] },
			{ label: 'Condición de los niveles de salida', id: 'condicionSalida', type: 'select', options: ['operativos', 'fuera de rango'] },
			{
				label: 'Tipo de Tap',
				id: 'tipoTap',
				type: 'select',
				options: [
					'2x8', '2x11', '2x14', '2x17', '2x20', '2x23', '2x26', '2x29', '2x32',
					'4x8', '4x11', '4x14', '4x17', '4x20', '4x23', '4x26', '4x29', '4x32',
					'8x11', '8x14', '8x17', '8x20', '8x23', '8x26', '8x29', '8x32'
				]
			},
			{ label: 'Dirección del tap', id: 'direccionTap', type: 'text' },
			{ label: 'Operador de base', id: 'operadorBase', type: 'text' },
			{ label: 'Operador de ore', id: 'operadorOre', type: 'text' }
		]
	},
	LDI: {
		campos: [
			{ label: '¿De cuántos hogares es el nodo?', id: 'hogaresNodo', type: 'select', options: ['500', '2000'] },
			{ label: 'Dirección del nodo óptico', id: 'direccionNodoOptico', type: 'text' },
			{ label: '¿Se tomaron mediciones de niveles?', id: 'medicionesNiveles', type: 'checkbox' },
			{ label: 'Mediciones en "TX y RX2"', id: 'medicionesTXRX2', type: 'checkbox' },
			{ label: 'Puerto afectado', id: 'puertoAfectado', type: 'text' },
			{ label: '¿Se trabajó en los conectores de la salida del nodo?', id: 'trabajoConectoresSalidaNodo', type: 'checkbox' },
			{ label: '¿Hacia qué dirección se dirige el puerto afectado?', id: 'direccionPuertoAfectado', type: 'text' },
			{ label: '¿Qué subnodo es?', id: 'subnodo', type: 'select', options: ['Subnodo 1', 'Subnodo 2', 'Subnodo 3', 'Subnodo 4'] }
			// Aquí se pueden agregar más campos según sea necesario
		]
	}
};

export default tareasConfig;
