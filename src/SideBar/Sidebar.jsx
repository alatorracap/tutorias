import React from "react";
import {
  CDBSidebar,
  CDBBadge,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarSubMenu,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div
//       style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: "inherit" }}
//           >
//             Biblioteca
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarMenu prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: "inherit", justifyItems: "center" }}
//           >
//             Frecuently Asked Questions
//           </a>
//         </CDBSidebarMenu>

//         <CDBSidebarMenu prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: "inherit", justifyItems: "center" }}
//           >
//             Technologies
//           </a>
//         </CDBSidebarMenu>

//         <CDBSidebarMenu prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{
//               color: "inherit",
//               justifyItems: "center",
//             }}
//           >
//             CDBSidebarMenu
//           </a>
//         </CDBSidebarMenu>

//         <CDBSidebarFooter style={{ textAlign: "center" }}>
//           <div
//             className="sidebar-btn-wrapper"
//             style={{
//               padding: "20px 5px",
//             }}
//           >
//             About us
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

const Sidebar = () => {
  return (
    <aside
      className="ourSidebar"
      style={{
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Just Ask
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem
              suffix={
                <CDBBadge color="danger" size="small" borderType="pill">
                  Top
                </CDBBadge>
              }
              icon="th-large"
            >
              Frecuently Asked
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="sticky-note"
              suffix={
                <CDBBadge color="secondary" size="small" borderType="pill">
                  new
                </CDBBadge>
              }
            >
              Profile
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <CDBSidebarMenu title="Sidemenu" icon="th">
              <NavLink exact to="/sub1" activeClassName="activeClicked">
                <CDBSidebarMenuItem>submenu 1</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/sub2" activeClassName="activeClicked">
                <CDBSidebarMenuItem>submenu 2</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/sub3" activeClassName="activeClicked">
                <CDBSidebarMenuItem>submenu 3</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            About us
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </aside>
  );
};

export default Sidebar;
