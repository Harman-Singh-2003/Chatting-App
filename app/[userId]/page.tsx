"use client";

import React from "react";
import { Textarea, Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { users } from "@/config/site";

export default function AboutPage({ params }: { params: { userId: string } }) {
  const messages = users[Number(params.userId)].messages;

  const userName = users[Number(params.userId)].name;

  const MessageCard = ({
    message,
  }: {
    message: { id: number; content: string; timestamp: Date };
  }) => (
    <Card className="my-4">
      <CardBody>
        <p>{message.content}</p>
        <p className="text-xs text-gray-500">
          {message.timestamp.toLocaleDateString()}
        </p>
      </CardBody>
    </Card>
  );

  const messageList = messages.map((message) => (
    <MessageCard message={message} />
  ));

  const [value, setValue] = React.useState("");

  const sendMessage = (content: string) => {
    const message = {
      id: messages.length + 1,
      content: content,
      timestamp: new Date(),
      type: "sent",
    };
    messages.push(message);
  };

  return (
    <div className="flex flex-col h-full p-1" style={{ height: "95vh" }}>
      <div>
        <h1 className={title()}>{userName}</h1>
      </div>
      <ScrollShadow
  className="flex-grow flex flex-col-reverse p-4 overflow-y-auto"
  isEnabled={true}
  visibility="both"
  style={{
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 #f1f1f1',
    msOverflowStyle: 'none',
  }}
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
