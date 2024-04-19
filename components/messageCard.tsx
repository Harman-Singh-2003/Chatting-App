import React from "react";
import { Card, User } from "@nextui-org/react";

export const MessageCard = ({
  message,
  userName,
  userAvatar,
}: {
  message: { id: number; content: string; timestamp: Date; type: string };
  userName: string;
  userAvatar: string;
}) => (
  <Card className="my-4 flex flex-row p-3">
    {
      <User
        name={
          <div className="flex flex-row items-center">
            <p className="text-black text-m font-semibold">
              {message.type === "received" ? userName : "You"}
            </p>{" "}
            <p className="ml-4 text-xs">
              {message.timestamp.toLocaleDateString()}
            </p>
          </div>
        }
        avatarProps={{
          src: message.type === "received" ? userAvatar : undefined,
        }}
        description={
          <div className="text-left align">
            <p className="text-lg text-black">{message.content}</p>
            <p className="text-xs text-gray-500"></p>
          </div>
        }
      />
    }
  </Card>
);