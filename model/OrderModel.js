export class OrderModel{

    constructor(order_id,customer_id,total,items,date) {
        this._order_id = order_id;
        this._customer_id = customer_id;
        this._total = total;
        this._items = items;
        this._date = date;
    }


    get order_id() {
        return this._order_id;
    }

    set order_id(value) {
        this._order_id = value;
    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}