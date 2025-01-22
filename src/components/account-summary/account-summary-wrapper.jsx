import React, { useEffect, useRef } from 'react';
import withDataSource from '../../core/mixins/datasource-mixin';
import './account-summary';


const AccountSummary = ({ element, rows, cols }) => {


  const accountSummaryElementRef = useRef(null);

  useEffect(() => {
    if (accountSummaryElementRef.current) {
      const accountSummaryElement = accountSummaryElementRef.current;

      // Pass rows and columns to the account-summary
      accountSummaryElement.cols = cols;
      accountSummaryElement.rows = rows;

    }

   
  }, [cols, rows]);

  useEffect(() => {
    if (accountSummaryElementRef.current && element) {
      const accountSummaryElement = accountSummaryElementRef.current;
      // If you need to assign 'element' properties as well
      accountSummaryElement.e = element;
    }

 

  }, [element]);

  return (
    <account-summary ref={accountSummaryElementRef}></account-summary>
  );
};


const AccountSummaryWraper = withDataSource(AccountSummary);
export default AccountSummaryWraper
