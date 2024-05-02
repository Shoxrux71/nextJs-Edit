import React from "react";
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs";
import "../App.css";
import "./Table.css";

export const Table = () => {

    return <div className="table-wrapper">
        <table className="table">
            <thead>
                <tr>
                    <th>Page</th>
                    <th className="expand">Describtion</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Home</td>
                    <td>This is the main page</td>
                    <td>
                        <span className="label label-live">Live</span>
                    </td>
                    <td>
                        <span className="flex actions">
                            <BsFillTrashFill className="delete-btn" />
                            <BsFillPencilFill className="edit-btn"/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Page2</td>
                    <td>This is the section page</td>
                    <td>
                        <span className="label label-draft">Draft</span>
                    </td>
                    <td>
                    <span className="flex actions">
                            <BsFillTrashFill className="delete-btn" />
                            <BsFillPencilFill className="edit-btn"/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Page3</td>
                    <td>This is the section page</td>
                    <td>
                        <span className="label label-error">Draft</span>
                    </td>
                    <td>
                    <span className="flex actions">
                            <BsFillTrashFill className="delete-btn" />
                            <BsFillPencilFill className="edit-btn"/>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>;

};
