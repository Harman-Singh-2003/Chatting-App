"use client";

import React from "react";
import {
  User,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  user,
  Card,
} from "@nextui-org/react";
import "@/styles/globals.css";
import { Metadata } from "next";
import { users, shownUsers } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import router from "next/router";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const visibleUsers = users.filter((user) => {
    return shownUsers.includes(user.id);
  });

const userCard = ({
	user,
	onCustomClick,
}: {
	user: { id: number | null; name: string; avatar: string };
	onCustomClick?: () => void;
}) => (
	<Card className="p-2 w-full"
	isHoverable={true}
	
	>
		<User
			name={user.name}
			avatarProps={{ src: user?.avatar }}
			onClick={
				onCustomClick
					? onCustomClick
					: () => {
							user?.id && router.push(`/user/${user.id}`);
						}
			}
			className="w-full justify-start"
		/>
	</Card>
);

const handleAddUser = (userId:number) => {
	shownUsers.push(userId);
	visibleUsers.push(users.find((user) => user.id === userId) as { id: number; name: string; avatar: string; occupation: string; messages: { id: number; content: string; timestamp: Date; type: string; }[]; });
};
console.log("ShownUsers", shownUsers);
console.log("VisibleUsers", visibleUsers);
const emptyUser = {
	id: null,
	name: "Add Users",
	avatar:
		"https://t4.ftcdn.net/jpg/01/14/04/65/360_F_114046562_CoMtlfJGu0WhnDHLMz8qOHtHblQBH9QK.jpg",
};
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
	  <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        <div className="relative flex flex-row h-screen">
          <aside className="w-1/4 bg-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4 justify-self-center align-items-center">
              Users
            </h2>
            <ul className="space-y-2">
              {visibleUsers.map((user) => (
                <li className="text-gray-700" key={user.id}>
{userCard({ user })}
                </li>
              ))}
              <li className="text-gray-700">
                {userCard({ user: emptyUser, onCustomClick: onOpen })}
              </li>
            </ul>
          </aside>
          <main className="container mx-auto max-w-7xl flex-grow">
            {children}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Add a user
                    </ModalHeader>
                    <ModalBody>
                      <ul className="space-y-2">
                        {users
                          .filter((user) => {
                            return !shownUsers.includes(user.id);
                          })
                          .map((user) => (
                            <li className="text-gray-700" key={user.id}>
                              {userCard({
                                user,
                                onCustomClick: () => {
                                  handleAddUser(user.id);
                                  onClose();
                                },
                              })}
                            </li>
                          ))}
                      </ul>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </main>
        </div>
		</Providers>
      </body>
    </html>
  );
}
