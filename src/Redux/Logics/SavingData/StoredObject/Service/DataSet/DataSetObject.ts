import { PairOfObject } from "../../../../HelperType/PairOfObject";
import { ISchema } from "../../../../DataFlow/Data/Dynamizr/Interfaces/ISchema";

export type DataSetObject = {
    key: string;
    targetDataKey?: string;
    extendErrorKey?: string;
    schemaDef: ISchema;
};

export type DataSetsObject = PairOfObject<DataSetObject>;