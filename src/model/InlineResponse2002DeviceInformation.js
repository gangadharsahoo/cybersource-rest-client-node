/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2002DeviceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2002DeviceInformation model module.
   * @module model/InlineResponse2002DeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2002DeviceInformation</code>.
   * @alias module:model/InlineResponse2002DeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2002DeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002DeviceInformation} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002DeviceInformation} The populated <code>InlineResponse2002DeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('fingerprintId')) {
        obj['fingerprintId'] = ApiClient.convertToType(data['fingerprintId'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * TBD
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * TBD
   * @member {String} fingerprintId
   */
  exports.prototype['fingerprintId'] = undefined;
  /**
   * IP address of the customer.
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;



  return exports;
}));

