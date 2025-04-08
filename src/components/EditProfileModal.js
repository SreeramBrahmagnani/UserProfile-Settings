import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Edit } from "lucide-react"; // Import the Edit icon

const EditProfileModal = ({ onClose, user }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    photo: user.photo || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, photo: reader.result }); // Save the base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    console.log("Updated Profile:", formData);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Edit size={20} /> Edit Profile
          </Dialog.Title>

          <div className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border rounded-md p-2"
              />
              {formData.photo && (
                <img
                  src={formData.photo}
                  alt="Uploaded Preview"
                  className="mt-2 w-20 h-20 rounded-full object-cover"
                />
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button onClick={onClose} className="px-4 py-2 border rounded-md">
              Cancel
            </button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Save
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditProfileModal;
