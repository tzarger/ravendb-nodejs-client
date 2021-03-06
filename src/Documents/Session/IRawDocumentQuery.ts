import {IQueryBase} from "./IQueryBase";
import {IDocumentQueryBaseSingle} from "../Session/IDocumentQueryBaseSingle";
import {IEnumerableQuery} from "../Session/IEnumerableQuery";

export interface IRawDocumentQuery<T>
    extends IQueryBase<T, IRawDocumentQuery<T>>, IDocumentQueryBaseSingle<T>, IEnumerableQuery<T> {

    /**
     * Add a named parameter to the query
     */
    addParameter(name: string, value: object): IRawDocumentQuery<T>;
}