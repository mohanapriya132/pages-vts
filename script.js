
var btn_diva = document.getElementById("btn_diva");
    var btn_divb = document.getElementById("btn_divb");
    var btn_divc = document.getElementById("btn_divc");
    
    var diva = document.getElementById("diva");
    var divb = document.getElementById("divb");
    var divc = document.getElementById("divc");
    
    btn_diva.addEventListener('click', () => {
        diva.style.display = 'block';
        divb.style.display = 'none';
        divc.style.display = 'none';
    });
    
    btn_divb.addEventListener('click', () => {
        diva.style.display = 'none';
        divb.style.display = 'block';
        divc.style.display = 'none';
    });
    
    btn_divc.addEventListener('click', () => {
        diva.style.display = 'none';
        divb.style.display = 'none';
        divc.style.display = 'block';
    });

    function toggleDropdown(id) {
        // Hide all sub-dropdowns
        document.querySelectorAll('.hidden').forEach(el => {
          if (el.id !== 'projectDropdown') {
            el.classList.add('hidden');
          }
        });
        
        // Toggle the specified dropdown
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
      }
  
      // Close dropdowns when clicking outside
      document.addEventListener('click', function(event) {
        const projectDropdown = document.getElementById('projectDropdown');
        const productDropdown = document.getElementById('productDropdown');
        const digitalServiceDropdown = document.getElementById('digitalServiceDropdown');
        const isClickInside = event.target.closest('.relative');
  
        if (!isClickInside) {
          projectDropdown.classList.add('hidden');
          productDropdown.classList.add('hidden');
          digitalServiceDropdown.classList.add('hidden');
        }
      });