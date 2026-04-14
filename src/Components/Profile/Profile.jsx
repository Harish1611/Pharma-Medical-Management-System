import React, { useState } from 'react'

function Profile() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="w-full p-5">

      {/* Profile Card */}
      <div className="border rounded-lg shadow-sm p-4">

        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Harish Naidu
            </h2>
            <p className="text-sm text-gray-500">
              MERN Stack Developer
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 border-b flex gap-6">
          {['overview', 'projects', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === 'overview' && (
            <p className="text-gray-700">
              This is your profile overview. You can add bio, skills, etc.
            </p>
          )}

          {activeTab === 'projects' && (
            <p className="text-gray-700">
              List your projects here.
            </p>
          )}

          {activeTab === 'settings' && (
            <p className="text-gray-700">
              Profile settings will appear here.
            </p>
          )}
        </div>

      </div>

    </div>
  )
}

export default Profile