import React, { useMemo } from 'react'
import { Layout, Menu } from 'antd'

import { IAppLayoutProps } from './types'
import MFSearch from 'remote/MFSearch';


import './app-layout.less'

export const AppLayout = ({ children, actions }: IAppLayoutProps) => {
  const items = useMemo(
    () => actions?.map(({ key, title, action }) => ({ key: key ?? title, label: title, onClick: () => { action() } })) ?? [],
    [ actions ])

  const onRemoteChange = (remoteResponse: string) => {
    console.log('messageFromRemote', remoteResponse);
  }

  return <Layout className="app-layout">
    <Layout.Header className="app-layout-header">
      <div className="logo" />
      {items.length > 0 && <Menu theme="dark" mode="horizontal" items={items} selectedKeys={[]} />}
    </Layout.Header>
    <Layout>
      <Layout.Sider className="app-layout-sider" width={350}>
        <MFSearch onChange={onRemoteChange} />
        {/* Module Federation */}
      </Layout.Sider>
      <Layout.Content className="app-layout-content">
        {children}
      </Layout.Content>
    </Layout>
    <Layout.Footer className="app-layout-footer">
      User Table ©{new Date().getFullYear()} Created by OIS
    </Layout.Footer>
  </Layout>
}
