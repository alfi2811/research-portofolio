import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Component
import NotFound from '../helper/components/404';

// Pages
// import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import UploadFile from '../pages/UploadFile';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mainActions from '../redux/actions/main';
import DetailResearch from '../pages/DetailResearch';



class Main extends Component {
	componentDidMount() {		
        // this.props.actionsMain.get_item();							
	}	

    render() {
        return (
            <Router>
				<div id="Main" className="main-panel">					
					<div className="content-container">
						<Switch>
							<Route exact path="/" component={Home} />							
							<Route exact path="/login" component={Login} />							
							<Route exact path="/register" component={Register} />							
							<Route exact path="/upload" component={UploadFile} />							
							<Route exact path="/detail-research" component={DetailResearch} />							
							<Route component={NotFound} />
						</Switch>
					</div>											
				</div>
			</Router>
        );
    }
}

function mapStateToProps(state) {
	return { main: state.main }
}

function mapDispatchToProps(dispatch) {
	return {		
		actionsMain: bindActionCreators(mainActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);