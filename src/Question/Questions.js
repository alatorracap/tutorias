import { useMemo, useState } from "react";
import "./Question.css";
import { Link } from "react-router-dom";
import { useQuestions } from "../hooks/api";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import Table from "../Components/AlejandriaTable";

// Import React Table
import ReactTable from "react-table";
//import "react-table/react-table.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import "primeicons/primeicons.css";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

function Questions() {
  const filter = {
    search: "",
    title: "",
    technology: "",
    questionDate: "",
    answered: "",
  };
  // const technologies = process.env.REACT_APP_TECHNOLOGY.split(",");

  const questions = useQuestions(filter);
  const [filters, setFilters] = useState({
    Technology: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Answered: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const onGlobalFilterChange = (e) => {
    console.log("holitas");
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  const idBodyTemplate = (rowData) => {
    return rowData.ID;
  };

  const titleBodyTemplate = (rowData) => {
    return rowData.Title;
  };

  const technologyBodyTemplate = (rowData) => {
    console.log("RR", rowData.Technology);
    return (
      <span className={`customer-badge status-${rowData.Technology}`}>
        {rowData.Technology}
      </span>
    );
  };

  const technologies = ["JavaScript", "CSS", "Node", "SQL", "React", "HTML"];

  // const technologyFilterTemplate = (options) => {
  //   console.log("jj", options);
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={technologies}
  //       onChange={(e) => options.filterCallback(e.value, options.index)}
  //       itemTemplate={technologyItemTemplate}
  //       placeholder="Select a technology"
  //       className="p-column-filter"
  //       showClear
  //     />
  //   );
  // };

  const technologyItemTemplate = (option) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };

  const technologyFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={technologies}
        onChange={(e) => options.filterApplyCallback(e.value)}
        itemTemplate={technologyItemTemplate}
        placeholder="Select a Status"
        c
        lassName="p-column-filter"
        showClear
      />
    );
  };

  const answeredBodyTemplate = (rowData) => {
    return (
      <i
        className={classNames("pi", {
          "true-icon pi-check-circle": rowData.Answered === "true",
          "false-icon pi-times-circle": rowData.Answered === "false",
        })}
      ></i>
    );
  };

  const answeredRowFilterTemplate = (options) => {
    console.log(options);
    return (
      <TriStateCheckbox
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value)}
      />
    );
  };

  const formatDate = (value) => {
    console.log(value);
    return new Date(value).toLocaleDateString({
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.QuestionDate);
  };

  // console.log("questions", questions);
  console.log(questions && questions.data);
  return (
    <div className="questionDiv">
      Questions
      {questions && (
        <>
          {/* <ListGroup>
            {questions.data.map((q, index) => (
              <ListGroupItem key={index} action variant="light">
                <Link to={`/question/${q.ID}`}> {q.Title}</Link>
              </ListGroupItem>
            ))}
          </ListGroup> */}
          <DataTable
            value={questions.data}
            paginator
            className="p-datatable-customers"
            rows={10}
            dataKey="id"
            filters={filters}
            filterDisplay="row"
            loading={false}
            responsiveLayout="scroll"
            // globalFilterFields={[
            //   "Title",
            //   "Technology",
            //   "QuestionDate",
            //   "Answered",
            // ]}
            header={header}
            emptyMessage="No questions found."
          >
            <Column
              field="ID"
              header="ID"
              filter
              body={idBodyTemplate}
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem", display: "none" }}
            />
            <Column
              header="Title"
              filterField="Title"
              style={{ minWidth: "12rem" }}
              body={titleBodyTemplate}
              filter
              filterPlaceholder="Search by Title"
              showFilterMenu={false}
            />
            <Column
              field="Technology"
              header="Technology"
              // filterField="Technology"
              showFilterMenu={false}
              style={{ minWidth: "12rem" }}
              body={technologyBodyTemplate}
              filter
              filterElement={technologyFilterTemplate}
            />
            <Column
              header="Question date"
              filterField="QuestionDate"
              showFilterMenu={false}
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "14rem" }}
              body={dateBodyTemplate}
              filter
              //filterElement={representativeRowFilterTemplate}
            />
            <Column
              field="Answered"
              header="Answered"
              style={{ minWidth: "6rem" }}
              body={answeredBodyTemplate}
              filter
              filterElement={answeredRowFilterTemplate}
              showFilterMenu={false}
            />
            {/* <Column
                field="status"
                header="Status"
                showFilterMenu={false}
                filterMenuStyle={{ width: "14rem" }}
                style={{ minWidth: "12rem" }}
                body={statusBodyTemplate}
                filter
                filterElement={statusRowFilterTemplate}
              />
              <Column
                field="verified"
                header="Verified"
                dataType="boolean"
                style={{ minWidth: "6rem" }}
                body={verifiedBodyTemplate}
                filter
                filterElement={verifiedRowFilterTemplate}
              /> */}
          </DataTable>
        </>
      )}
    </div>
  );
}

export default Questions;
