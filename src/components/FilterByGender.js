import React from 'react';

const FilterByGender = props => {

    const handleChange = (ev) =>{
        props.handleFilter({
            key: 'gender', 
            value: ev.target.value,
        });
    }
    return(
        <>
        <label htmlFor="gender">
            Gender:
        </label>
        <select name="gender" id="gender" onChange={handleChange}>
            <option value="all">All genders</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        </>
    )
}

export default FilterByGender;

// gender: filter by the given gender (female, male, genderless or unknown).