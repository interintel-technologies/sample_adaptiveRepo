import React, { useEffect, useState } from 'react';
import './user-info.css'; // Import the CSS directly into the React component
import withDataSource from '../../core/mixins/datasource-mixin';

const UserInfo = ({ rows, columns }) => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (rows && columns) {
      const details = rows.map(row => 
        Object.fromEntries(row.map((rowValue, index) => 
          [columns[index].label, rowValue]
        ))
      )[0];
      setUserDetails(details);
    }
  }, [rows, columns]);

  if (!rows || rows.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="content">
      <div className="mainInfo">
        <div className="avtr has-text-centered">
          <span className="icon">
            <i className="fas fa-user-circle fa-5x"></i>
          </span>
          <div className="name">
            <h4>{rows[0][1]}</h4>
          </div>
        </div>
        <div className="columns is-mobile details is-multiline">
          <div className="column is-6 is-6-mobile">
            <h5>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              Email: <span className="has-text-weight-light ml-2">{rows[0][2]}</span>
            </h5>
          </div>
          <div className="column is-6 is-6-mobile">
            <h5>
              <span className="icon">
                <i className="fas fa-map-marker"></i>
              </span>
              Address: <span className="has-text-weight-light ml-2">{rows[0][3]}</span>
            </h5>
          </div>
          <div className="column is-6 is-6-mobile">
            <h5>
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
              Phone: <span className="has-text-weight-light ml-2">{rows[0][4]}</span>
            </h5>
          </div>
          <div className="column is-6 is-6-mobile">
            <h5>
              <span className="icon">
                <i className="fas fa-barcode"></i>
              </span>
              CustomerID: <span className="has-text-weight-light ml-2">{rows[0][5]}</span>
            </h5>
          </div>
        </div>

        <div className="columns otherDetails is-mobile is-multiline">
          {Object.entries(userDetails).slice(6, -5).map(([key, value]) => (
            <div className="column is-one-fifth-desktop is-6-mobile p-5" key={key}>
              <h4>{value}</h4>
              <h5 className="has-text-weight-light is-text-capitalized">{key}</h5>
            </div>
          ))}
        </div>

        <div className="columns is-multiline ftr is-mobile">
          {Object.entries(userDetails).slice(-5).map(([key, value]) => (
            <div className="column is-one-fifth-desktop is-6-mobile py-3 px-4" key={key} title={key}>
              <h5><a href={value}>{key}</a></h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withDataSource(UserInfo);
