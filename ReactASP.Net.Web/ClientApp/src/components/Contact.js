import React, { Component } from 'react';

export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service_banner d-flex justify-content-center align-items-center bg-danger" style={{ width: '100%', height: '400px' }}>
                                <h1 className='text-white fw-bold'>This Is Contact Us Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
