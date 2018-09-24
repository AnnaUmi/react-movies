import React, { Component } from 'react'

export default class TableHeader extends Component {
    renderSortIcon = column => {
        const {sortColumn} = this.props;
        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />;
        return <i className="fa fa-sort-desc" />
    }
    reiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn === path) sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th key={column.path || column.key} onClick={() => this.reiseSort(column.path)}>
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        )
    }
}