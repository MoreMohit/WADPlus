// Save data on registration
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
          fname: document.getElementById('fname').value,
          lname: document.getElementById('lname').value,
          dob: document.getElementById('dob').value,
          gender: document.querySelector('input[name="gender"]:checked').value,
          mobile: document.getElementById('mobile').value,
          email: document.getElementById('email').value
        };
  
        if (!/^\d{10}$/.test(user.mobile)) {
          alert("Mobile number must be exactly 10 digits.");
          return;
        }
  
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registered successfully!");
        form.reset();
      });
    }
  
    // Display user data
    const table = document.getElementById('userTable');
    if (table) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.forEach(u => {
        const row = `<tr>
          <td>${u.fname} ${u.lname}</td>
          <td>${u.dob}</td>
          <td>${u.gender}</td>
          <td>${u.mobile}</td>
          <td>${u.email}</td>
        </tr>`;
        table.innerHTML += row;
      });
    }
  });
  