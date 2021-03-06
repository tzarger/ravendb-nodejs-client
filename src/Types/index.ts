export interface Todo {}

export interface EntitiesCollectionObject<TEntity> extends IRavenObject<TEntity> {
    [id: string]: TEntity;
}

export interface IRavenObject<T = any> {
    [property: string]: T;
}

export interface IRavenArrayResult {
    results: any[];
}

export interface ClassConstructor { 
    name: string;
    new(...args: any[]): any; 
}

export interface EntityConstructor<T extends Object> extends ClassConstructor { 
     new(...args: any[]): T; 
}

export type ObjectTypeDescriptor<T extends Object = Object> = EntityConstructor<T> | ObjectLiteralDescriptor<T>;

export abstract class EntityObjectLiteralDescriptor<T extends Object> implements ObjectLiteralDescriptor {
    public abstract name: string;
    public abstract isType(obj: object);
    public abstract construct(dto: object): T;
}

export interface ObjectLiteralDescriptor<TResult extends Object = Object> {
    name: string;
    isType(obj: object): boolean;
    construct(dto: object): TResult;
}

export abstract class PropsBasedObjectLiteralDescriptor<T extends Object> 
    implements EntityObjectLiteralDescriptor<T> {
    // if it quacks like a duck...

    public abstract name: string;
    public abstract properties: string[];
    public abstract construct(dto: object): T; 

    public isType(obj: object) {
        return this._hasProperties(obj);
    } 
    
    private _hasProperties(obj: object): boolean {
        return this.properties.reduce((result, property) => {
            return result && obj.hasOwnProperty(property);
        }, true);
    }
}