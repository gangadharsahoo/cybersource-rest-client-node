# CyberSource.Ptsv2paymentsidreversalsClientReferenceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Client-generated order reference or tracking number. CyberSource recommends that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  For information about tracking orders, see Getting Started with CyberSource Advanced for the SCMP API.  **FDC Nashville Global**\\ Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports.  | [optional] 
**comments** | **String** | Comments | [optional] 
**partner** | [**Ptsv2paymentsidreversalsClientReferenceInformationPartner**](Ptsv2paymentsidreversalsClientReferenceInformationPartner.md) |  | [optional] 


