// Get container elements
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

// Get reset button element
var resetButton = document.getElementById('resetButton');

// Add event listeners for drag and drop events and reset button
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);
resetButton.addEventListener('click', reset);

// Store the currently dragged item
var draggedItem;

// Target the text in the drop box
var droptext = document.getElementById('droptext');

// Drag start event handler
function dragStart(event) {
	draggedItem = event.target;
	event.dataTransfer.setData('text/plain', event.target.textContent);
	event.dataTransfer.effectAllowed = 'move';
}

// Drag over event handler
function dragOver(event) {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'move';
	container2.classList.add('highlight');
}

// Drop event handler
function drop(event) {
	event.preventDefault();

	if (event.target === container2) {
		droptext.remove()
		container2.appendChild(draggedItem);
	}
	container2.classList.remove('highlight');
}

// Reset the containers to their original state
function reset() {
	container1.innerHTML = `
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
    <div class="item" draggable="true">Item 4</div>
    <img src="./assets/image.png" class="item image" draggable="true">`;
	container2.innerHTML = `<p id="droptext">Drop items here</p>`
	droptext = document.getElementById('droptext');
}

