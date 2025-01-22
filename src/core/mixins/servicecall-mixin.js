import React, { useState, useEffect } from 'react';
import withHttp from './http-mixin';

const withServiceCall = (WrappedComponent) => {
  const ServiceHOC = (props) => {
    
    const stringified_http_prop =JSON.stringify(props)

    const [loading, setLoading] = useState(false);
    const [service, setService] = useState(props.service || '');

    // Define serviceCallParams in the implementation component
    const serviceCallParams = () => {
      throw new Error('using "withServiceCall" must override "serviceCallParams"');
    };

    // Define parserConfig in the implementation component
    const parserConfig = () => {
      return {};
    };

    const callServiceParams = async (service, params) => {
      console.log(params)
      console.log("service is ",service);
      setLoading(true);
      try {
        const response = await props.call(service, params);
        response.parseAll(parserConfig());
        setLoading(false);
        return response;
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };

    const callService = async (service) => {
      return callServiceParams(service, serviceCallParams());
    };
     
    return (
      <WrappedComponent
        {...props}
        httpProps = {stringified_http_prop}
        loading={loading}
        callService={callService}
        callServiceParams={callServiceParams}
        service={service}
        setService={setService}
      />
    );
  };

  return withHttp(ServiceHOC);
};

export default withServiceCall;
