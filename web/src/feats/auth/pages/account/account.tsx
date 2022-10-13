import React from "react";
import { Layout } from "@core/components/layout/layout";
import { accountTabs, useAccount } from "@feats/auth/pages/account/use-account";
import styles from "./account.module.scss";
import { Avatar, Badge, Button, Dropdown, Tab, TabList, TabPanel, Tabs } from "react-untitled-ui";
import { fullName } from "@feats/auth/entities";
import { UserPlus } from "react-feather";
import { PersonalInfo } from "@feats/auth/pages/account/tabs/personal-info/personal-info";
import MediaQuery from "react-responsive";
import { Password } from "@feats/auth/pages/account/tabs/password/password";
import { Team } from "@feats/auth/pages/account/tabs/team/team";

export const AccountPage: React.FC = () => {
    const hook = useAccount()

    return <Layout variant="full-width">
        <MediaQuery minWidth={ 576 }>
            <header className={ styles.header }>
                <img
                    draggable={ false }
                    className={ styles.gradient }
                    src="/gradient/gradient-1.png" alt=""/>
                <div className={ styles.userContainer }>
                    <Avatar size="lg" className={ styles.avatar }/>
                    <div className={ styles.userContent }>
                        <div className={ styles.userDetails }>
                            <h1>{ fullName(hook.user) }</h1>
                            <span className={ styles.email }>{ hook.user?.email }</span>
                        </div>
                        <div className={ styles.userActions }>
                            <Button
                                variant="secondary-gray"
                                trailingIcon={ UserPlus }>
                                Share
                            </Button>
                            <Button>
                                View profile
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={ styles.tabs }>
                    <Tabs
                        defaultIndex={ hook.activeTabIndex }
                        selectedIndex={ hook.activeTabIndex }
                        onSelect={ hook.handleTabChange }>
                        <TabList>
                            <Tab>Personal info</Tab>
                            <Tab>Password</Tab>
                            <Tab>Team <Badge>4</Badge></Tab>
                        </TabList>

                        <div className={ styles.content }>
                            <TabPanel><PersonalInfo/></TabPanel>
                            <TabPanel><Password/></TabPanel>
                            <TabPanel><Team/></TabPanel>
                        </div>
                    </Tabs>
                </div>
            </header>
        </MediaQuery>
        <MediaQuery maxWidth={ 575 }>
            <div className={ styles.mobileContent }>
                <div className={ styles.pageHeader }>
                    <h1>Account</h1>
                    <Dropdown
                        fullWidth
                        onChange={ hook.handleTabChangeByDropdown }
                        value={ hook.activeTabForDropdown }
                        options={ accountTabs }/>
                </div>
                <div className={ styles.content }>
                    { hook.activeTab === "personal-info" && <PersonalInfo/> }
                    { hook.activeTab === "password" && <Password/> }
                    { hook.activeTab === "team" && <Team/> }
                </div>
            </div>
        </MediaQuery>
    </Layout>
}