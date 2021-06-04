import React from 'react'
import "./App.css";
import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <h3 className="logo">Q-Bookmark</h3>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  );
}

export default App;
