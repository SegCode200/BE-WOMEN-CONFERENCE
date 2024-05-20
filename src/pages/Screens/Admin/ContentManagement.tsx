import { useState } from "react";
import AdminHead from "../../../components/Static/AdminHead"

const ContentManagement = () => {
  const initialContent = [
    { id: 1, title: 'Prayer for Guidance', body: 'Lord, guide me through this week.' },
    { id: 2, title: 'Weekly Announcement', body: 'Community gathering this Sunday at 10 AM.' },
    { id: 3, title: 'Special Event', body: 'Join us for a special event on Friday night.' },
  ];
  
    const [contentList, setContentList] = useState(initialContent);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingContent, setEditingContent] = useState(null);
  
    const handleOpenModal = (content = null) => {
      setEditingContent(content);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setEditingContent(null);
    };
  
    const handleSaveContent = () => {
      if (editingContent?.id) {
        setContentList((prevList) =>
          prevList.map((item) => (item.id === editingContent.id ? editingContent : item))
        );
      } else {
        setContentList((prevList) => [...prevList, { ...editingContent, id: prevList.length + 1 }]);
      }
      handleCloseModal();
    };
  
    const handleDeleteContent = (contentId) => {
      setContentList((prevList) => prevList.filter((item) => item.id !== contentId));
    };

  return (
    <div className="h-auto bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
    <AdminHead name="Content Management"/>
    <div className=" bg-gray-100 p-6 flex flex-col space-y-6 max-sm:space-y-4">
      {/* Header Section */}
      <header className="bg-teal-500 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-white max-sm:text-lg">Content Management</h1>
        <p className="text-gray-200 mt-2 max-sm:text-sm">Manage prayer prompts, announcements, and other content.</p>
      </header>

      {/* Content List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-teal-700">Existing Content</h2>
        <button
          onClick={() => handleOpenModal()}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Add New Content
        </button>
        <ul className="mt-4 space-y-4">
          {contentList.map((content) => (
            <li key={content.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center max-sm:items-start max-sm:flex-col">
              <div>
                <h3 className="font-bold text-teal-700">{content.title}</h3>
                <p className="text-gray-600 my-3">{content.body}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleOpenModal(content)}
                  className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteContent(content.id)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Adding/Editing Content */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center top-0 h-screen z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%]">
            <h2 className="text-2xl font-bold text-teal-700">{editingContent ? 'Edit Content' : 'Add New Content'}</h2>
            <input
              type="text"
              placeholder="Content Title"
              value={editingContent?.title || ''}
              onChange={(e) => setEditingContent({ ...editingContent, title: e.target.value })}
              className="w-full p-4 mt-4 border rounded-lg"
            />
            <textarea
              placeholder="Content Body"
              value={editingContent?.body || ''}
              onChange={(e) => setEditingContent({ ...editingContent, body: e.target.value })}
              className="w-full h-40 p-4 mt-4 border rounded-lg"
            />
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveContent}
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

export default ContentManagement
