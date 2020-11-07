import React from 'react'
import styles from './SearchAndFilter.module.scss';
import Checkbox from '../../../util/Checkbox/Checkbox';
import {InputGroup, Input, Button, InputGroupText, InputGroupAddon, DropdownMenu, UncontrolledDropdown, DropdownToggle} from 'reactstrap';



const SearchAndFilter = (props: {handleChange: any, handleToggle: any, handleSearch: any}) => {

    return (
        <div className={styles.filterBar}>
            <div className={styles.filters}>
                <UncontrolledDropdown group>
                    <DropdownToggle caret color="primary">
                        Filter
                    </DropdownToggle>
                    <DropdownMenu className={styles.dropdownMenu}>
                        <Checkbox text={"Sports"} handleToggle={(event: any) => props.handleToggle(event, 'sports')}/>
                        <Checkbox text={"Entertainment"} handleToggle={(event: any) => props.handleToggle(event, 'entertainment')}/>
                        <Checkbox text={"Technology"} handleToggle={(event: any) => props.handleToggle(event, 'technology')}/>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <div className={styles.navSearch}>
                <InputGroup className="">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-zoom-split-in" />  
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search" type="text" id="search-bar" onChange={props.handleChange}/>
                    <Button color="primary" outline type="button" onClick={props.handleSearch}>Search</Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default SearchAndFilter
