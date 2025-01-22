//  https://www.polymer-project.org/3.0/docs/devguide/custom-elements#mixins
import {Paho} from '../libs/paho-mqtt';


// called when the client connects
function _onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log('onConnect');


  var ps = window.MQTTclient.p_registers;
  for (var i = ps.length - 1; i >= 0; i--) {
    const p = ps[i];
    // this._register(p['element'],p['channel']); // reduce below to this for re-usability

    var element = p['element'];
    var channel = p['channel'];
    // window.MQTTclient.splice(i, 1); // todo removal
    window.MQTTclient.client.subscribe(channel);
    if (!window.MQTTclient.registers[channel]) {
      window.MQTTclient.registers[channel] = [];
    }
    console.info('Subscribed to ' + channel + ' for ' + element);
    window.MQTTclient.registers[channel].push(element);
  }

  // message = new Paho.MQTT.Message("Hello");
  // message.destinationName = "World";
  // client.send(message);
}

// called when the client connection fails to initialize
function _onConnectFail() {
  console.log('onConnectFailure');
}

class Mqtt {
  setUp() {
    const self = this;
    if (window.MQTTclient) {
      // console.log('mqtt already initialized');
      return;
    }


    const host = window.location.hostname;
    const port = 443;
    const path = '/ws';
    const clientId = 'myclientid_' + parseInt(Math.random() * 10000, 10);


    // Create a client instance
    const client = new Paho.MQTT.Client(host, port, path, clientId);


    // Connect Options
    self.options = {
      timeout: 3,
      useSSL: true,
      cleanSession: true,
      userName: 'guest',
      password: 'guest',
      onSuccess: _onConnect,
      onFailure: _onConnectFail,
    };


    // is this okay, globalised MQTT manager
    window.MQTTclient = {};
    window.MQTTclient['client'] = client;

    window.MQTTclient.registers = {};
    window.MQTTclient.p_registers = [];

    // set callback handlers
    client.onConnectionLost = self._onConnectionLost;
    client.onMessageArrived = self._onMessageArrived;

    // connect the client
    this._connect();


    return this.client;
  }

  _connect() {
    // todo Disable mqtt connection till server ready
    // const client = window.MQTTclient['client'];
    // client.connect(this.options);
  }

  disconnect() {
    window.MQTTclient.client.disconnect();
  }


  // called when the client loses its connection
  _onConnectionLost(responseObject) {
    console.log(responseObject);

    console.log('onConnectionLost:' + responseObject.errorMessage);
    // this._connect();

    const client = window.MQTTclient['client'];
    client.connect({
      timeout: 3,
      useSSL: true,
      cleanSession: true,
      userName: 'guest',
      password: 'guest',
      onSuccess: _onConnect,
      onFailure: _onConnectFail,
    });
  }


  // called when a message arrives
  _onMessageArrived(message) {
    console.log('onMessageArrived');
    console.log(message);

    var elements = window.MQTTclient.registers[message.destinationName];

    if (elements) {
      elements.forEach(function(el) {
        // todo check if element implements this function
        el.onMqttMessage(message);
      });
    } else {
      console.error('message from un-subscribed channel: ' + message.destinationName);
    }
  }

  publish(message, destination) {
    var msg = new Paho.MQTT.Message(message);
    msg.destinationName = destination;
    this.client.send(msg);
  }

  subscribe(channel) {
    this.client.subscribe(channel);
    alert('Subscribed');
  }

  _register(element, channel) {
    window.MQTTclient.client.subscribe(channel);
    if (!window.MQTTclient.registers[channel]) {
      window.MQTTclient.registers[channel] = [];
    }
    console.info('Subscribed to ' + channel + ' for ' + element);
    window.MQTTclient.registers[channel].push(element);
  }

  register(element, channel) {
    // check for connection
    if (window.MQTTclient.client.isConnected()) {
      this._register(element, channel);
    } else {
      window.MQTTclient.p_registers.push(
        {
          'channel': channel,
          'element': element,
        }
      );
    }
  }

  registerG(element) {
    if (!window.MQTTclient.registers[window.MQTTclient.unique_session_channel]) {
      window.MQTTclient.registers[window.MQTTclient.unique_session_channel] = [];
    }

    window.MQTTclient.registers[window.MQTTclient.unique_session_channel].push(element);
  }

  connect() {
    console.log(JSON.stringify(this.options));
    // Using the HiveMQ public Broker, with a random client Id
    this.client.connect(this.options);
    // Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
  }
}
export const mqttMixin = (BaseClass) => class extends BaseClass {
  constructor() {
    super();
    const mqtt = new Mqtt();
    const c = mqtt.setUp();
    // console.log(c);
    this.mqtt = mqtt;
  }

  static get properties() {
    return {
      mqtt: Object,

    };
  }

  register(element, channel) {
    // check for connection
    if (window.MQTTclient.client.isConnected()) {
      this.mqtt._register(element, channel);
    } else {
      window.MQTTclient.p_registers.push(
        {
          'channel': channel,
          'element': element,
        }
      );
    }
  }

  onMqttMessage(message) {

  }
};

