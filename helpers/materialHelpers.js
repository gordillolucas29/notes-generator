export function addMaterialSection(labelText, containerId, buttonId) {
	const formGroup = document.createElement('div');
	formGroup.className = 'form-group';

	const label = document.createElement('label');
	label.textContent = labelText;
	formGroup.appendChild(label);

	const container = document.createElement('div');
	container.id = containerId;
	formGroup.appendChild(container);

	const button = document.createElement('button');
	button.type = 'button';
	button.id = buttonId;
	button.className = 'btn btn-primary mt-2';
	button.textContent = 'Agregar Material';
	formGroup.appendChild(button);

	document.getElementById('camposTarea').appendChild(formGroup);
}

// Asegúrate de exportar todas las funciones necesarias
export function initializeMaterialEvents() {
	document.getElementById('addMaterialGasto').addEventListener('click', function () {
		addMaterial('materialesGasto');
	});

	document.getElementById('addMaterialRecuperado').addEventListener('click', function () {
		addMaterial('materialesRecuperado');
	});
}

export function addMaterial(containerId) {
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

export function updateMaterialOptions(type, valueSelect) {
	const options = {
		pad: Array.from({ length: 20 }, (_, i) => i + 1),
		eq: Array.from({ length: 15 }, (_, i) => (i * 1.5).toFixed(1)),
		inv: [1.6, 3.3, 4.9, 6.0, 8.1, 9.8, 11.4, 13.0, 14.6, 16.2],
		plugin: ['Jumper', 'Splitter x2', 'DC-8', 'DC-12']
	};

	valueSelect.innerHTML = options[type].map(value => `<option value="${value}">${value}</option>`).join('');
}

export function getMaterialList(containerId) {
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
