import AdminHead from "../../../components/Static/AdminHead"

const Analytics = () => {
  const userResponses = [
    { username: 'JohnDoe', prompt: 'What are you grateful for this week?', response: 'I am grateful for my family.' },
    { username: 'JaneSmith', prompt: 'What are you grateful for this week?', response: 'I am grateful for my health.' },
    { username: 'AlexBrown', prompt: 'What are you grateful for this week?', response: 'I am grateful for my job.' },
  ];
  return (
    <div className="h-screen bg-teal-50/45 w-[84%]">
    <AdminHead name="Analytics"/>
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <header className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Review user responses to weekly prayer prompts.</p>
      </header>

      {/* User Responses Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">User Responses</h2>
        {userResponses.length === 0 ? (
          <p className="text-gray-600 mt-4">No responses found.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-gray-800">Username</th>
                  <th className="px-4 py-2 text-left text-gray-800">Prompt</th>
                  <th className="px-4 py-2 text-left text-gray-800">Response</th>
                </tr>
              </thead>
              <tbody>
                {userResponses.map((response, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 text-gray-700">{response.username}</td>
                    <td className="px-4 py-2 text-gray-700">{response.prompt}</td>
                    <td className="px-4 py-2 text-gray-700">{response.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Analytics
