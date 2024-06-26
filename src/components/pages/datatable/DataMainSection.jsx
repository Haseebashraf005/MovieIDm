import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Data } from "../../../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DataMainSection = () => {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(Data);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);

        const filtered = Data.filter(item =>
            item.Name.toLowerCase().includes(value.toLowerCase()) ||
            item.Position.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase()) ||
            item.gender.toLowerCase().includes(value.toLowerCase()) ||
            item.Age.toString().includes(value.toLowerCase()) ||
            item.Salary.toString().includes(value.toLowerCase())
        );

        setFilteredData(filtered);
    };

    const clearSearch = () => {
        setSearch("");
        setFilteredData(Data);
    };

    const customStyles = {
        header: {
            style: {
            },
        },
        headCells: {
            style: {
                justifyContent: 'center',
                textAlign: 'center',
                fontSize:"20px"
            },
        },
        cells: {
            style: {
                justifyContent: 'center',
                textAlign: 'center',
                fontSize:"15px"
            },
        },
    };

    let columns = [
        {
            name: "Name",
            selector: row => row.Name,
            sortable: true,
        },
        {
            name: "Position",
            selector: row => row.Position,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "Gender",
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: "Age",
            selector: row => row.Age,
            sortable: true,
        },
        {
            name: "Salary",
            selector: row => row.Salary,
            sortable: true,
        }
    ];

    return (
        <div className="container-fluid">
            <DataTable
                data={filteredData}
                columns={columns}
                title="Employee List"
                pagination
                fixedHeader
                fixedHeaderScrollHeight="70vh"
                highlightOnHover
                striped
                subHeader
                subHeaderComponent={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            placeholder="Search here"
                            className="form-control"
                            value={search}
                            onChange={handleSearch}
                            style={{ marginRight: '10px' }}
                        />
                        {search && (
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={clearSearch}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                    </div>
                }
                customStyles={customStyles}
            />
        </div>
    );
};

export default DataMainSection;
