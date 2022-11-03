import { useState } from "react";
import "./Question.css";
import { Link } from "react-router-dom";
import { useQuestions } from "../hooks/api";

// Import React Table

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { classNames } from "primereact/utils";
import "primeicons/primeicons.css";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

function Questions() {
  const [filter, setFilter] = useState({
    search: "",
    title: "",
    technology: "",
    questionDate: "",
    answered: "",
  });
  const [titleValue, setTitleValue] = useState("");
  // const technologies = process.env.REACT_APP_TECHNOLOGY.split(",");

  const questions = useQuestions(filter);
  //console.log(questions);
  questions &&
    questions.data.map((q) => {
      //Get Questions iteration date and save in a variable
      let dateFromQuestionsUnformated = q.QuestionDate;

      //Format date from Questions from String to datetime
      let dateFormated = new Date(dateFromQuestionsUnformated);

      //Update Question.data.QuestionDate with formatted date
      q.QuestionDate = dateFormated;

      return null;
    });

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Technology: { value: null, matchMode: FilterMatchMode.CONTAINS },
    QuestionDate: { value: null, matchMode: FilterMatchMode.DATE_IS },
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

  const handleTitleOnChange = (e) => {
    setTitleValue(e.target.value);
    console.log(e.target.value);
    const filterCopy = { ...filter };
    filterCopy.title = e.target.value;
    setFilter(filterCopy);
    console.log(filter);
  };

  const titleFilterTemplate = () => {
    return <InputText value={titleValue} onChange={handleTitleOnChange} />;
  };

  const titleBodyTemplate = (rowData) => {
    return <a href={`/question/${rowData.ID}`}> {rowData.Title}</a>;
  };

  const technologyBodyTemplate = (rowData) => {
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
        placeholder="Select a Technology"
        c
        lassName="p-column-filter"
        showClear
      />
    );
  };

  /* const dateRowFilterTemplate = (rowData) => {
    console.log(rowData);
    return (
      <input
        value={rowData.value}
        onChange={(e) => rowData.filterApplyCallback(e.value)}
      />
    );
  }; */

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
    return (
      <TriStateCheckbox
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value)}
      />
    );
  };

  const formatDate = (value) => {
    return new Date(value).toLocaleDateString({
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.QuestionDate);
  };

  const dateRowFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value)}
        dateFormat="dd/mm/yy"
        placeholder="dd/mm/yyyy"
        mask="99/99/9999"
      />
    );
  };

  // console.log("questions", questions);
  //console.log(questions && questions.data);
  return (
    <div className="questionDiv">
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
            className="p-datatable-questions"
            rows={10}
            dataKey="id"
            filters={filters}
            filterDisplay="row"
            loading={false}
            responsiveLayout="scroll"
            globalFilterFields={[
              "Title",
              "Technology",
              //"QuestionDate",
              //"Answered",
            ]}
            header={header}
            emptyMessage="No questions found."
          >
            <Column
              field="ID"
              header="ID"
              filter
              body={idBodyTemplate}
              filterPlaceholder="Search by ID"
              style={{ minWidth: "12rem", display: "none" }}
            />
            <Column
              header="Title"
              filterField="Title"
              field="Title"
              style={{ minWidth: "12rem" }}
              filterElement={titleFilterTemplate}
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
              filterPlaceholder="dd/m/yyyy"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "14rem" }}
              body={dateBodyTemplate}
              filter
              filterElement={dateRowFilterTemplate}
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
