let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
  let userText;
  userText = searchUser.value;
  if (userText != '') {
    // Fetch API
    fetch(`https://api.github.com/users/${userText}`)
    .then(result => result.json())
    .then(data => {
      if (data.message == "Not Found") {
        // Show alert
        ui.showAlert("Profile not found!", "alert alert-primary");
      } else {
        // Show profile
        ui.showProfile(data);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
  searchUser.value = '';

});