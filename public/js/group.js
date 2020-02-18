$(document).ready(function() {
    // Getting references to the name input and group container, as well as the table body
    var nameInput = $("#group-name");
    var groupList = $("tbody");
    var groupContainer = $(".group-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Group
    $(document).on("submit", "#group-form", handleGroupFormSubmit);
    $(document).on("click", ".delete-group", handleDeleteButtonPress);
  
    // Getting the initial list of Groups
    getGroups();
  
    // A function to handle what happens when the form is submitted to create a new Group
    function handleGroupFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertGroup function and passing in the value of the name input
      upsertGroup({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating a group. Calls getGroups upon completion
    function upsertGroup(groupData) {
      $.post("/api/groups", groupData)
        .then(getGroups);
    }
  
    // Function for creating a new list row for groups
    function createGroupRow(groupData) {
      var newTr = $("<tr>");
      newTr.data("group", groupData);
      newTr.append("<td>" + groupData.name + "</td>");
      if (groupData.Users) {
        newTr.append("<td> " + groupData.Users.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/blog?group_id=" + groupData.id + "'>Go to Users</a></td>");
      newTr.append("<td><a href='/cms?group_id=" + groupData.id + "'>Add a User</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-group'>Delete Group</a></td>");
      return newTr;
    }
  
    // Function for retrieving groups and getting them ready to be rendered to the page
    function getGroups() {
      $.get("/api/groups", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createGroupRow(data[i]));
        }
        renderGroupList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of groups to the page
    function renderGroupList(rows) {
      groupList.children().not(":last").remove();
      groupContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        groupList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no groups
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create a Group before you can create a User.");
      groupContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("group");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/groups/" + id
      })
        .then(getGroups);
    }
  });
  