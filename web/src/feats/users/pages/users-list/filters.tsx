import React from "react";
import styles from "@feats/users/pages/users-list/users-list.module.scss";
import { Dropdown, Textfield } from "react-untitled-ui";
import { Search } from "react-feather";
import { useUsersListFilters } from "@feats/users/pages/users-list/use-users-list";

export type FiltersProps = {}

export const Filters: React.FC<FiltersProps> = () => {
    const hook = useUsersListFilters()

    return <div className={ styles.filter }>
        <Textfield
            fullWidth
            onChange={ hook.handleSearchChange }
            value={ hook.search }
            id="search-for-users"
            label="Search for user"
            placeholder="Search"
            trailingIcon={ Search }/>
        <Dropdown
            fullWidth
            onChange={ hook.handleRoleChange }
            value={ hook.role }
            label="Role"
            id="role-dropdown"
            defaultValue={ {label: "All", value: ""} }
            options={ [
                {label: "All", value: ""},
                {label: "Admins", value: "admins"},
                {label: "Moderators", value: "moderators"},
                {label: "Translators", value: "translators"},
            ] }/>
        <Dropdown
            fullWidth
            value={ hook.status }
            onChange={ hook.handleStatusChange }
            label="Status"
            id="status-dropdown"
            defaultValue={ {label: "All", value: ""} }
            options={ [
                {label: "All", value: ""},
                {label: "Active", value: "active"},
                {label: "Inactive", value: "inactive"},
            ] }/>
    </div>
}