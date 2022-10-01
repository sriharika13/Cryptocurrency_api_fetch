// api url
const api_url =
	"https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<thead>
        <tr>
		<th>Cryptocurrency Titles</th>
		<th>Cryptocurrency Price</th>
		</tr>
        </thead>`;
	
	// Loop to access all rows
	for (let r of data.coins) {
		tab += `<tbody>
        <tr>
	<td>${r.name} </td>
	<td>${r.price}</td>		
</tr>
</tbody>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("cryto_info").innerHTML = tab;
}

// 