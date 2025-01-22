import React, { useEffect, useRef } from "react";
import './time-slot-picker';
import withDataSource from "../../core/mixins/datasource-mixin";

const TimeSlotWrapper = ({ data,cols,rows,element }) => {

    const timeSlotRef = useRef();

    useEffect(() => {
      if (timeSlotRef.current) {
        
          timeSlotRef.current.data = data;
          timeSlotRef.current.e = element;
          timeSlotRef.current.cols = cols;
          timeSlotRef.current.rows = rows;
      } else {
          console.log("timeSlotRef.current is not set");
      }
  }, [data, cols, rows, element]);
  
  

    return (
      <>
          {element ? <time-slot-picker ref={timeSlotRef}></time-slot-picker> : <p>Loading data...</p>}
      </>
  );
  
};

export default withDataSource(TimeSlotWrapper);
