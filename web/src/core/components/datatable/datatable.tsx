import React from "react";
import CoreDataTable, { PaginationComponentProps, TableProps } from 'react-data-table-component';
import classNames from "classnames";
import "./datatable.scss"
import { Button } from "react-untitled-ui";
import { ArrowLeft, ArrowRight } from "react-feather";

export type DatatableProps<T> = TableProps<T>;

export const Datatable = <T, >(props: DatatableProps<T>) => {
    const className = classNames("datatable-component", props.className);
    return <CoreDataTable
        paginationComponent={ Pagination }
        { ...props }
        className={ className }/>
}

export const TableCheckbox: React.FC<any> = (props) => {
    const className = classNames(props.className, "untitled-checkbox untitled-sm")
    return <div className={ className }>
        <input type="checkbox" { ...props } className="untitled-checkbox__base"/>
    </div>
}

const Pagination: React.FC<PaginationComponentProps> = React.memo((props) => {
    const handlePrevClick = () => props.onChangePage(Math.max(props.currentPage - 1, 1), props.rowCount)
    const handleNextClick = () => props.onChangePage(Math.min(props.currentPage + 1, props.rowsPerPage), props.rowCount)

    return <div className="datatable-pagination">
        <Button variant="link-gray" trailingIcon={ ArrowLeft } size="sm" onClick={ handlePrevClick }>Previous</Button>
        <div className="numbers-list">
            { props.currentPage } of { Math.ceil(props.rowCount / props.rowsPerPage) }
        </div>
        <Button variant="link-gray" leadingIcon={ ArrowRight } size="sm" onClick={ handleNextClick }>Next</Button>
    </div>
})