const API_URL = "http://localhost:5000/api/users/register";

// Add User
async function addUser() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  const userData = {
    name,
    email,
    password
  };

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    console.log(data);

    alert("User Added Successfully");

    getUsers();

    // Clear Inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

  } catch (error) {
    console.log(error);
  }
}

// Get All Users
async function getUsers() {

  try {

    const response = await fetch("http://localhost:5000/api/users");

    const users = await response.json();

    displayUsers(users);

  } catch (error) {
    console.log(error);
  }
}

// Display Users
function displayUsers(users) {

  const tableBody = document.getElementById("userTableBody");

  tableBody.innerHTML = "";

  users.forEach((user) => {

    tableBody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>

        <td>
          <button class="edit-btn">
            Edit
          </button>

          <button class="delete-btn">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

// Load Users Automatically
getUsers();