import { TokenType } from "../Types/APIKeyType";
import { AuthInfoType } from "../Types/AuthInfoType";
import { CombinedParameterDataType } from "../Types/CombinedParameterDataType";
import { AuthorizeMethod } from "../Types/Authorization/AuthorizeMethod";
import { APIPayloadType } from "../Types/APIPayloadType";
import { APISetObject } from "../Service/ApiSet/APISetObject";
import { APISet } from "../API/APISet";

export type optionObject = {
    scope?: {
        payloadName: string;
        scopes: string[];
        separateStr: string,
    };
    authToken: TokenType;
    imageUrl?: string;
};

export default interface IOAuth {
    // optional: step 0
    requestAuthToken?(
        baseUri: string,
        apiData: APISet,
        authInfo: AuthInfoType
    ): CombinedParameterDataType & { requiredPayload?: object };

    // required: step 1. Generate Authorization url
    authorizeUri(
        baseUri: string,
        apiData: APISet,
        authInfo: AuthInfoType,
        method: AuthorizeMethod,
        option?: optionObject
    ): string;

    // required: step 2
    // "verifier" is also known as "PIN"
    requestToken(
        baseUri: string,
        apiData: APISet,
        authInfo: AuthInfoType,
        verifier: string,
        option?: optionObject
    ): CombinedParameterDataType;

    // optional: step 3
    refreshToken?(
        baseUri: string,
        apiData: APISet,
        authInfo: AuthInfoType,
        token: TokenType
    ): CombinedParameterDataType;

    // required: autohorized data
    getAuthorizationData(
        baseUri: string,
        apiData: APISet,
        authInfo: AuthInfoType,
        token: TokenType,
        payload: APIPayloadType
    ): CombinedParameterDataType;
}
