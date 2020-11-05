import React from 'react';
import {FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col} from 'reactstrap';

const Home = () => {
    return (
        <div>
            <div>
                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-zoom-split-in" />  
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search" type="text" />
                </InputGroup>
            </div>
        </div>
    )
}

export default Home
