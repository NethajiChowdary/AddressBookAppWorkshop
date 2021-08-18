window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (const contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>
              ${contact._address}
          </td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="file:///C:/Users/Admin/Desktop/AddressBookAppWorkshop/Assests/delete.png" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="file:///C:/Users/Admin/Desktop/AddressBookAppWorkshop/Assests/create.png" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1629208165495,
      _name: "Nethaji",
      _phoneNumber: "90 9874783210",
      _address: "Chepauk",
      _city: "Chennai",
      _state: "Tamil Nadu",
      _zip: "520141",
    },
    {
      _id: 1629208165495,
      _name: "Dinesh",
      _phoneNumber: "90 9874567710",
      _address: "Bandra",
      _city: "Mumbai",
      _state: "Maharastra",
      _zip: "410141",
    },
  ];