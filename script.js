document.addEventListener('DOMContentLoaded', function () {
	const tipoTareaSelect = document.getElementById('tipoTarea');
	const camposTarea = document.getElementById('camposTarea');
	const generarNotaBtn = document.getElementById('generarNota');
	const notaGeneradaDiv = document.getElementById('notaGenerada');

	tipoTareaSelect.addEventListener('change', function () {
		const tipoTarea = tipoTareaSelect.value;
		camposTarea.innerHTML = ''; // Limpiar campos anteriores al cambiar la opción

		switch (tipoTarea) {
			case 'SRR':
				camposTarea.innerHTML = `
									<div class="form-group">
											<label for="tipoAmplificador">Tipo de amplificador:</label>
											<select class="form-control" id="tipoAmplificador">
													<option value="HGD">HGD</option>
													<option value="HGBT">HGBT</option>
													<option value="Line Extender">Line Extender</option>
											</select>
									</div>
									<div class="form-group">
											<label for="direccionAmplificador">Dirección del amplificador:</label>
											<input type="text" class="form-control" id="direccionAmplificador">
									</div>
									<div class="form-group">
											<label for="condicionEntrada">Condición de los niveles de entrada:</label>
											<select class="form-control" id="condicionEntrada">
													<option value="OK">OK</option>
													<option value="fuera de rango">Fuera de rango</option>
											</select>
									</div>
									<div class="form-group">
											<label for="operadorBase">Operador de base:</label>
											<input type="text" class="form-control" id="operadorBase">
									</div>
									<div class="form-group">
											<label for="operadorOre">Operador de ore:</label>
											<input type="text" class="form-control" id="operadorOre">
									</div>
									<div class="form-group">
											<label for="condicionSalida">Condición de los niveles de salida:</label>
											<select class="form-control" id="condicionSalida">
													<option value="operativos">OK</option>
													<option value="fuera de rango">Fuera de rango</option>
											</select>
									</div>
									<div class="form-group">
											<label>Materiales Gastados:</label>
											<div id="materialesGasto"></div>
											<button type="button" id="addMaterialGasto" class="btn btn-primary mt-2">Agregar Material</button>
									</div>
									<div class="form-group">
											<label>Materiales Recuperados:</label>
											<div id="materialesRecuperado"></div>
											<button type="button" id="addMaterialRecuperado" class="btn btn-primary mt-2">Agregar Material</button>
									</div>
							`;
				initializeMaterialEvents();
				break;
			// Agregar más casos para los otros tipos de tarea según sea necesario
		}
	});

	function initializeMaterialEvents() {
		document.getElementById('addMaterialGasto').addEventListener('click', function () {
			addMaterial('materialesGasto');
		});

		document.getElementById('addMaterialRecuperado').addEventListener('click', function () {
			addMaterial('materialesRecuperado');
		});
	}

	function addMaterial(containerId) {
		const container = document.getElementById(containerId);
		const materialDiv = document.createElement('div');
		materialDiv.className = 'form-inline mb-2';
		materialDiv.innerHTML = `
					<input type="number" class="form-control mr-2" min="1" max="20" value="1">
					<select class="form-control mr-2 material-type">
							<option value="pad">Pad</option>
							<option value="eq">EQ</option>
							<option value="inv">Inv</option>
							<option value="plugin">Plug-In</option>
					</select>
					<select class="form-control mr-2 material-value">
							<!-- Opciones se llenarán dinámicamente -->
					</select>
					<button type="button" class="btn btn-danger btn-sm remove-material">Eliminar</button>
			`;
		container.appendChild(materialDiv);

		const typeSelect = materialDiv.querySelector('.material-type');
		const valueSelect = materialDiv.querySelector('.material-value');
		const removeButton = materialDiv.querySelector('.remove-material');

		typeSelect.addEventListener('change', function () {
			updateMaterialOptions(typeSelect.value, valueSelect);
		});

		removeButton.addEventListener('click', function () {
			container.removeChild(materialDiv);
		});

		updateMaterialOptions(typeSelect.value, valueSelect); // Inicializar con las opciones correctas
	}

	function updateMaterialOptions(type, valueSelect) {
		const options = {
			pad: Array.from({ length: 20 }, (_, i) => i + 1),
			eq: Array.from({ length: 15 }, (_, i) => (i * 1.5).toFixed(1)),
			inv: [1.6, 3.3, 4.9, 6.0, 8.1, 9.8, 11.4, 13.0, 14.6, 16.2],
			plugin: ['Jumper', 'Splitter x2', 'DC-8', 'DC-12']
		};

		valueSelect.innerHTML = options[type].map(value => `<option value="${value}">${value}</option>`).join('');
	}

	function getMaterialList(containerId) {
		const container = document.getElementById(containerId);
		const materials = [];
		container.querySelectorAll('.form-inline').forEach(materialDiv => {
			const quantity = materialDiv.querySelector('input').value;
			const type = materialDiv.querySelector('.material-type').value;
			const value = materialDiv.querySelector('.material-value').value;
			materials.push(`${quantity} ${type} de ${value}`);
		});
		return materials;
	}

	generarNotaBtn.addEventListener('click', function () {
		const tipoTarea = tipoTareaSelect.value;
		let notaGenerada = '';

		switch (tipoTarea) {
			case 'SRR':
				const tipoAmplificador = document.getElementById('tipoAmplificador').value;
				const direccionAmplificador = document.getElementById('direccionAmplificador').value;
				const condicionEntrada = document.getElementById('condicionEntrada').value;
				const operadorBase = document.getElementById('operadorBase').value;
				const operadorOre = document.getElementById('operadorOre').value;
				const condicionSalida = document.getElementById('condicionSalida').value;

				notaGenerada = `Se llega a sitio, se procede a tomar medición en red verificando niveles fuera de rango. 
									Se dirige hacia amplificador ${tipoAmplificador} ubicado en ${direccionAmplificador}. 
									Se toman mediciones en dicho activo verificando niveles de entrada ${condicionEntrada}.<br />`;

				if (condicionEntrada === 'fuera de rango') {
					notaGenerada += ` Se procede a verificar el estado del cableado y conector de entrada en activo.<br /> 
											Se verifica [condicion].`;
					// Aquí se debería añadir la lógica para el tipo de problema encontrado
				} else {

				}

				if (condicionSalida === 'fuera de rango') {
					notaGenerada += ` Se procede a ajustar niveles en salida según lápida de plano.<br /><br />`;
					// Aquí se debería añadir la lógica para el tipo de problema encontrado
				} else {
					notaGenerada += ` Se verifican niveles de salida operativos.<br /><br />`;
					// Aquí se debería añadir la lógica para los niveles de salida
				}

				// Se añade el nombre de los operadores
				notaGenerada += ` Se comunica con ${operadorBase} operador de base quien indica comunicarse con Ore.
									Se confirma niveles operativos con ${operadorOre} operador de Ore quien brinda el cierre de la tarea.<br /><br />`;

				// Añadir materiales gastados
				const materialesGasto = getMaterialList('materialesGasto');
				if (materialesGasto.length > 0) {
					notaGenerada += ` Se gastaron los siguientes materiales:\n- ${materialesGasto.join('\n- ')}\n`;
				} else {
					notaGenerada += ' No se utilizaron materiales.';
				}

				// Añadir materiales recuperados
				const materialesRecuperado = getMaterialList('materialesRecuperado');
				if (materialesRecuperado.length > 0) {
					notaGenerada += `\nSe recuperaron los siguientes materiales:\n- ${materialesRecuperado.join('\n- ')}\n`;
				} else {
					notaGenerada += '\nNo se recuperaron materiales.';
				}

				// Ejemplo de cómo se mostraría la nota generada
				notaGeneradaDiv.innerHTML = `<div class="alert alert-success mt-3">${notaGenerada.replace(/\n/g, '<br>')}</div>`;
				break;
			// Agregar más casos para los otros tipos de tarea según sea necesario
		}
	});
});
