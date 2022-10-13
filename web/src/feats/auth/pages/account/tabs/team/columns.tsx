import { TableColumn } from "react-data-table-component";
import { formatCreatedAt, formatLastActiveAt, User } from "@feats/auth/entities";
import { UserCell } from "@core/components/datatable/cells/user/user-cell";
import { DeleteEditTableAction } from "@core/components/datatable/actions/delete-edit/delete-edit";

export const columns: TableColumn<User>[] = [
    {
        name: "Name",
        cell: UserCell,
        minWidth: "250px"
    },
    {
        name: "Date added",
        selector: user => formatCreatedAt(user),
        maxWidth: "150px",
    },
    {
        name: "Last active",
        selector: user => formatLastActiveAt(user),
        maxWidth: "150px",
    },
    {
        name: "",
        cell: () => <DeleteEditTableAction
            onDelete={ () => {} }
            onEdit={ () => {} }
        />,
        maxWidth: "120px"
    }
]