import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initialazedThunk } from "./redux/appReduce";
import { RootReduxState } from "./redux/store";
import { compose } from "redux";
import { Preloader } from "./components/common/Preloader/Preloader";

type PropsType = mapStateToPropsType & mapDispatchType;
type mapStateToPropsType = {
  initialazed: boolean;
};
type mapDispatchType = {
  initialazedThunk: () => void;
};

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initialazedThunk();
  }

  render() {
    if (!this.props.initialazed) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootReduxState): mapStateToPropsType => ({
  initialazed: state.app.initialazed,
});
export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initialazedThunk }))(App);
