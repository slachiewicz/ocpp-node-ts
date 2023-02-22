/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * This field indicates whether the Charging Station was able to accept the request.
 *
 *
 */
export type UpdateFirmwareStatusEnumType = "Accepted" | "Rejected" | "AcceptedCanceled" | "InvalidCertificate" | "RevokedCertificate";
export interface UrnOCPPCp220203UpdateFirmwareResponse {
    customData?: CustomDataType;
    status: UpdateFirmwareStatusEnumType;
    statusInfo?: StatusInfoType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
/**
 * Element providing more information about the status.
 *
 */
export interface StatusInfoType {
    customData?: CustomDataType;
    /**
     * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
     *
     */
    reasonCode: string;
    /**
     * Additional text to provide detailed information.
     *
     */
    additionalInfo?: string;
}
