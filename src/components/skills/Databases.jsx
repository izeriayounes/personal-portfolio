import mongo from "../../assets/logos/mongo.svg";
import sqlServer from "../../assets/logos/sql-server.svg";
import firebase from "../../assets/logos/firebase.svg";
import postgresql from "../../assets/logos/postgresql.svg";

const databasesData = [
  { logo: mongo, name: "MongoDB" },
  { logo: sqlServer, name: "SQL Server" },
  { logo: firebase, name: "Firebase" },
  { logo: postgresql, name: "PostgreSQL" },
];

const Databases = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Databases</h3>
      <div className="skills__box">
        <div className="skills__group">
          {databasesData.map((database, index) => (
            <div className="skills__dataa" key={index}>
              <i className="uil">
                <img src={database.logo} alt={database.name} />
              </i>
              <div>
                <h3 className="skills__name">{database.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Databases;
