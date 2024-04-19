'use client';

import React, { useState } from "react";
import { Textarea,  ScrollShadow } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { users } from "@/config/site";
import { MessageCard } from "@/components/messageCard";

export default function UserPage({ params }: { params: { userId: string } }) {
  // Find the user based on the userId parameter
  const user = users.find((user) => user.id == Number(params.userId));

  // Get the user's name or set it to an empty string if the user is not found
  const userName = user?.name ?? "";

  // Create a list of message cards for the user's messages
  const messageList = user?.messages?.map((message) => (
    <MessageCard key={message.id} message={message} userName={userName} userAvatar={user?.avatar} />
  ));

  // State for the input value of the textarea
  const [value, setValue] = useState("");

  // Function to send a message
  const sendMessage = (content: string) => {
    // Create a new message object
    const message = {
      id: (user?.messages?.length || 0) + 1,
      content: content,
      timestamp: new Date(),
      type: "sent",
    };
    // Add the message to the user's messages array
    user?.messages?.push(message);
  };

  return (
    <div className="flex flex-col h-full p-1" style={{ height: "95vh" }}>
      <div>
        {/* Display the user's name */}
        <h1 className={`${title()} border-b border-gray-300`}>{userName}</h1>
      </div>
      <ScrollShadow
        className="flex-grow flex flex-col-reverse p-4 overflow-y-auto"
        isEnabled={true}
        visibility="both"
        hideScrollBar={true}
      >
        <ul>{messageList}</ul>
      </ScrollShadow>
      <div>
        <Textarea
          variant="faded"
          labelPlacement="outside"
          placeholder="Enter your message"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 w-full md:w-auto"
          value={value}
          onValueChange={setValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              if (value) {
                // Call the sendMessage function when Enter key is pressed
                sendMessage(value);
                setValue("");
                (event.target as HTMLInputElement).blur();
                (event.target as HTMLInputElement).focus();
              }
            }
          }}
        />
      </div>
    </div>
  );
}
