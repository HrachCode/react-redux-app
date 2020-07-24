import React from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {BugOutlined, StarFilled, SettingOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './style.scss'

export default function () {

    return (

        <div className="sidebar">
            <ProSidebar>

                <Menu iconShape="square">
                    <SidebarHeader>
                        <MenuItem icon={< BugOutlined />}>Dashboard  
                        <Link to="/antdmenue"/></MenuItem>

                    </SidebarHeader>
                    <SidebarContent>
                        <MenuItem icon={< BugOutlined />}>Dashboard
                            <Link to="/antdmenue"/></MenuItem>
                        <MenuItem icon={< BugOutlined />}>Dashboard</MenuItem>
                        <MenuItem icon={< BugOutlined />}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={< StarFilled />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <SubMenu title="Components" icon={< SettingOutlined />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <SubMenu title="Components" icon={< SettingOutlined />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </SidebarContent>

                </Menu>
            </ProSidebar>
        </div>

    )
}