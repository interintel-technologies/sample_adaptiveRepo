import React, { useState, useEffect } from 'react';
import { DataSource } from '../parsers/commands/data-source';
import { Logger } from '../logger.js';
import withServiceCall from './servicecall-mixin.js';
import { callAxios } from './http-mixin.js';

const withDataSource = (WrappedComponent) => {
  const HOC = (props) => {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    const [groups, setGroups] = useState([]);
    const [columns, setColumns] = useState([]);
    const [lines, setLines] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [empty, setEmpty] = useState(false);
    const [isDscLoading, setIsDscLoading] = useState(false);
    const [dscParams, setDscParams] = useState({});

    const loadData = async (filterValue = '') => {
      
      setIsDscLoading(true);
      try {
       ;
        const response = await callAxios('DATA SOURCE', serviceCallParams(filterValue), true);
        
        const dataSource = new DataSource(response, parserConfig());
        
        setData(dataSource.data);
        setRows(dataSource.rows);
        setCols(dataSource.cols);
        setGroups(dataSource.groups);
        setColumns(dataSource.columns);
        setLines(dataSource.commandResponse.response.response.data_source.lines);
        setTotalElements(dataSource.totalElements);
        setTotalPages(Math.ceil(dataSource.totalElements / limit));
        setEmpty(!(dataSource.rows.length || dataSource.groups.length || dataSource.data.length || dataSource.commandResponse.response.response.data_source.lines));
        setIsDscLoading(false);
      } catch (error) {
        Logger.i.error(error);
      } finally {
        setIsDscLoading(false);
      }
    };

    const serviceCallParams = (filterValue = '') => {
      
      const params = { ...dscParams, data_name: props.element.defaultValue, limit, page };
      

      if (filterValue) {
        params['search'] = filterValue;
      }

      if (props.element && props.element.details.params) {
      props.e.detals.params.forEach(key => {
          if (key in props.params) {
            params[key] = props.params[key];
          }
        });
      }
      
      return params;
    };

    const parserConfig = () => ({
      responseType: Symbol.for('LIST'),
    });

    const refresh = () => {
      setDscParams(prevParams => {
        // Check if props.e.details.params exists
        if (props.element && props.element.details && props.element.details.params) {
          // Filter to retain only the keys in props.e.details.params
          const allowedKeys = props.element.details.params;
          const filteredParams = Object.keys(prevParams)
            .filter(key => allowedKeys.includes(key))
            .reduce((acc, key) => {
              acc[key] = prevParams[key];
              return acc;
            }, {});
          return filteredParams;
        }
        // If no params to retain, reset to an empty object
        return {};
      });
      loadData(); // Reload with updated parameters
    };
    

    const mergeParams = (newParams) => {
      setDscParams(prevParams => ({ ...prevParams, ...newParams }));
    };

    const updateParams = (key, value) => {
      let reload = true;
    
      // Access current state (dscParams)
      setDscParams(prevParams => {
        // Check if key doesn't exist and value is undefined, or if value is unchanged
        if (!(key in prevParams) && value === undefined) {
          reload = false;
        } else if (key in prevParams && value === prevParams[key]) {
          reload = false;
        } else {
          // Update the state with the new value
          prevParams = { ...prevParams, [key]: value };
        }
    
        return prevParams;
      });

    };
    

    const deleteParamKeys = (keys, refresh = true) => {
      let paramsChanged = false;
      
      // Update the state with new parameters
      setDscParams(prevParams => {
        const updatedParams = { ...prevParams };
    
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (key in prevParams) {
            // should check equality
            paramsChanged = true;
    
            delete updatedParams[key];
          }
        }
    
        // Return the updated parameters
        return updatedParams;
      });
    

    };
    

    useEffect(() => {
      loadData();
    }, [page, limit, dscParams,page]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        rows={rows}
        cols={cols}
        groups={groups}
        columns={columns}
        lines={lines}
        page={page}
        limit={limit}
        setLimit={setLimit}
        totalElements={totalElements}
        totalPages={totalPages}
        empty={empty}
        isDscLoading={isDscLoading}
        refresh={refresh}
        mergeParams={mergeParams}
        updateParams={updateParams}
        deleteParamKeys={deleteParamKeys}
        loadData={loadData}
        setPage={setPage}
      />
    );
  };

  return withServiceCall(HOC);
};

export default withDataSource;