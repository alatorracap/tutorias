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

const Sidebar = () => {
  let userID;
  const navigate = useNavigate();
  //const { setShowModalNewQUestion } = props;
  const user = useSelector((s) => s.user);

  //* se trae el id del usuario del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

  console.log(user);

  if (user && newData && newData.data) {
    userID = newData.data.info.id;
  }

  function gotoQuestions() {
    return navigate("/questions");
  }

  function gotoNewQuestion() {
    return navigate("/question");
  }

  function gotoProfile() {
    console.log("holis");
    return navigate(`/users/${userID}`);
  }

  function gotoMyQuestion() {
    return navigate("/myquestions");
  }
  function gotoMyAnswers() {
    return navigate("/myanswers");
  }
  return (
    // <aside
    //   className="sidebar"
    //   style={{
    //     overflow: "scroll initial",
    //     boxSizing: "border-box",
    //   }}
    // >
    <div
      style={{
        display: "flex",
        height: "95vh",
        overflow: "scroll initial",
      }}
    >
      {" "}
      <CDBSidebar textColor="white" backgroundColor="darkcyan">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large"></i>}
          style={{ borderBottom: "1px solid #ffffff85" }}
        >
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
                  <CDBSidebarMenuItem
                    icon="question"
                    suffix={
                      <CDBBadge
                        color="secondary"
                        size="small"
                        borderType="pill"
                      >
                        new
                      </CDBBadge>
                    }
                    onClick={gotoNewQuestion}
                  >
                    New Question
                  </CDBSidebarMenuItem>

                  <CDBSidebarMenuItem icon="bookmark" onClick={gotoMyQuestion}>
                    My Questions
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem icon="check" onClick={gotoMyAnswers}>
                    My Answers
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    icon="user"
                    onClick={(e) => {
                      e.preventDefault();
                      gotoProfile(userID);
                    }}
                  >
                    Profile
                  </CDBSidebarMenuItem>
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
    </div>
  );
};

export default Sidebar;
