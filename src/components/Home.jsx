import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import TabContent from "../shared/TabContent";
import CardList from "./CardList";
import Testimonials from "./Testimonial";

function Home(){
    return(
        <>
            <Navbar />
            <CardList />
            <Testimonials />
            <TabContent />
            <Footer />
        </>
    )
}

export default Home;