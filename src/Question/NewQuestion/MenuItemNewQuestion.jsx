import { CDBBadge, CDBSidebarMenuItem } from "cdbreact";
import AlejandriaModal from "../../Components/AlejandriaModal";
import NewQuestion from "./NewQuestion";

function MenuItemNewQuestion() {
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
      >
        New Question
      </CDBSidebarMenuItem>

      {/* Generic modal  */}
      <AlejandriaModal
        //   Title of generic modal
        title="New Question"
      >
        {/* Content of generic modal */}
        <NewQuestion />
      </AlejandriaModal>
    </>
  );
}
export default MenuItemNewQuestion;
