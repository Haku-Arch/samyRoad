import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiSearch } from "react-icons/fi";

import Logo from "../img/samyroad.jpg"

const Navbar = ({handleChange, value}) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white py-2">
            <div className="container-fluid">
                <div className="float-start float-sm-start ms-5 my-3">
                    <img src={Logo} height={130} width={130}  />
                </div>
                          
                <div className="float-end float-sm-end me-5 my-3 search-size">
                    <InputGroup className="form-control me-2 search-input" onChange={handleChange} value={value}>
                    <div className='align-middle'>
                        <FiSearch size="20" />
                    </div>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            className="search-input w-50"
                            placeholder="You're looking for something?"
                            size="sm"
                        />
                    </InputGroup>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar