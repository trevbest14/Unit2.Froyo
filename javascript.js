 // Prompt the user to enter a list of comma-separated froyo flavors
 var flavorsInput = prompt("Enter a list of comma-separated froyo flavors:");

 // Split the input string into an array of flavors
 var flavorsArray = flavorsInput.split(',');

 // Create an object to store the count of each flavor
 var flavorCount = {};

 // Loop through the array and count the occurrences of each flavor
 flavorsArray.forEach(function (flavor) {
   var trimmedFlavor = flavor.trim(); // Remove leading and trailing spaces
   flavorCount[trimmedFlavor] = (flavorCount[trimmedFlavor] || 0) + 1;
 });

 // Get the table body element to append rows
 var tableBody = document.querySelector('#flavorTable tbody');

 // Loop through the flavorCount object and add rows to the table
 for (var flavor in flavorCount) {
   var row = tableBody.insertRow();
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   cell1.textContent = flavor;
   cell2.textContent = flavorCount[flavor];
 }