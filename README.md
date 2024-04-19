# ChatApp

ChatApp is a chat application built with Next.js. The application allows users to send and receive messages. Each user has a unique profile, including a name, avatar and classifies as either a doctor or patient.

## Tech Stack and Dependencies

- **Next.js**: A React framework for building JavaScript applications.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for server-side scripting.
- **Yarn**: A package manager for managing project dependencies.
- **Next UI**: A UI library for Next.js that provides pre-designed components and layouts.

The application also uses various other dependencies, which can be found in the `package.json` file.

## Live Demo

The application is hosted on Vercel and can be accessed at [https://chatting-app-ruddy.vercel.app](https://chatting-app-ruddy.vercel.app)

## Getting Started

To get started with the project, you first need to clone the repository. Run the following command in your terminal:

```bash
git clone https://github.com/Harman-Singh-2003/Chatting-App.git
```

Then, navigate into the project directory:
```bash
cd Chatting-App
```

## Installation

### Install NVM (Node Version Manager) (Linux or Mac)

To install NVM, run the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
If you are having issues installing NVM, refer to the official docs [here](https://nodejs.org/en/download/package-manager) 

## Setup and Installation

Follow these steps to set up and run the project:

1. **Download and install Node.js**

    Use Node Version Manager (nvm) to install Node.js:

    ```bash
    nvm install 20
    ```

2. **Enable Corepack**

    Corepack is a Node.js tool that ensures you're using the package manager version specified in your project's configuration:

    ```bash
    corepack enable
    ```

3. **Switch to the installed Node.js version**

    Use nvm to switch to the installed Node.js version:

    ```bash
    nvm use
    ```

4. **Install dependencies**

    Use Yarn to install the project dependencies:

    ```bash
    yarn install
    ```

5. **Build and run the project**

    For development build, the project will compile when you visit the site for the first time. So when the project has been setup, visit [http://localhost:3000](http://localhost:3000), let it compile for ~10 seconds, and refresh the page to retreive all compiled files. 
    
    To run the development build, use the following command:

    ```bash
    yarn run dev
    ```

    For production build, use the following command:

    ```bash
    yarn run build
    ```

## Features

- User selection: The application provides a list of doctors or patients depending on if the client is a doctor or patient. You can select a user to view their messages.
- Message viewing: Once a user is selected, their messages are displayed in a scrollable list. Each message includes the content, timestamp, and the avatar of the message sender.
- Sending messages: The application includes a textarea for sending new messages. When a new message is sent, it is added to the user's messages array.
- User addition: The application allows for the addition of new users.

## Components

The application is composed of several ustom React components:

- `RootLayout`: This is the root layout for the application. It includes logic for handling the sidebar of users, which contains modals, filtering users, adding users, and handling user selection.
- `UserCard`: This component displays a user's information in a card format. It takes a `user` object as a prop.
- `UserPage`: This component displays a user's messages. It takes a `params` object as a prop, which includes a `userId`.
- `MessageCard`: This component displays a message. It takes a `message` object, a `userName`, and a `userAvatar` as props.

## Data Model

The application uses mock data to simulate a chat system. The data model includes the following:

- `clientUser`: This object represents the client user of the messaging system. Currently, it only has a `type` property which is an empty string, is only set to "Patient" or "Doctor" base on the client's selection

- `users`: This is an array of user objects. Each user object has the following properties:
  - `id`: A unique identifier for the user.
  - `name`: The name of the user.
  - `avatar`: A URL to the user's avatar image.
  - `occupation`: The occupation of the user (in this case, patient or doctor).
  - `messages`: An array of message objects. Each message object has the following properties:
    - `id`: A unique identifier for the message.
    - `content`: The content of the message.
    - `timestamp`: The time the message was sent or received.
    - `type`: The type of message, which can be "received" or "sent".

- `shownUsers`: This is an array of user IDs. It represents the users that are currently shown in the application.

This data model allows for each user to have multiple messages, and each message is associated with a specific user. The `type` property in the message object allows for distinguishing between sent and received messages.

## Database Schema

If this application were to use a database instead of mock data, the ideal schema would include two tables: `users` and `messages`.

### Users Table

The `users` table would have the following columns:

- `id`: A unique identifier for the user. This would be the primary key.
- `name`: The name of the user.
- `avatar`: A URL to the user's avatar image.
- `occupation`: The occupation of the user.

### Messages Table

The `messages` table would have the following columns:

- `id`: A unique identifier for the message. This would be the primary key.
- `content`: The content of the message.
- `timestamp`: The time the message was sent or received. This could be a TIMESTAMP type.
- `sent_from`: A foreign key that links each message to a user in the `users` table. This represents the sender of the message.
- `sent_to`: A foreign key that links each message to a user in the `users` table. This represents the recipient of the message.
- `image_url`: A URL to an image associated with the message. This could be stored in a blob storage service like S3.

This schema allows for each user to have multiple messages, and each message is associated with a specific sender and recipient. Additionally, each message can have an associated image. This design provides a more realistic representation of a chat system.

