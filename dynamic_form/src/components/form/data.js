const reviewTypes = [
  {
    id: "quarterly-review",
    title: "Quarterly Review",
    fields: [
      {
        id: "year",
        title: "Year",
        type: "select",
        options: [2021, 2022, 2023],
        required: true,
      },
      {
        id: "quarter",
        title: "Quarter",
        type: "select",
        options: ["Q1", "Q2", "Q3", "Q4"],
        required: true,
      },
    ],
  },
  {
    id: "yearly-review",
    title: "Yearly Review",
    fields: [
      {
        id: "year",
        title: "Year",
        type: "text",
        required: true,
      },
    ],
  },
  {
    id: "project-review",
    title: "Project Review",
    fields: [
      {
        id: "description",
        title: "Description",
        type: "textarea",
        required: false,
      },
    ],
  },
];

export default reviewTypes
