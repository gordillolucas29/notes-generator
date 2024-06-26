const tareasConfig = {
	SRR: {
		campos: [
			{ label: 'Tipo de amplificador', id: 'tipoAmplificador', type: 'select', options: ['HGD', 'HGBT', 'Line Extender'] },
			{ label: 'Dirección del amplificador', id: 'direccionAmplificador', type: 'text' },
			{ label: 'Condición de los niveles de entrada', id: 'condicionEntrada', type: 'select', options: ['OK', 'fuera de rango'] },
			{ label: 'Operador de base', id: 'operadorBase', type: 'text' },
			{ label: 'Operador de ore', id: 'operadorOre', type: 'text' },
			{ label: 'Condición de los niveles de salida', id: 'condicionSalida', type: 'select', options: ['operativos', 'fuera de rango'] }
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
