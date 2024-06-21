function addMaterialSection(labelText, containerId, buttonId) {
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
