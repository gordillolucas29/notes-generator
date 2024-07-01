import tareasConfig from '../config/tareasConfig.js';
import { initializeMaterialEvents, addMaterialSection, getMaterialList } from '../helpers/materialHelpers.js';
import { generateNota } from '../helpers/notaHelpers.js';
import { addCamposTarea } from '../helpers/domHelpers.js';

document.addEventListener('DOMContentLoaded', function () {
	const tipoTareaSelect = document.getElementById('tipoTarea');
	const camposTarea = document.getElementById('camposTarea');
	const generarNotaBtn = document.getElementById('generarNota');
	const notaGeneradaDiv = document.getElementById('notaGenerada');

	tipoTareaSelect.addEventListener('change', function () {
		const tipoTarea = tipoTareaSelect.value;
		camposTarea.innerHTML = ''; // Limpiar campos anteriores al cambiar la opción

		if (tareasConfig[tipoTarea]) {
			addCamposTarea(tareasConfig[tipoTarea].campos);

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
				const inputElement = document.getElementById(campo.id);
				if (inputElement) {
					acc[campo.id] = inputElement.value;
				} else if (campo.type === 'checkbox') {
					acc[campo.id] = inputElement.checked;
				}
				return acc;
			}, {});

			const materialesGasto = getMaterialList('materialesGasto');
			const materialesRecuperado = getMaterialList('materialesRecuperado');

			const notaGenerada = generateNota(tipoTarea, campos, materialesGasto, materialesRecuperado);

			notaGeneradaDiv.innerHTML = `<div class="alert alert-success mt-3">${notaGenerada.replace(/\n/g, '<br>')}</div>`;
		}
	});
});
