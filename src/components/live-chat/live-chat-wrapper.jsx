import React, { useEffect, useState } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const LiveChatWrapper = (props) => {
  const [propertyID, setPropertyID] = useState(null);
  const [widgetID, setWidgetID] = useState(null);

  const { element } = props;
  

  useEffect(() => {
    if (element) {  
      setPropertyID("66fcecfce5982d6c7bb77ece");
      setWidgetID("1i95vrek7");
    }
  }, [element]);

  return (
    <div>
      {element && widgetID && propertyID && (
        <TawkMessengerReact
          propertyId={propertyID}
          widgetId={widgetID}
        />
      )}
    </div>
  );
};

export default LiveChatWrapper;
