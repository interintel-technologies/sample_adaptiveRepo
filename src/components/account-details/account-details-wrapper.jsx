import React, { useEffect, useRef } from 'react';
import withDataSource from '../../core/mixins/datasource-mixin';
import './account-details';


const AccountDetailsElementWrapper = ({ element, rows, cols }) => {


  const accountDetailsElementRef = useRef(null);

  useEffect(() => {
    if (accountDetailsElementRef.current) {
      const accountDetails = accountDetailsElementRef.current;

      // Pass rows and columns to the account-details
      accountDetails.cols = cols;
      accountDetails.rows = rows;

    }

   
  }, [cols, rows]);

  useEffect(() => {
    if (accountDetailsElementRef.current && element) {
      const accountDetails = accountDetailsElementRef.current;
      // If you need to assign 'element' properties as well
      accountDetails.e = element;
    }

 

  }, [element]);

  return (
    <account-details ref={accountDetailsElementRef}></account-details>
  );
};

export default withDataSource(AccountDetailsElementWrapper);
