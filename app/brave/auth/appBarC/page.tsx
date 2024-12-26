"use client";
import { signIn, signOut, SessionProvider, useSession } from "next-auth/react"
//  import { getServerSession } from "next-auth";
// Note: In case of SSR, we use getServerSession() to get the session object
// In case of CSR, we use useSession() to get the session object
// In case of CSR, we use signIn() to sign in the user
// Since it is CSR, we can NOT directly in the first render webpage, can NOT show the user image stored in the DB.

export default function AppBar() {

  // SessionProvider is used to provide the session to the child components, it can be only run in browser
  // useSession is a hook that returns the session object, it can be used in any component
  // SessionProvider is a Context Provider which can be only used once in the app, it can be only run on the top level of the app

  return ( <div className = "flex justify-between items-center p-4 bg-gray-800 text-white" >
    <h1 className = "text-2xl font-bold" > Brave </h1> 
    <div className = "flex items-center" >
    <SessionProvider>   
      <UserAvatar />
    </SessionProvider>  
    </div> 
    </div>
  )
}

function UserAvatar() {

  const { data: session } = useSession();

  if (session) {
    return ( <div> {session?.user?.name} 
      <button onClick = {() => signOut()} className = "flex items-center space-x-2" >
      <span > Sign Out </span> 
      </button>
      </div>
    )
  } else {
    return ( <div>
       <button onClick = {() => signIn()} className = "bg-white text-gray-800 px-4 py-2 rounded-lg" >
       <span>Sign In </span>
       </button>
       </div>
    ) }
  }