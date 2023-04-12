const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdown.addEventListener('click', () => {
    dropdownContent.style.display = 'block';
  });

  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});
// Header biter.

// Slider Section başlar.

// Slider Section biter.


