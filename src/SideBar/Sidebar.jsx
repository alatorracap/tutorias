import React from "react";
import {
  CDBSidebar,
  CDBBadge,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
  CDBSidebarSubMenu,
} from "cdbreact";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import ModalNewQuestion from "../Question/NewQuestion/NewQuestion";
import MenuItemNewQuestion from "../Question/NewQuestion/MenuItemNewQuestion";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const navigate = useNavigate();
  //const { setShowModalNewQUestion } = props;
  const user = useSelector((s) => s.user);
  console.log(user);

  function gotoQuestions() {
    console.log("holis");
    return navigate("/questions");
  }

  return (
    <aside
      className="sidebar"
      style={{
        overflow: "scroll initial",
        boxSizing: "border-box",
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
              onClick={gotoQuestions}
              suffix={
                <CDBBadge
                  margin-left="2px"
                  color="danger"
                  size="small"
                  borderType="pill"
                >
                  ★
                </CDBBadge>
              }
              icon="th-large"
            >
              Top Questions
            </CDBSidebarMenuItem>
            <>
              {user && (
                <>
                  <MenuItemNewQuestion />

                  <CDBSidebarMenuItem icon="bookmark">
                    My Questions
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem icon="check">
                    My Answers
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </>
              )}
            </>
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
