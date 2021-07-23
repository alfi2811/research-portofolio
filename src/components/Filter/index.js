import React from 'react'
import './Filter.scss'
import { Checkbox, Button } from 'antd';

const Filter = () => {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    const options = [
        { label: 'Most Read', value: 'MostRead' },
        { label: 'A - Z', value: 'AZ' },
        { label: 'Z - A', value: 'ZA' },
        { label: 'Newest', value: 'Newest' },
        { label: 'Oldest', value: 'Oldest' },
    ];

    return (
        <div className="filter-container">
            <h1 className="title">
               Filter 
            </h1>
            <div className="filter-group">
                <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
            </div>
            <div className="apply-btn">
                <Button shape="round" size="large">
                    Apply
                </Button>
            </div>
        </div>
    )
}

export default Filter
