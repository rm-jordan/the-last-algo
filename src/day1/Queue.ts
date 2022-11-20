type QNode<T> = {
    value: T,
    next?: QNode<T>,

}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>; 
    private tail?: Node<T>; 
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {

        const node = {value:item} as Node<T>; 

        this.length++;
        if  (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
}
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        // first update head to point to next value then return previous head
        const head = this.head;
        this.head = this.head.next;

        // in other languages a free would be required -- this is being done so we "collect our own garbage"
        head.next = undefined; // <-- not required for JS/TS

        return head.value;
}
    peek(): T | undefined {
        // make sure your constructor is correct and then sort this out
        return this.head?.value;
}
}

// https://frontendmasters.com/courses/algorithms/queue/
// https://frontendmasters.com/courses/algorithms/implementing-a-queue/