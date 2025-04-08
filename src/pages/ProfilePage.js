import ProfileCard from "../components/ProfileCard";
import BasicInfo from "../components/BasicInfo";
import UserHistory from "../components/UserHistory";
import Scoreboard from "../components/Scoreboard";

const ProfilePage = () => {
  return (
    <div className="p-5 space-y-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {/* Profile Card */}
      <ProfileCard />

      {/* Basic Information */}
      <BasicInfo />

      {/* User History */}
      <UserHistory />

      {/* Scoreboard */}
      <Scoreboard />
    </div>
  );
};

export default ProfilePage;
