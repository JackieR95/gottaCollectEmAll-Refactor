/*
  BUTTON COMPONENT

  Props:
    - label: The text to display on the button
    - classNames: Additional CSS classes to apply to the button
    - onClick: A function to call when the button is clicked
    - primaryBtn: A boolean indicating whether the button should be styled as primary

  Functionality:
    - Creates a button element with the specified properties
*/
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