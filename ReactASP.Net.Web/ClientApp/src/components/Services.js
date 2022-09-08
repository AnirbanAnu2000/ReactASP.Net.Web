import React, { Component } from 'react';

export class Services extends Component {
    static displayName = Services.name;

    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service_banner d-flex justify-content-center align-items-center bg-primary" style={{ width: '100%', height: '400px' }}>
                                <h1 className='text-white fw-bold'>This Is Our Services Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
