import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Spin } from 'antd';
// Component
import NotFound from '../helper/components/404';

// Pages
// import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import UploadFile from '../pages/UploadFile';
import DetailResearch from '../pages/DetailResearch';
import Profile from '../pages/Profile';
import Bookmark from '../pages/Bookmark';
import EditUser from '../pages/EditUser';
import Admin from '../pages/Admin';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mainActions from '../redux/actions/main';
import ModalCont from '../partial/modal';



class Main extends Component {
	componentDidMount() {		
        // this.props.actionsMain.get_item();	
		// if(!window.localStorage.token) {
		// 	windown
		// }
	}	
  render() {
    return (
      <Router>
        <div id="Main" className="main-panel">		
        <Spin spinning={this.props.main.loader}>
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={Home} />							
              <Route exact path="/login" component={Login} />							
              <Route exact path="/register" component={Register} />							
              <Route exact path="/upload" component={UploadFile} />							
              <Route exact path="/detail-research/:id" component={DetailResearch} />																				
              <Route exact path="/profile" component={Profile} />																				
              <Route exact path="/bookmark" component={Bookmark} />
              <Route exact path="/edit-user" component={EditUser} />
              <Route exact path="/admin" component={Admin} />
              {/* <Route exact path="/term-and-condition" component={Tnc} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
          <ModalCont {...this.props} />
        </Spin>													
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