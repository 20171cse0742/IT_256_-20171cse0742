import React, { Component } from 'react';
import './App.css';
import { Layout , Header ,Navigation ,Drawer ,Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
      < Header className="header-color" title= "My Portfolio" scroll>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">Aboutme</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Contents">
        <Navigation>
        <a href="/">resume</a>
        <a href="/">About</a>
        <a href="/">projects</a>
        <a href="/">Contact</a>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main></Main>
      </Content>
    </Layout>
</div>
    );
  }
}

export default App;