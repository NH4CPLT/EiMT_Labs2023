/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function BookItem(props) {
    return (
        <tr>
            <td>{props.book.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.author.name + ' ' + props.book.author.surname}</td>
            <td>{props.book.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.book.id)}>
                    Delete
                </a>
                <a onClick={() => props.onEdit(props.book.id)}
                    className={"btn btn-info ml-2"} href={`/books/${props.book.id}/edit`}>Edit</a>

                <a onClick={() => props.markAsTaken(props.book.id)}
                    className={"btn btn-success ml-2"} > Mark As Taken</a>
            </td>
        </tr>
    )
}

export default BookItem;
