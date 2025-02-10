import InNavBar from '../InNavBar'; 
import SidebarAdmin from './SidebarAdmin'; 
const BaseAdmin = ({ children }) => {
    return (
      <div className="flex">
        {/* Sidebar del admin */}
        <SidebarAdmin />
  
        {/* Contenedor principal */}
        <div className="flex-grow">
          {/* Navbar interno */}
          <InNavBar />
  
          <main>{children}</main>
        </div>
      </div>
    );
  };
  
  export default BaseAdmin;