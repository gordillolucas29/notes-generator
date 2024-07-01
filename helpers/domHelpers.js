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

export function addCamposTarea(campos) {
	const camposTarea = document.getElementById('camposTarea');
	campos.forEach(campo => {
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
}
