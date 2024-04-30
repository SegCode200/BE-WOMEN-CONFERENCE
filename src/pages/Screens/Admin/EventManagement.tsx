import { useState } from "react";
import AdminHead from "../../../components/Static/AdminHead"
import pics from "../../../assets/8726082_3992547.jpg"

const initialEvents = [
  {
    id: 1,
    title: 'Sunday Service',
    date: '2024-04-28',
    location: 'Main Auditorium',
    description: 'Weekly Sunday service.',
    image: pics, // Example image path
    registrants: 20,
  },
  {
    id: 2,
    title: 'Community Outreach',
    date: '2024-05-05',
    location: 'City Park',
    description: 'Community outreach event.',
    image: pics,
    registrants: 15,
  },
];

// Sample data for registered attendees


x
const EventManagement = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (event = null) => {
    setEditingEvent(event);
    setSelectedImage(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleSaveEvent = () => {
    if (editingEvent?.id) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id ? { ...editingEvent, image: selectedImage || event.image } : event
        )
      );
    } else {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          ...editingEvent,
          id: prevEvents.length + 1,
          image: selectedImage,
          registrants: 0,
        },
      ]);
    }
    handleCloseModal();
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0])); // Creating a URL for the image
    }
  };

  return (
    <div className="h-screen bg-teal-50/45 w-[84%]">
    <AdminHead name="Event Management"/>
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <header className="bg-teal-500 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-white">Events Management</h1>
        <p className="text-gray-200 mt-2">Manage church events, add new events, and track registrants.</p>
      </header>

      {/* Events List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-700">Upcoming Events</h2>
        <button
          onClick={() => handleOpenModal()}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Add New Event
        </button>
        <ul className="mt-4 space-y-4">
          {events.map((event) => (
            <li key={event.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold text-teal-700">{event.title}</h3>
                <p className="text-gray-600">{event.date} - {event.location}</p>
                <p className="text-gray-600">Registrants: {event.registrants}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleOpenModal(event)}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Adding/Editing Events */}
      {isModalOpen && editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold text-teal-700">
              {editingEvent?.id ? 'Edit Event' : 'Add New Event'}
            </h2>
            <input
              type="text"
              placeholder="Event Title"
              value={editingEvent?.title || ''}
              onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
              className="w-full p-4 mt-4 border rounded-lg"
            />
            <input
              type="date"
              value={editingEvent?.date || ''}
              onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
              className="w-full p-4 mt-4 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Location"
              value={editingEvent?.location || ''}
              onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
              className="w-full p-4 mt-4 border rounded-lg"
            />
            <textarea
              placeholder="Event Description"
              value={editingEvent?.description || ''}
              onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
              className="w-full h-40 p-4 mt-4 border rounded-lg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-4 mt-4 border rounded-lg"
            />
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEvent}
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default EventManagement
