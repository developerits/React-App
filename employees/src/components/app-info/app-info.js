import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Учёт сторудников в компании N</h1>
      <h2>Общее число сторудников: {employees} </h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
};

export default AppInfo;
