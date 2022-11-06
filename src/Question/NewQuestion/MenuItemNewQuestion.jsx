import { useState } from "react";
import { useDispatch } from "react-redux";

import { CDBBadge, CDBSidebarMenuItem } from "cdbreact";
import AlejandriaModal from "../../Components/AlejandriaModal";
import NewQuestion from "./NewQuestion";

function MenuItemNewQuestion() {
  const dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(false);

  // console.log(showModal);
  /* const setShowModalNewQUestion = async (e) => {
    console.log("HJOLISKFJD");
  }; */

  return (
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
        //onClick={() => setShowModal(true)}
      >
        New Question
      </CDBSidebarMenuItem>

      {/* Generic modal  */}
      <AlejandriaModal
        //   Title of generic modal
        title="New Question"
        // Boolean variable for show generic modal
        //show={showModal}
        // Function for change boolean variable for showing generic modal
        //setShow={setShowModal}
      >
        {/* Content of generic modal */}
        <NewQuestion />
      </AlejandriaModal>
    </>
  );
}
export default MenuItemNewQuestion;
