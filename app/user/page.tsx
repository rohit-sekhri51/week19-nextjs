import axios from "axios"

// Better fetch: instead of axios bringing in user, email via Server=>DB, we can directly call the DB.
//const prisma = new PrismaClient();

export default async function User() {

    //try {
    const response = await axios.get("http://localhost:3000/api/v1/user/details");

     await new Promise(r => setInterval(r, 5000));   // wait for 5 sec while axios getBlogs fetched.

    const res = response.data;
    // Check the network tab, make sure there is no waterfalling

    console.log("Hi there D");  // In React it gets printed on the Browser
    // In Next.js it gets logged on the server as its server component
    // In case, "use Client" then on Browser

    // }  catch(e) {
    // console.log(e);
    // }

    return  <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {res?.user}
                </div>
                Email: {res?.email}
            </div>
        </div>
    </div>
}