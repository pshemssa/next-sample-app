
async function About() {
    try{
   const info = await fetch("https://jsonplaceholder.typicode.com/users/1")
   if (!info){
    throw new Error("error fetching user's info")
   }
    const data = await info.json()
    console.log("User info:", data)
    }
    catch(error){
        console.log("Error fetching user info:", Error)
    }
  return (
    <div>
        <h2 className="p-5">About Page</h2>
        <p>This is the about page of my first NextJs sample project.</p>
    </div>
  )
}

export default About