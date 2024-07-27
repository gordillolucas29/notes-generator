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
			{ label: 'Dirección del nodo óptico', id: 'direccionNodoOptico', type: 'text' },
			{
				label: 'Opciones adicionales',
				id: 'opcionesAdicionales',
				type: 'group',
				items: [
					{ label: '¿Se tomaron mediciones de niveles?', id: 'medicionesNiveles', type: 'checkbox' },
					{ label: 'Mediciadadad2"', id: 'medicionesTX33X2', type: 'checkbox' },
					{ label: 'Medicionedasdsd"', id: 'medicionesTX33X2', type: 'checkbox' },
					{ label: 'Mediciones 233333333"', id: 'medici33nesTXRX2', type: 'checkbox' },
					// Más opciones aquí si es necesario
				]
			},
			{
				label: 'Opciones adicionales',
				id: 'puertoAfectado',
				type: 'group',
				items: [
					{ label: 'Puerto 1', id: 'puertoUno', type: 'checkbox' },
					{ label: 'Puerto 2', id: 'puertoDos', type: 'checkbox' },
					{ label: 'Puerto 3', id: 'puertoTres', type: 'checkbox' },
					{ label: 'Puerto 4', id: 'puertoCuatro', type: 'checkbox' },
					// Más opciones aquí si es necesario
				]
			},
			{ label: 'Puerto afectado', id: 'puertoAfectado', type: 'text' },
			{ label: '¿Se trabajó en los conectores de la salida del nodo?', id: 'trabajoConectoresSalidaNodo', type: 'checkbox' },
			{ label: '¿Hacia qué dirección se dirige el puerto afectado?', id: 'direccionPuertoAfectado', type: 'text' },
			// Aquí se pueden agregar más campos según sea necesario
		]
	}
};

export default tareasConfig;
