import React from "react";
import {
  CDBSidebar,
  CDBBadge,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  let userID;
  const navigate = useNavigate();
  const user = useSelector((s) => s.user);

  //* se trae el id del usuario del local storage
  const newData = JSON.parse(
    localStorage.getItem("redux_localstorage_simple_user")
  );

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
    return navigate(`/users/${userID}`);
  }

  function gotoMyQuestion() {
    return navigate("/myquestions");
  }
  function gotoMyAnswers() {
    return navigate("/myanswers");
  }

  return (
    <div
      style={{
        display: "flex",
        height: "95vh",
        overflow: "scroll initial",
      }}
    >
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
                  intensity={900}
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
                        intensity={900}
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
            <a className="aboutUs" href="/aboutus" color="white">
              About us
            </a>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
