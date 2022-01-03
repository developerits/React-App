import Employees from "../employees/employees";
import "./staff.css";

const Staff = ({ data, onDelete, onToogleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Employees
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
        onToogleProp={(e) => {
          onToogleProp(id, e.currentTarget.getAttribute("data-toggle"));
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Staff;
