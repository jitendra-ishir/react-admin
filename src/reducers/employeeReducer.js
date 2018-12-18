const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      fetch("http://localhost/php-api/public/addEmployee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.data)
      });
      return { ...state, msg: "Data saved successfully." };

    case "EDIT_EMPLOYEE":
      return state.map(employee =>
        employee.emp_id === action.emp_id
          ? { ...employee, editing: !employee.editing }
          : employee
      );

    case "DELETE_EMPLOYEE":
      /*fetch("http://localhost/php-api/public/deleteEmployee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.data)
      });*/
      console.log(state);
      return state.filter(employee => employee.emp_id !== action.emp_id);
    default:
      return state;
  }
};
export default employeeReducer;
