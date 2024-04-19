//Mock data for the site

{/*
clientUser: This object represents the client user of the messaging system. 
Currently, it only has a type property which is an empty string. 
This could potentially be used to store the type of user (e.g., admin, regular user, guest, etc.).

users: This is an array of user objects. Each user object has the following properties:
	id: A unique identifier for the user.
	name: The name of the user.
	avatar: A URL to the user's avatar image.
	occupation: The occupation of the user.
	messages: An array of message objects. Each message object has the following properties:
		id: A unique identifier for the message.
		content: The content of the message.
		timestamp: The time the message was sent or received.
		type: The type of message, which can be "received" or "sent".

This data model allows for each user to have multiple messages, and each message is associated with a specific user. 
The type property in the message object allows for distinguishing between sent and received messages.
*/}

export const clientUser = {
	type: "",
}

export const users = [
	{
		id: 1,
		name: "John Doe",
		avatar: "https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg",
		occupation: "Doctor",
		messages: [
			{
				id: 1,
				content: "Hello!",
				timestamp: new Date("2024-04-11T09:30:00"),
				type: "received",
			},
			{
				id: 2,
				content: "How are you?",
				timestamp: new Date("2024-04-12T10:45:00"),
				type: "received",
			},
			{
				id: 3,
				content: "Nice weather today!",
				timestamp: new Date("2024-04-13T14:20:00"),
				type: "received",
			},
		],
	},
	{
		id: 2,
		name: "Jane Smith",
		avatar: "https://media.istockphoto.com/id/1089633230/photo/glasses-girl-in-white.jpg?s=612x612&w=0&k=20&c=qtq-7I75UA_ViQdi0GWbaGnLUYjHIRBJE3ry1v5T-TA=",
		occupation: "Patient",
		messages: [
			{
				id: 1,
				content: "Hi, there!",
				timestamp: new Date("2024-04-14T16:55:00"),
				type: "received",
			},
			{
				id: 2,
				content: "I'm busy right now.",
				timestamp: new Date("2024-04-15T19:30:00"),
				type: "received",
			},
			{
				id: 3,
				content: "I'll talk to you later.",
				timestamp: new Date("2024-04-16T21:45:00"),
				type: "received",
			},
		],
	},
	{
		id: 3,
		name: "Mike Johnson",
		avatar: "https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY=",
		occupation: "Doctor",
		messages: [
			{
				id: 1,
				content: "Hello!",
				timestamp: new Date("2024-04-17T11:30:00"),
				type: "received",
			},
			{
				id: 2,
				content: "How was your day?",
				timestamp: new Date("2024-04-17T12:55:00"),
				type: "received",
			},
		],
	},
	{
		id: 4,
		name: "Sarah Johnson",
		avatar: "https://media.istockphoto.com/id/1001379278/photo/portrait-of-friendly-afro-amercian-businesswoman.jpg?s=612x612&w=0&k=20&c=wYShnfP72eVgMNUSqjmzOOrBKnipkQXnIqeHNt780fs=",
		occupation: "Patient",
		messages: [
			{
				id: 1,
				content: "Hi!",
				timestamp: new Date("2024-04-18T09:00:00"),
				type: "received",
			},
			{
				id: 2,
				content: "I have an appointment tomorrow.",
				timestamp: new Date("2024-04-18T10:30:00"),
				type: "received",
			},
			{
				id: 3,
				content: "Looking forward to it!",
				timestamp: new Date("2024-04-18T14:15:00"),
				type: "received",
			},
		],
	},
	{
		id: 5,
		name: "David Johnson",
		avatar: "https://media.istockphoto.com/id/157506992/photo/portrait-of-hispanic-mid-adult-man-wearing-lab-coat.jpg?s=612x612&w=0&k=20&c=h7Da7s1j-qHCfDSsU7LnIcJEVDjWSVUsjkpo3BZfJkA=",
		occupation: "Doctor",
		messages: [],
	},
	{
		id: 6,
		name: "Emily Smith",
		avatar: "https://wallisphoto.com/wp/wp-content/uploads/2023/03/Dr-BR-031-819x1024.jpg",
		occupation: "Doctor",
		messages: [],
	},
	{
		id: 7,
		name: "Michael Brown",
		avatar: "https://wallisphoto.com/wp/wp-content/uploads/2023/03/DrKim-006.jpg",
		occupation: "Doctor",
		messages: [],
	},
	{
		id: 8,
		name: "Jessica Davis",
		avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
		occupation: "Patient",
		messages: [],
	},
	{
		id: 9,
		name: "Daniel Wilson",
		avatar: "https://freerangestock.com/sample/149089/headshot-smiling-asian-executive.jpg",
		occupation: "Patient",
		messages: [],
	},
	{
		id: 10,
		name: "Olivia Johnson",
		avatar: "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?cs=srgb&dl=pexels-olly-3786525.jpg&fm=jpg",
		occupation: "Patient",
		messages: [],
	},
];

export const shownUsers:number[] = [1, 2, 3, 4];
