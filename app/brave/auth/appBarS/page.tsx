import { getServerSession } from "next-auth";

export default async function AppBarSer() {

const session = await getServerSession();

// Here I can use the session.user.name to get the user name
// Benefits of using getServerSession() is that it is used to get the session object in the server side
// Benefit is that we can directly call the DB.
// Since it is SSR, we can directly in the first render webpage, can show the user image stored in the DB.

    return ( <div className = "flex justify-between items-center p-4 bg-gray-800 text-white" >
    <h1 className = "text-2xl font-bold" > Brave </h1>
    <div className = "flex items-center" >
        {session ? ( <div> {session?.user?.name}
            <button className = "flex items-center space-x-2" >
            <span > Sign Out </span> 
            </button>
            </div>
        ) : "Not Done"}
        </div>
        </div>)
 }
