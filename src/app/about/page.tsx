// app/about/page.tsx

export default async function About() {
  let data;

  try {
    const info = await fetch("https://jsonplaceholder.typicode.com/users/1"
    );

    if (!info.ok) {
      throw new Error("Error fetching user's info");
    }

    data = await info.json();
    console.log("User info:", data);

  } catch (error) {
    console.log("Error fetching user info:", error);
   
    data = { name: "Unknown Author" };
  }

  return (
    <div>
      <h2 className="p-5">About Page</h2>
      <p>This is the about page of my first Next.js sample project.</p>
      <p>Author info: {data}</p>
    </div>
  );
}
