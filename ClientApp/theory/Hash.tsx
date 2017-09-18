import * as React from 'react';

export class Hash extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    public render() {
        return <div className="wrap row">
            <div className="content col-sm-9">
                <h2 className="title">Hashing</h2>
                <p><strong>Hash Function</strong>: A function that converts a given big phone number to a small practical integer value. The mapped integer value is used as an index in hash table. In simple terms, a hash function maps a big number or string to a small integer that can be used as index in hash table.
A good hash function should have following properties: <br />
                    1) Efficiently computable.<br />
                    2) Should uniformly distribute the keys (Each table position equally likely for each key)<br />
                </p>
                <p>
                    For example for phone numbers a bad hash function is to take first three digits. A better function is consider last three digits. Please note that this may not be the best hash function. There may be better ways.
                </p>
                <p>
                    <strong>Hash Table</strong>: An array that stores pointers to records corresponding to a given phone number. An entry in hash table is NIL if no existing phone number has hash function value equal to the index for the entry.
                </p>
                <p>
                    <strong>Collision Handling</strong>: Since a hash function gets us a small number for a big key, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision and must be handled using some collision handling technique. Following are the ways to handle collisions:
                </p>
                <p>
                    <strong>Chaining</strong>:The idea is to make each cell of hash table point to a linked list of records that have same hash function value. Chaining is simple, but requires additional memory outside the table. <br />
                    <strong>Open Addressing</strong>: In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we one by one examine table slots until the desired element is found or it is clear that the element is not in the table.
                </p>
            </div>
            <div className="side-panel col-sm-3">
                <img src="images/hash/hash_complexity.png" />
            </div>
        </div>;
    }
}