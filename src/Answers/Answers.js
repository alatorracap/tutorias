import { useParams } from "react-router-dom";
import { useAnswers } from "../hooks/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Answers() {
  const { id } = useParams();
  const Answers = useAnswers(id);
  console.log("Answers", Answers);
  return (
    <div className="answersDiv">
      {Answers && (
        <>
          {/* <ListGroup>
                <ListGroupItem key={index}>{q.Answer}</ListGroupItem>
              </ListGroup> */}
          <DataTable
            value={Answers.data}
            paginator
            className="p-datatable-answers"
            rows={10}
            dataKey="id"
            //filters={filters}
            filterDisplay="row"
            loading={false}
            responsiveLayout="scroll"
            //</>globalFilterFields={[
            //"Title",
            //"Technology",
            //"QuestionDate",
            //"Answered",
            //]}
            //header={header}
            emptyMessage="No answers found."
          >
            <Column
              header="Answers"
              filterField="Answer"
              field="Answer"
              style={{ minWidth: "12rem" }}
              //filterElement={titleFilterTemplate}
              filter
              filterPlaceholder="Search by Word"
              showFilterMenu={false}
            />
          </DataTable>
        </>
      )}
    </div>
  );
}

export default Answers;
