/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_name?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof User
     */
    organizations: Array<number>;
}