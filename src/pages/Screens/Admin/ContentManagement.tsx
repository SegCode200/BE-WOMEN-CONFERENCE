import { useState } from "react";
import AdminHead from "../../../components/Static/AdminHead"

const ContentManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prayerPrompt, setPrayerPrompt] = useState("What are you grateful for this week?");
  const [journalEntry, setJournalEntry] = useState("");
  const [savedEntries, setSavedEntries] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveEntry = () => {
    setSavedEntries([...savedEntries, { prompt: prayerPrompt, entry: journalEntry }]);
    setJournalEntry("");
    setIsModalOpen(false);
  };
  return (
    <div className="h-screen bg-teal-50/45 w-[84%]">
    <AdminHead name="Content Management"/>
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Prayer Prompt */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Prayer Prompt</h2>
        <p className="text-gray-600 mt-2">{prayerPrompt}</p>
        <button
          onClick={handleOpenModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Write Your Response
        </button>
      </div>

      {/* Saved Entries */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Previous Journal Entries</h3>
        {savedEntries.length === 0 ? (
          <p className="text-gray-600 mt-2">No entries saved yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {savedEntries.map((entry, index) => (
              <li key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-gray-700">Prompt: {entry.prompt}</h4>
                <p className="text-gray-600 mt-2">Response: {entry.entry}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Writing Response */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">Write Your Prayer Response</h2>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="w-full h-40 p-4 mt-4 border rounded-lg"
              placeholder="Write your thoughts here..."
            />
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEntry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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

export default ContentManagement
