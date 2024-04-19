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
  Card,
} from "@nextui-org/react";
import "@/styles/globals.css";
import { users, shownUsers } from "@/config/site";
import { Providers } from "./providers";
import { useRouter } from "next/navigation";
import { clientUser } from "@/config/site";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  //Logic for modals
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onOpenChange: handleModalOpenChange,
  } = useDisclosure();

  const {
    isOpen: isEntryOpen,
    onOpen: openEntry,
    onOpenChange: handleEntryOpenChange,
  } = useDisclosure();

  const visibleUsers = users.filter((user) => {
    return shownUsers.includes(user.id) && user.occupation != clientUser.type;
  });

  //User component
  const userCard = ({
    user,
    onCustomClick,
  }: {
    user: {
      id: number | null;
      name: string;
      avatar: string;
      occupation: string;
    };
    onCustomClick?: () => void;
  }) => (
    <Card
      className="p-2 w-full"
      isPressable={true}
      isHoverable={true}
      onPress={
        onCustomClick
          ? onCustomClick
          : () => {
              user?.id && router.push(`/${user.id}`);
              console.log(user.id);
            }
      }
    >
      <User
        name={user.name}
        avatarProps={{ src: user?.avatar }}
        description={user.occupation}
        className="w-full justify-start"
      />
    </Card>
  );

  const handleAddUser = (userId: number) => {
    shownUsers.push(userId);
    visibleUsers.push(
      users.find((user) => user.id === userId) as {
        id: number;
        name: string;
        avatar: string;
        occupation: string;
        messages: {
          id: number;
          content: string;
          timestamp: Date;
          type: string;
        }[];
      }
    );
  };

  const addUser = {
    id: null,
    name:
      clientUser.type === ""
        ? ". . ."
        : clientUser.type === "Doctor"
        ? "Add a patient"
        : "Add a doctor",
    avatar:
      "https://t4.ftcdn.net/jpg/01/14/04/65/360_F_114046562_CoMtlfJGu0WhnDHLMz8qOHtHblQBH9QK.jpg",
    occupation: "",
  };

  const handleUserSelection = (type: string) => {
    clientUser.type = type;
    console.log(clientUser.type);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-row h-screen">
            <aside className="w-1/4 bg-cyan-800 p-4 max-w-sm min-w-48">
              <h2 className="text-lg font-semibold mb-4 text-white font-bold justify-self-center align-items-center">
                {clientUser.type === ""
                  ? ". . ."
                  : clientUser.type === "Doctor"
                  ? "Patients"
                  : "Doctors"}
              </h2>
              <ul className="space-y-2">
                {clientUser.type &&
                  visibleUsers.map((user) => (
                    <li className="text-gray-700" key={user.id}>
                      {userCard({ user })}
                    </li>
                  ))}
                <li className="text-gray-700">
                  {userCard({ user: addUser, onCustomClick: openModal })}
                </li>
              </ul>
            </aside>
            <main className="container mx-auto max-w-7xl flex-grow">
              {children}
              <Modal isOpen={isModalOpen} onOpenChange={handleModalOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        {clientUser.type === ""
                          ? ". . ."
                          : clientUser.type === "Doctor"
                          ? "Add a patient"
                          : "Add a doctor"}
                      </ModalHeader>
                      <ModalBody>
                        <ul className="space-y-2">
                          {users
                            .filter((user) => {
                              return (
                                !shownUsers.includes(user.id) &&
                                user.occupation != clientUser.type
                              );
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
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <Modal
                isOpen={!isEntryOpen}
                onOpenChange={handleEntryOpenChange}
                hideCloseButton={true}
                isDismissable={false}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Are you a patient or a doctor?
                      </ModalHeader>
                      <ModalBody>
                        <Button
                          onPress={() => {
                            handleUserSelection("Patient");
                            onClose();
                          }}
                        >
                          Patient
                        </Button>
                        <Button
                          onPress={() => {
                            handleUserSelection("Doctor");
                            onClose();
                          }}
                        >
                          Doctor
                        </Button>
                      </ModalBody>
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
