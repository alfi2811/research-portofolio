import React from 'react'
import { Divider } from 'antd';
import './style.scss';

class Page404 extends React.Component {

	render(){
		return(
			<div className="component-404">
        <h1>404</h1>
        <Divider type="vertical" />
        <h2>Page Not Found</h2>
      </div>
		);
	}
}
export default Page404