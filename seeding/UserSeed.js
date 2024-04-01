const userData = [
	{
		name: "John Smith",
		username: "johnsmith1",
		password: "password1234",
		email: "john.smith@example.com",
	},
	{
		name: "Emily Johnson",
		username: "emilyjohnson2",
		password: "password5678",
		email: "emily.johnson@example.com",
	},
	{
		name: "Michael Williams",
		username: "michaelwilliams3",
		password: "password9876",
		email: "michael.williams@example.com",
	},
	{
		name: "Sophia Jones",
		username: "sophiajones4",
		password: "password5432",
		email: "sophia.jones@example.com",
	},
	{
		name: "William Brown",
		username: "williambrown5",
		password: "password2468",
		email: "william.brown@example.com",
	},
	{
		name: "Emma Davis",
		username: "emmadavis6",
		password: "password1357",
		email: "emma.davis@example.com",
	},
	{
		name: "Daniel Miller",
		username: "danielmiller7",
		password: "password8765",
		email: "daniel.miller@example.com",
	},
	{
		name: "Olivia Wilson",
		username: "oliviawilson8",
		password: "password4321",
		email: "olivia.wilson@example.com",
	},
	{
		name: "James Moore",
		username: "jamesmoore9",
		password: "password7890",
		email: "james.moore@example.com",
	},
	{
		name: "Ava Taylor",
		username: "avataylor10",
		password: "password2345",
		email: "ava.taylor@example.com",
	},
	{
		name: "Benjamin Anderson",
		username: "benjaminanderson11",
		password: "password5432",
		email: "benjamin.anderson@example.com",
	},
	{
		name: "Isabella Thomas",
		username: "isabellathomas12",
		password: "password8765",
		email: "isabella.thomas@example.com",
	},
	{
		name: "Jacob Jackson",
		username: "jacobjackson13",
		password: "password9012",
		email: "jacob.jackson@example.com",
	},
	{
		name: "Mia White",
		username: "miawhite14",
		password: "password3456",
		email: "mia.white@example.com",
	},
	{
		name: "Elijah Harris",
		username: "elijahharris15",
		password: "password6543",
		email: "elijah.harris@example.com",
	},
];

async function createUser(userData) {
	const response = await fetch("http://localhost:8080/user/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	if (response.ok) {
		console.log("User created successfully.");
	} else {
		console.error("Failed to create user.");
	}
}

async function createUsers() {
	for (let i = 0; i < userData.length; i++) {
		await createUser(userData[i]);
	}
}

createUsers();
