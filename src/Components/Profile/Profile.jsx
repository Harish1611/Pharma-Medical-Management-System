import React from 'react'

function Profile() {
  return (

    <div className="w-full p-5">
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm  ">
      
      {/* Profile Image */}
      <img
        src="https://i.pravatar.cc/100"
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Name + Role */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Harish Naidu
        </h2>
        <p className="text-sm text-gray-500">
          MERN Stack Developer
        </p>
      </div>

    </div>
    </div>
  )
}

export default Profile