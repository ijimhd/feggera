const sidebarCheckbox = document.getElementById('sidebar-active');

  sidebarCheckbox.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
});
