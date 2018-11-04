import React from 'react';
import { Link } from "react-router-dom";

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>${amount} - {createdAt}</p>
        </div>
    </div>
);

export default ExpenseListItem;