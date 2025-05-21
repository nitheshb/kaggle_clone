
import FeaturedPage from "../components/Featured/Featured"
import CompetitionNavbarA from '../components/layout/NavbarA';
function Featured() {
  return (
   <div className="bg-white min-h-screen">
         {/* Top navbar */}
         <CompetitionNavbarA visible={true} />
  <main className="pt-20 px-6 pb-10">
           
          <FeaturedPage />
          </main>
    </div>
  )}
export default Featured;