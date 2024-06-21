document.addEventListener('DOMContentLoaded', function () {
	const tipoTareaSelect = document.getElementById('tipoTarea');
	const camposTarea = document.getElementById('camposTarea');
	const generarNotaBtn = document.getElementById('generarNota');
	const notaGeneradaDiv = document.getElementById('notaGenerada');

	tipoTareaSelect.addEventListener('change', function () {
		const tipoTarea = tipoTareaSelect.value;
		camposTarea.innerHTML = ''; // Limpiar campos anteriores al cambiar la opción

		if (tareasConfig[tipoTarea]) {
			tareasConfig[tipoTarea].campos.forEach(campo => {
				const formGroup = document.createElement('div');
				formGroup.className = 'form-group';

				const label = document.createElement('label');
				label.setAttribute('for', campo.id);
				label.textContent = campo.label;
				formGroup.appendChild(label);

				let input;
				if (campo.type === 'select') {
					input = document.createElement('select');
					input.className = 'form-control';
					input.id = campo.id;
					campo.options.forEach(option => {
						const optionElement = document.createElement('option');
						optionElement.value = option;
						optionElement.textContent = option;
						input.appendChild(optionElement);
					});
				} else {
					input = document.createElement('input');
					input.className = 'form-control';
					input.id = campo.id;
					input.type = campo.type;
				}
				formGroup.appendChild(input);
				camposTarea.appendChild(formGroup);
			});

			// Añadir los campos de materiales
			addMaterialSection('Materiales Gastados', 'materialesGasto', 'addMaterialGasto');
			addMaterialSection('Materiales Recuperados', 'materialesRecuperado', 'addMaterialRecuperado');

			initializeMaterialEvents();
		}
	});

	generarNotaBtn.addEventListener('click', function () {
		const tipoTarea = tipoTareaSelect.value;

		if (tareasConfig[tipoTarea]) {
			const campos = tareasConfig[tipoTarea].campos.reduce((acc, campo) => {
				acc[campo.id] = document.getElementById(campo.id).value;
				return acc;
			}, {});

			const materialesGasto = getMaterialList('materialesGasto');
			const materialesRecuperado = getMaterialList('materialesRecuperado');

			const notaGenerada = generateNota(tipoTarea, campos, materialesGasto, materialesRecuperado);

			notaGeneradaDiv.innerHTML = `<div class="alert alert-success mt-3">${notaGenerada.replace(/\n/g, '<br>')}</div>`;
		}
	});
});
