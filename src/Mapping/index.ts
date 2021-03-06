import { JsonSerializer, camelCaseReviver, pascalCaseReplacer } from "./Json";
import { TypesAwareObjectMapper } from "./ObjectMapper";
import { DateUtil } from "../Utility/DateUtil";

// needed tools
// json string -> casing aware -> object
// json string -> casing aware -> types aware -> entity

export { JsonSerializer };

export class Mapping {
    
    private static _defaultMapper: TypesAwareObjectMapper;

    public static getDefaultMapper() {
        if (!this._defaultMapper) {
            this._defaultMapper = new TypesAwareObjectMapper({
                dateFormat: DateUtil.DEFAULT_DATE_FORMAT
            });
        }

        return this._defaultMapper;
    }
}
