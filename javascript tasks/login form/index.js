document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
   
  const name = document.getElementById('username').value;
  console.log(name)
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phoneno = document.getElementById('phone').value;
  const gender = document.getElementById('gender').value;

// Basic validation
    const tableBody = document.querySelector('#userTable tbody');
    const newRow = tableBody.insertRow();
    const nameCell = newRow.insertCell(0).textContent = name;

    const emailCell = newRow.insertCell(1).textContent = email;

    const passwordCell = newRow.insertCell(2).textContent = password;

    const phonenoCell = newRow.insertCell(3).textContent = phoneno;

    const genderCell = newRow.insertCell(4).textContent = gender;

    const editCell = newRow.insertCell(5).innerHTML = '<button class="editBtn">Edit</button>' +
                '<button class="deleteBtn">Delete</button>';
                 // Add event listeners for edit and delete buttons in the new row
                   newRow.querySelector(".editBtn").addEventListener("click", editRow);
                  newRow.querySelector(".deleteBtn").addEventListener("click", function() {
                      const row = this.parentNode.parentNode;       
                      row.parentNode.removeChild(row);
                  });
                   // Clear form fields
                      document.getElementById('username').value = '';
                      document.getElementById('email').value = '';
                      document.getElementById('password').value = '';
                      document.getElementById('phone').value = '';
                      document.getElementById('gender').value = '';

        function editRow(event) {
            const row = event.target.parentNode.parentNode; 
            const nameCell = row.cells[0];
            const emailCell = row.cells[1];
            const passwordCell = row.cells[2];
            const phoneCell = row.cells[3];
            const genderCell = row.cells[4];
            const actionsCell = row.cells[5];

            // Save original values
            const originalName = nameCell.innerHTML;
            const originalEmail = emailCell.innerHTML;
            const originalpass = passwordCell.innerHTML;
            const originalphone = phoneCell.innerHTML;
            const originalgen = genderCell.innerHTML;

            // Replace cell content with input fields for editing
            nameCell.innerHTML = `<input type="text" value="${originalName}">`;
            emailCell.innerHTML = `<input type="email" value="${originalEmail}">`;
            passwordCell.innerHTML = `<input type="email" value="${originalpass}">`;
            phoneCell.innerHTML = `<input type="text" value="${originalphone}">`;
            genderCell.innerHTML =  ` <select>
                    <option value="male" ${originalgen === 'male' ? 'selected' : ''}>Male</option>
                    <option value="female" ${originalgen === 'female' ? 'selected' : ''}>Female</option>
                    <option value="other" ${originalgen === 'other' ? 'selected' : ''}>Other</option>
                    <option value="prefer-not-to-say" ${originalgen === 'prefer-not-to-say' ? 'selected' : ''}>Prefer not to say</option>
                </select>
            `;
            actionsCell.innerHTML = `<button class="saveBtn">Save</button> <button class="cancelBtn">Cancel</button>`;

            row.querySelector(".saveBtn").addEventListener("click", function() {
                const newName = nameCell.querySelector("input").value;
                const newEmail = emailCell.querySelector("input").value;
                const newPassword = passwordCell.querySelector("input").value;
                const newPhone = phoneCell.querySelector("input").value;  
                const newGender = genderCell.querySelector("select").value;


                nameCell.innerHTML = newName;
                emailCell.innerHTML = newEmail;
                passwordCell.innerHTML = newPassword;
                phoneCell.innerHTML = newPhone;
                genderCell.innerHTML = newGender;
                actionsCell.innerHTML = `<button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`;

                // Re-add event listeners for edit and delete (as the buttons were replaced)
                row.querySelector(".editBtn").addEventListener("click", editRow);
                row.querySelector(".deleteBtn").addEventListener("click", function() {
                    const row = this.parentNode.parentNode; 
                    row.parentNode.removeChild(row);
                });
            });
            row.querySelector(".cancelBtn").addEventListener("click", function() {
                nameCell.innerHTML = originalName;
                emailCell.innerHTML = originalEmail;
                passwordCell.innerHTML = originalpass;
                phoneCell.innerHTML = originalphone;
                genderCell.innerHTML = originalgen;
                actionsCell.innerHTML = `<button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>`;

                // Re-add event listeners for edit and delete (as the buttons were replaced)
                row.querySelector(".editBtn").addEventListener("click", editRow);
                row.querySelector(".deleteBtn").addEventListener("click", function() {
                    const row = this.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                });
            });
        }
});