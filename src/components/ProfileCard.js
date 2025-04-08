import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import { Edit } from "lucide-react"; // Import the Edit icon

const ProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    name: "Mr. Bob",
    email: "bob123@gmail.com",
    photo: "",
    phone: "9876543210",
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow text-center">
      <div
        className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"
        style={{
          backgroundImage: `url(${user.photo || "https://via.placeholder.com/150"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-gray-500">{user.email}</p>
      <div className="flex justify-center mt-3"> {/* Center the button */}
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Edit size={16} /> Edit Profile
        </button>
      </div>

      {isModalOpen && (
        <EditProfileModal user={user} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ProfileCard;
