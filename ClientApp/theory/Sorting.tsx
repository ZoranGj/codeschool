import * as React from 'react';

export class Sorting extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    public render() {
        return <div className="wrap row">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" href="#insertion" role="tab" data-toggle="tab">Insertion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#quick" role="tab" data-toggle="tab">Quick</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#bubble" role="tab" data-toggle="tab">Bubble</a>
                </li>
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active content col-sm-9 " id="insertion">
                    <div className="content col-sm-9">
                        <h2 className="title">Insertion</h2>
                    </div>
                    <div className="side-panel col-sm-3">
                        <img src="images/hash/hash_complexity.png" />
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="quick">
                    <div className="content col-sm-9">
                        <h2 className="title">Quick sort</h2>
                    </div>
                    <div className="side-panel col-sm-3">
                        <img src="images/hash/hash_complexity.png" />
                    </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="bubble">
                    <div className="content col-sm-9">
                        <h2 className="title">Bubble sort</h2>
                    </div>
                    <div className="side-panel col-sm-3">
                        <img src="images/hash/hash_complexity.png" />
                    </div>
                </div>
            </div>
        </div>;
    }
}