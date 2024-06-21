function generateNota(tipoTarea, campos, materialesGasto, materialesRecuperado) {
	let notaGenerada = `Se llega a sitio, se procede a tomar medición en red verificando niveles fuera de rango.<br /> 
			Se dirige hacia amplificador ${campos.tipoAmplificador} ubicado en ${campos.direccionAmplificador}.<br /> 
			Se toman mediciones en dicho activo verificando niveles de entrada ${campos.condicionEntrada}.<br />`;

	if (campos.condicionEntrada === 'fuera de rango') {
		notaGenerada += ` Se procede a verificar el estado del cableado y conector de entrada en activo.<br /> 
					Se verifica [condicion].`;
		// Aquí se debería añadir la lógica para el tipo de problema encontrado
	}

	if (campos.condicionSalida === 'fuera de rango') {
		notaGenerada += ` Se procede a ajustar niveles en salida según lápida de plano.<br /><br />`;
	} else {
		notaGenerada += ` Se verifican niveles de salida operativos.<br /><br />`;
	}

	notaGenerada += ` Se comunica con ${campos.operadorBase} operador de base quien indica comunicarse con Ore.<br />
			Se confirma niveles operativos con ${campos.operadorOre} operador de Ore quien brinda el cierre de la tarea.<br /><br />`;

	// Añadir materiales gastados
	if (materialesGasto.length > 0) {
		notaGenerada += ` Se gastaron los siguientes materiales:\n- ${materialesGasto.join('\n- ')}\n`;
	} else {
		notaGenerada += ' No se utilizaron materiales.';
	}

	// Añadir materiales recuperados
	if (materialesRecuperado.length > 0) {
		notaGenerada += `\nSe recuperaron los siguientes materiales:\n- ${materialesRecuperado.join('\n- ')}\n`;
	} else {
		notaGenerada += '\nNo se recuperaron materiales.';
	}

	return notaGenerada;
}
