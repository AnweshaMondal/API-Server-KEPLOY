const apiUrl = '/api/data';

const dataForm = document.getElementById('data-form');
const nameInput = document.getElementById('name');
const valueInput = document.getElementById('value');
const dataList = document.getElementById('data-list');

// Fetch and display all data
async function fetchData() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  dataList.innerHTML = '';
  data.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong>: ${item.value}
      <span class="data-actions">
        <button onclick="editData('${item._id}', '${item.name}', '${item.value}')" class="edit">Edit</button>
        <button onclick="deleteData('${item._id}')">Delete</button>
      </span>`;
    dataList.appendChild(li);
  });
}

// Add new data
if (dataForm) {
  dataForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const value = valueInput.value.trim();
    if (!name || !value) return;
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, value })
    });
    nameInput.value = '';
    valueInput.value = '';
    fetchData();
  });
}

// Delete data
async function deleteData(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchData();
}

// Edit data
window.editData = function(id, name, value) {
  nameInput.value = name;
  valueInput.value = value;
  dataForm.onsubmit = async function(e) {
    e.preventDefault();
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameInput.value, value: valueInput.value })
    });
    nameInput.value = '';
    valueInput.value = '';
    dataForm.onsubmit = null;
    fetchData();
  };
};

// Initial fetch
fetchData();
