document.addEventListener('DOMContentLoaded', () => {
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
      });
    }
  
    // Tombol Scroll to Top
    const btnUp = document.getElementById('btnUp');
    if (btnUp) {
      window.addEventListener('scroll', () => {
        btnUp.style.display = window.scrollY > 200 ? 'block' : 'none';
      });
  
      btnUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Validasi Formulir Pendaftaran
    const registrationForm = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');
  
    if (registrationForm && formMessage) {
      registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const fullname = registrationForm.fullname.value.trim();
        const email = registrationForm.email.value.trim();
        const phone = registrationForm.phone.value.trim();
        const address = registrationForm.address.value.trim();
        const jurusan = registrationForm.jurusan.value;
  
        if (!fullname || !email || !phone || !address || !jurusan) {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Semua kolom harus diisi!';
          return;
        }
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Email tidak valid!';
          return;
        }
  
        formMessage.style.color = 'green';
        formMessage.textContent = `Terima kasih, ${fullname}! Pendaftaran jurusan "${jurusan}" berhasil dikirim.`;
  
        registrationForm.reset();
      });
    }
  });
  