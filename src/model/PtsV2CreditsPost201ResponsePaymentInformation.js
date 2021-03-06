/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponsePaymentInformationBank'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponsePaymentInformationBank'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2CreditsPost201ResponsePaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationBank);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponsePaymentInformationBank) {
  'use strict';




  /**
   * The PtsV2CreditsPost201ResponsePaymentInformation model module.
   * @module model/PtsV2CreditsPost201ResponsePaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2CreditsPost201ResponsePaymentInformation</code>.
   * @alias module:model/PtsV2CreditsPost201ResponsePaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2CreditsPost201ResponsePaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2CreditsPost201ResponsePaymentInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2CreditsPost201ResponsePaymentInformation} The populated <code>PtsV2CreditsPost201ResponsePaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bank')) {
        obj['bank'] = PtsV2PaymentsPost201ResponsePaymentInformationBank.constructFromObject(data['bank']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;



  return exports;
}));


