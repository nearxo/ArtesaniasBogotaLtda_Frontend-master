import InNavBar from '../InNavBar'; 
import SidebarClient from './SidebarClient'; 
const BaseClient = ({ children }) => {
    return (
      <div className="flex">
        {/* Sidebar del cliente */}
        <SidebarClient />
  
        {/* Contenedor principal */}
        <div className="flex-grow">
          {/* Navbar interno */}
          <InNavBar />
  
          <main>{children}</main>
        </div>
      </div>
    );
  };
  
  export default BaseClient;