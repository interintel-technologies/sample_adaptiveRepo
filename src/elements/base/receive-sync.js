import {utilsMixin} from "../../core/mixins/utils-mixin";
import {mqttMixin} from "../../core/mixins/mqtt-mixin";
import { BaseElement } from '../../core/base-element';


export const  ReceiveSyncBase = class extends utilsMixin(mqttMixin(BaseElement)){

    static get is(){return 'receive-sync'}
    static get properties(){
        return {
            icon: String,
            text: String,
            name: String,

        }
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        let self = this;

        if(self.e.kind) {
            try {
                self.register(self, self.e.kind);
            } catch (e) {
                console.error(e)
            }

        }

    }

    onMqttMessage(message) {
        super.onMqttMessage(message);

        var self = this;
        /*
        var payload = JSON.parse(message.payloadString);
        console.info(payload);
        self.$.datasource._parsePayload(payload);
        */

    }

    init(pElement, loader) {
        super.init(pElement,loader);
        this.required = pElement.min && pElement.min > 0;
        //this.name =  Text.toTitleCase(pElement.name);
        this.name =  ReceiveSyncBase.toTitleCase(pElement.name);
        this.text =  ReceiveSyncBase.toTitleCase(pElement.defaultValue);

    }


};
