export const users = [
	{
		id: 0,
		name: "John Doe",
		username: "johndoe",
		avatar:
			"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
		status: "online",
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
		username: "janesmith",
		avatar:
			"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
		status: "offline",
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
		username: "mikejohnson",
		avatar: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
		status: "offline",
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
];
