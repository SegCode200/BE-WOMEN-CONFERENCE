import { useState } from "react";

const Notify = () => {
    const tabs = [
        { name: 'Upcoming Events', id: 'upcoming' },
        { name: 'Ongoing Events', id: 'ongoing' },
        { name: 'Registered Events', id: 'registered' },
      ];
      const eventsData = {
        upcoming: [
          { name: 'Youth Worship', date: '2024-05-20', location: 'Main Hall' },
          { name: 'Community Outreach', date: '2024-06-10', location: 'City Park' },
        ],
        ongoing: [
          { name: 'Sunday Service', date: '2024-05-07', location: 'Main Hall' },
        ],
        registered: [
          { name: 'Bible Study', date: '2024-05-15', location: 'Room 101' },
        ],
      };
      const EventTabs = ({ onTabChange }) => {
        const [activeTab, setActiveTab] = useState('upcoming');
      
        const handleTabClick = (tabId) => {
          setActiveTab(tabId);
          onTabChange(tabId);
        };
      
        return (
          <div className="flex justify-between border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-4 ${
                  activeTab === tab.id ? 'border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        );
      };
      const EventContent = ({ activeTab }) => {
        const events = eventsData[activeTab] || [];
      
        return (
          <div className="mt-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold">{event.name}</h2>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </div>
              ))
            ) : (
              <p>No events found.</p>
            )}
          </div>
        );
      };
      const [activeTab, setActiveTab] = useState('upcoming');
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Church Event Management</h1>
      <EventTabs onTabChange={setActiveTab} />
      <EventContent activeTab={activeTab} />
    </div>
  )
}

export default Notify
