import React from "react";
import { Field, FieldLabel, FieldsContainer, PageContainer, Title } from "@feats/auth/pages/account/fields/fields";
import { Divider } from "react-untitled-ui";
import { Datatable, TableCheckbox } from "@core/components/datatable/datatable";
import { columns } from "@feats/auth/pages/account/tabs/team/columns";
import { useTeam } from "@feats/auth/pages/account/tabs/team/use-team";

export type TeamProps = {}

export const Team: React.FC<TeamProps> = () => {
    const {isLoading, data} = useTeam()

    if (isLoading) return <PageContainer type="table">
        <Title type="table">
            <h5>Team members</h5>
            <p>Manage your teams members and their account permissions here.</p>
        </Title>
        <Divider/>
    </PageContainer>

    return <PageContainer type="table">
        <Title type="table">
            <h5>Team members</h5>
            <p>Manage your teams members and their account permissions here.</p>
        </Title>
        <Divider/>

        {/* Admins */ }
        <Field>
            <FieldLabel>
                Admins
                <span>Admins can add and remove users and manage organization-level settings</span>
            </FieldLabel>
            <FieldsContainer>
                <Datatable
                    selectableRowsComponent={ TableCheckbox as unknown as React.ReactNode }
                    selectableRows
                    columns={ columns }
                    data={ data!.admins }/>
            </FieldsContainer>
        </Field>
        <Divider/>

        {/* Account users */ }
        <Field>
            <FieldLabel>
                Moderators
                <span>Moderators can ban or unban other users on team chats</span>
            </FieldLabel>
            <FieldsContainer>
                <Datatable
                    selectableRowsComponent={ TableCheckbox as unknown as React.ReactNode }
                    selectableRows
                    columns={ columns }
                    data={ data!.moderators }/>
            </FieldsContainer>
        </Field>
        <Divider/>

        {/* Account users */ }
        <Field>
            <FieldLabel>
                Translators
                <span>Translator can create, delete or edit website content translations</span>
            </FieldLabel>
            <FieldsContainer>
                <Datatable
                    selectableRowsComponent={ TableCheckbox as unknown as React.ReactNode }
                    selectableRows
                    columns={ columns }
                    data={ data!.translators }/>
            </FieldsContainer>
        </Field>
    </PageContainer>
}