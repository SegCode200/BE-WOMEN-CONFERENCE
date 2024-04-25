import AdminHead from "../../../components/Static/AdminHead"


const EventManagement = () => {
  return (
    <div className="h-screen bg-teal-50/45 w-[84%]">
    <AdminHead name="Event Management"/>
    <div className="flex flex-col space-y-8 p-6 bg-gray-100 min-h-screen px-[15px]">
      {/* Welcome Message */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to the Church Journal App!</h2>
        <p className="text-gray-600 mt-2">
          We're glad to have you here. Explore the latest journaling prompts and upcoming events.
        </p>
      </div>

      {/* Recent Journaling Prompts */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Recent Journaling Prompts</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">What are you grateful for this week?</li>
          <li className="text-gray-600">How can you strengthen your relationship with God?</li>
          <li className="text-gray-600">What are your goals for the upcoming month?</li>
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">Prayer Meeting - April 30th</li>
          <li className="text-gray-600">Women's Conference - May 12th</li>
          <li className="text-gray-600">Community Outreach - May 25th</li>
        </ul>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Latest Notifications</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">Prayer Meeting Reminder - April 30th</li>
          <li className="text-gray-600">Event Registration Open - Women's Conference</li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800">Follow Us on Social Media</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a className="text-blue-500 hover:underline" href="https://www.instagram.com">
              Instagram
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:underline" href="https://www.youtube.com">
              YouTube
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:underline" href="https://www.churchwebsite.com">
              Church Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default EventManagement
