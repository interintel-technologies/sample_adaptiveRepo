
import {Logger} from '../logger';
import {STATUS_SUCCESS} from '../../core/parsers/response';
import { httpMixin } from './http-mixin-2';
;

export const fileUploadMixin = (BaseClass) => class extends httpMixin(BaseClass) {
  constructor() {
    super();
  }

  // TODO #271 fire events or callbacks for watching the file reader onload and return the src for previewing
  // TODO #271 fire events or callbacks for watching the upload progress

  /**
    * Temp File Uploader
    *
    * @param {File} file attribute of form file field
    * @param {string} name the file name  can `image` for images or `file` for files
    * @param {RegExp} types a regex to use for matching allowed file types
    * @param {number} fileSizeLimit a number in bytes that will be used to set the maxAllowedFileSize
    * @return {Promise}
    */
  uploadTempFile(file, name, types,fileSizeLimit) {
    const self = this;


    return new Promise(function(resolve, reject) {
      if (types && !file.type.match(types)) {
        Logger.i.incompleteDev('File type not supported!');
        reject(new Error('File not supported!'));
      }

      // let maxAllowedFileSize = 25000000; // size in bytes that is 25MB
      let maxAllowedFileSize

      if(fileSizeLimit != undefined ){
        maxAllowedFileSize = fileSizeLimit;
      }else{
        //default max allowed size
        maxAllowedFileSize = 12000000; // size in bytes that is 12MB
      }
      if (file.size > maxAllowedFileSize) {
        // todo is this the 2MB? make this an api from a mixin
        reject(new Error('File Size is Above allowed Limit of '+maxAllowedFileSize+" bytes!"));
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        self.send({
          url: self.baseUrl() + '/api/upload-temp-file/',
          body: formData,
          method: 'POST',
          handleAs: 'json',
          headers: {
            'X-File-Name': file.name,
            'X-File-Size': file.size,
            'X-File-Type': file.type,
          },

        }).then(req => {
          // TODO perform temp file response parsing
          const response = req.response;

          if ('response_status' in response && response['response_status'] === STATUS_SUCCESS) {
            resolve({
              'name': file.name,
              'response': response.response,
              'result': e.target.result,
            });
          }
          else {
            if ('response' in response) {
              reject(new Error(response.response));
            }
            else {
              console.error('[this should never happen]');
              reject(new Error('Upload Failed.'));
            }
          }

          resolve(req);
        }).catch(rejected => {
          reject(rejected);
        });
      };
      reader.readAsDataURL(file);

      // Send the file (doh)
      const formData = new FormData();
      formData.append(name, file);
    });
  }
};

