export const users = [
	{
		id: 0,
		name: "John Doe",
		avatar: "https://example.com/avatar1.jpg",
		occupation: "doctor",
		messages: [
			{
				id: 1,
				content: "Hello, world!",
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
		id: 1,
		name: "Jane Smith",
		avatar: "https://example.com/avatar2.jpg",
		occupation: "patient",
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
		id: 2,
		name: "Mike Johnson",
		avatar: "https://example.com/avatar3.jpg",
		occupation: "doctor",
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
			{
				id: 3,
				content: "I'm doing great!",
				timestamp: new Date("2024-04-17T16:30:00"),
				type: "received",
			},
		],
	},
	{
		id: 3,
		name: "Sarah Johnson",
		avatar: "https://example.com/avatar4.jpg",
		occupation: "patient",
		messages: [
			{
				id: 1,
				content: "Hi, everyone!",
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
		id: 4,
		name: "David Johnson",
		avatar: "https://example.com/avatar5.jpg",
		occupation: "doctor",
		messages: [],
	},
	{
		id: 5,
		name: "Emily Smith",
		avatar: "https://example.com/avatar6.jpg",
		occupation: "doctor",
		messages: [],
	},
	{
		id: 6,
		name: "Michael Brown",
		avatar: "https://example.com/avatar7.jpg",
		occupation: "doctor",
		messages: [],
	},
	{
		id: 7,
		name: "Jessica Davis",
		avatar: "https://example.com/avatar8.jpg",
		occupation: "patient",
		messages: [],
	},
	{
		id: 8,
		name: "Daniel Wilson",
		avatar: "https://example.com/avatar9.jpg",
		occupation: "patient",
		messages: [],
	},
	{
		id: 9,
		name: "Olivia Johnson",
		avatar: "https://example.com/avatar10.jpg",
		occupation: "patient",
		messages: [],
	},
];

export const shownUsers:number[] = [0,1,2,3];
