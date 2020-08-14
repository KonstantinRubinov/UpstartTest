export class MyData {
    // private _id: string;
    // private _name: string;
    // private _description: string;
    // private _amount: number;
    // private _date: Date;
    // private _isPrivate: boolean;

    public constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public amount?: number,
        public date?: Date,
        public isPrivate?: boolean
    ) { 
        // this.id = id;
        // this.name = name;
        // this.description = description;
        // this.amount = amount;
        // this.date = date;
        // this.isPrivate = isPrivate;
    }

    // get id():string{
    //     console.debug("get id: " + JSON.stringify(this._id));
    //     return this._id;
    // }

    // set id(val){
    //     this._id=val;
    //     console.debug("set id: " + JSON.stringify(this._id));
    // }

    // get name():string{
    //     console.debug("get name: " + JSON.stringify(this._name));
    //     return this._name;
    // }

    // set name(val){
    //     this._name=val;
    //     console.debug("set name: " + JSON.stringify(this._name));
    // }

    // get description():string{
    //     console.debug("get description: " + JSON.stringify(this._description));
    //     return this._description;
    // }

    // set description(val){
    //     this._description=val;
    //     console.debug("set description: " + JSON.stringify(this._description));
    // }

    // get amount():number{
    //     console.debug("get amount: " + JSON.stringify(this._amount));
    //     return this._amount;
    // }

    // set amount(val){
    //     this._amount=val;
    //     console.debug("set amount: " + JSON.stringify(this._amount));
    // }

    // get date():Date{
    //     console.debug("get date: " + JSON.stringify(this._date));
    //     if(this._date instanceof Date){
    //         return this._date;
    //     }
	// 	return new Date();
    // }

    // set date(val){
    //     this._date=new Date(val);
    //     console.debug("set date: " + JSON.stringify(this._date));
    // }

    // get isPrivate():boolean{
    //     console.debug("get isPrivate: " + JSON.stringify(this._isPrivate));
    //     return this._isPrivate;
    // }

    // set isPrivate(val){
    //     this._isPrivate=val;
    //     console.debug("set isPrivate: " + JSON.stringify(this._isPrivate));
    // }
}