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
	// Agregar más configuraciones de tareas según sea necesario
};
