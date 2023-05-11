import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import "./sidebar.css"
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBIcon,
} from 'cdbreact';
import { Container } from 'react-bootstrap';
import RoutesDashboard from '../Routes/RoutesDashboard';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
function Sidebar() {
    const [t] = useTranslation();
    const nav = useNavigate()
    const hadelerLogout = () => {
      console.log("object");
      localStorage.removeItem("token")
      nav('/')
    }
    return (

<>
            <div className='d-flex'>
                <CDBSidebar className='sidebar position-sticky top-0 vh-100 '>
                    <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
                        {/* <Container className=' d-flex align-items-center'>
                        <img width="80%" src={require("../../assets/images/logo.png")} alt="logo" />
                        </Container> */}
                    </CDBSidebarHeader>

                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                       
                            <NavLink exact="true" to="admin/instructors" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon={"fa-solid fa-user-group"}>
                                {t('Users')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                           
                            <NavLink exact="true" to="admin/requestes" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-file-circle-question">
                                {t('Requestes')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                           
                            <NavLink exact="true" to="addCourses" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-book">
                                 {t('Courses')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="Blogs" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-envelopes-bulk">
                                    {t('Blogs')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="contacts" activeclassname="activeClicked"
                            >
                                <CDBSidebarMenuItem
                                    icon="fa-solid fa-message" >
                                    {t('Contacts')}
                                </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact="true" to="admin/addvideo" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon={"fa-solid fa-video"}>
                                    {t('AddVideo')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="admin/slider" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon={"fa-solid fa-images"}>
                                     {t('Slider')}
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter className=' text-center '>
                        <div className='px-1 py-3 cursor-pointer' onClick={hadelerLogout}>
                        {t('Logout')}
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

                <div className='w-100 p-4 overflow-scroll'>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Sidebar
