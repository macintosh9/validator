/**
 * Class is used to validate any javscript object against a schema.
 */
export class Validator {
    
    /**
     * Check if an object validate against a schema.
     * If the types in the object are equal as in the schema return true
     * otherwise return false.
     * @param object Any javascript object.
     * @param schema A schema used to validate the object.
     * @returns Return true if the object types are e
     */
    public validate(object: any, schema: any): boolean {
        const keys = this.getProperties(schema);
        if(this.getProperties(object).length !== this.getProperties(schema).length) {
            return false;
        }

        const found = keys.find(key => {
            if (schema[key] === 'array') {
                return !Array.isArray(object[key]);
            } else if (Array.isArray(object[key]) && schema[key] !== 'array') {
                return true;
            } else {
                return typeof object[key] !== schema[key];
            }
        });

        return found ? false : true;
    }

    /**
     * Get the properties for an object.
     * @param object Any javascipt object.
     * @returns The properties of an object.
     */
    private getProperties(object: any): string[] {
        return Object.keys(object);
    }
}