import React from 'react'
import Profile from './Profile'

export default function ProfileContainer() {

    const user = {
        name: "현우",
        age: 22,
        isAdmin: true,
    };
  return (
    <div>
        {/* <Profile name="현우" age={22} isAdmin={true}/>
        <Profile name="수진" age={21} isAdmin={false} /> */}
    
        {/* <Profile
            user={{
                name: "현우",
                age: 22,
                isAdmin: true,
            }}>
        </Profile> */}

        <Profile user={user} />
    </div>
  )
}
