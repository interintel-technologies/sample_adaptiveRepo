import {GetGatewayDetails} from './get-gateway-details';

export class GetInstitutionDetails extends GetGatewayDetails {
  constructor(getInstitutionDetailsResponse, config) {
    super(getInstitutionDetailsResponse, config);
  }

  parse(config={}) {
    super.parse();
  }
}
