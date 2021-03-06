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
    define(['ApiClient', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails'), require('./TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo'), require('./TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo);
  }
}(this, function(ApiClient, TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails, TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo, TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedOrderInformation model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedOrderInformation</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation} The populated <code>TssV2TransactionsPost201ResponseEmbeddedOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;



  return exports;
}));


