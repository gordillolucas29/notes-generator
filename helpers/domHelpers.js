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

		switch (campo.type) {
			case 'group':
				addGroupField(formGroup, campo);
				break;
			case 'select':
				addSelectField(formGroup, campo);
				break;
			default:
				addInputField(formGroup, campo);
				break;
		}

		camposTarea.appendChild(formGroup);
	});
}

function addGroupField(formGroup, campo) {
	const groupLabel = document.createElement('label');
	groupLabel.innerText = campo.label;
	formGroup.appendChild(groupLabel);

	const groupContainer = document.createElement('div');
	groupContainer.className = 'form-group-group';

	if (Array.isArray(campo.items)) {
		campo.items.forEach(item => {
			const itemContainer = document.createElement('div');
			itemContainer.className = 'form-check';

			const input = document.createElement('input');
			input.type = item.type;
			input.className = 'form-check-input';
			input.id = item.id;

			const label = document.createElement('label');
			label.className = 'form-check-label';
			label.htmlFor = item.id;
			label.innerText = item.label;

			itemContainer.appendChild(input);
			itemContainer.appendChild(label);
			groupContainer.appendChild(itemContainer);
		});
	} else {
		console.error('campo.items no es un arreglo o está indefinido:', campo.items);
	}

	formGroup.appendChild(groupContainer);
}

function addSelectField(formGroup, campo) {
	const label = document.createElement('label');
	label.htmlFor = campo.id;
	label.innerText = campo.label;

	const select = document.createElement('select');
	select.className = 'form-control';
	select.id = campo.id;

	campo.options.forEach(option => {
		const optionElement = document.createElement('option');
		optionElement.value = option;
		optionElement.innerText = option;
		select.appendChild(optionElement);
	});

	formGroup.appendChild(label);
	formGroup.appendChild(select);
}

function addInputField(formGroup, campo) {
	const label = document.createElement('label');
	label.htmlFor = campo.id;
	label.innerText = campo.label;

	const input = document.createElement('input');
	input.type = campo.type;
	input.className = 'form-control';
	input.id = campo.id;

	formGroup.appendChild(label);
	formGroup.appendChild(input);
}