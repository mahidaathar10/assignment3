
import Navbar from "@/app/Components/Navbar";
import Categories from "./categories/page";
import Articles from "./articles/page";
import Contact from "./contact/page";


export default function Home(){
  return(
    <>    
    <Navbar/>
    <main>
      
      <Categories/>
<Articles/>
<Contact/>


    </main>
    
</>
  )
}
