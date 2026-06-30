
/**
 * Reusable Button Component.
 * @param {Object} buttonData - The Configuration object for the button.
 * @param {string} buttonData.label - The label text displayed inside the button.
 * @param {string} buttonData.classNames - Additional css/bootstrap class names for styling
 * @param {function()|null} [buttonData.onClick = null] - The click handler function, or null if decorative
 * @param {boolean} buttonData.primaryBtn - True if button should use primary styling
 * @returns {HTMLButtonElement} - Returns the completed Button DOM element.
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