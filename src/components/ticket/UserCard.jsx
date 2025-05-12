import { useUser } from "../../context/UserContext";

function UserCard() {
  const { user } = useUser();

  return (
    <div className="flex gap-2 items-center">
      <img
        src={user.imageURL}
        className="h-9 sm:h-12 bg-white/20 p-1 rounded-xl"
        alt="User image"
      />
      <div>
        <p className="text-sm sm:text-lg font-semibold">{user.fullName}</p>
        <p className="text-gray-300 text-xs sm:text-sm">{user.repoLink}</p>
      </div>
    </div>
  );
}

export default UserCard;
