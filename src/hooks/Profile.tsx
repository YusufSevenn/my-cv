
import { Avatar } from "flowbite-react";

export function Profile() {
  return (
    <Avatar img="/images/profile-picture-5.jpg" rounded={true} className="absolute top-0 left-0 m-4">
      <div className="space-y-1 font-medium black">
        <div>Yusuf Seven</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</div>
      </div>
    </Avatar>
  );
}
