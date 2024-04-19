'use client';

import React from "react";
import { Textarea, Card, ScrollShadow, User } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { users } from "@/config/site";
import { MessageCard } from "@/components/messageCard";

export default function userPage({ params }: { params: { userId: string } }) {
  const user = users.find((user) => user.id == Number(params.userId));

  const userName = user?.name ?? "";

  const messageList = user?.messages?.map((message) => (
    <MessageCard message={message} userName={userName} userAvatar={user?.avatar} />
  ));

  const [value, setValue] = React.useState("");

  const sendMessage = (content: string) => {
    const message = {
      id: (user?.messages?.length || 0) + 1,
      content: content,
      timestamp: new Date(),
      type: "sent",
    };
    user?.messages?.push(message);
  };

  return (
    <div className="flex flex-col h-full p-1" style={{ height: "95vh" }}>
      <div>
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
