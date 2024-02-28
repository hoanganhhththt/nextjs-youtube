'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  }
  return (
    <section>
      <h1>Routing: useRouter</h1>
      <Link href="/projects">Projects</Link>
      <br></br>
      <button 
        className="border px-2 py-4" 
        onClick={() => router.push("/about")}
      >
        Go to About Page
      </button>
      <button 
        className="border px-2 py-4" 
        onClick={() => navigate("/login")}
      >
        Go to Login Page
      </button>
    </section>
  )
};

export default Home;