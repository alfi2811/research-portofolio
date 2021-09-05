import React, { useState } from 'react'
import './Filter.scss'
import { Checkbox, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { filter_research } from '../../redux/actions/main';

const Filter = ({ researches }) => {
  const dispatch = useDispatch()
  const [filtered, setFiltered] = useState([])
  function onChange(checkedValues) {      
      setFiltered(checkedValues)
  }
  const handleFilter = () => {    
    dispatch(filter_research(filtered))
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
              <Button shape="round" size="large" onClick={handleFilter}>
                  Apply
              </Button>
          </div>
      </div>
  )
}

export default Filter
