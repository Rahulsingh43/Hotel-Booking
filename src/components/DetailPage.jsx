import About from "./About";
import Amenities from "./Amenties";
import Gallery from "./Gallery";
import HostInfo from "./HostInfo";
import Reservation from "./Reservation";
import RoomInfo from "./RoomInfo";
import Testimonials from "./Testimonial";
import '../App.css';
import Navbar from "../shared/Navbar";
import { useLocation } from "react-router-dom";


function DetailPage(){

  const location = useLocation();

  const listing = location.state;

  console.log(listing,'listing');
  
  return(
    <>
     <Navbar />

    <div className="app">
    
    <Gallery />
    <div className="container">
      <RoomInfo />
      <Reservation />
      <About />
      <Amenities />
      <HostInfo />
      <Testimonials />
    </div>
  </div>
    </>
  )
}
export default DetailPage;
