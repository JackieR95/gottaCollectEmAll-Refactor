// label: The text to display on the button

export function Button({ label, classNames, onClick = null, primaryBtn }) {
    const button = document.createElement('button');
    button.textContent = label;
    button.className = classNames;

    // Add click event listener if provided
    if (onClick) {
        button.addEventListener('click', onClick);
    }

    // Add default button classes
    button.classList.add('btn', 'btn-outline-secondary', 'btn-sm');

    // If primaryBtn is true, change the button style to primary
    if (primaryBtn) {
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-primary');
    }
    return button;
}