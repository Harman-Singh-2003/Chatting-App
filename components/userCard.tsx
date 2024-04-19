import React from "react";
import { User, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const UserCard = ({
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
}) => {
  const router = useRouter();

  return (
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
};