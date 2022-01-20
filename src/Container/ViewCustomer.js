import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "../Firebase"

const View = () => {

    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('Users').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, []) 


    return (
        <div className="row py-4">
            <div className="col-md-8 offset-md-1">

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">IFSC</th>
                            <th scope="col">Account Number</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Balance(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    <td>{userObjects[id].fullName}</td>
                                    <td>{userObjects[id].ifsc}</td>
                                    <td>{userObjects[id].accountNumber}</td>
                                    <td>{userObjects[id].phone}</td>
                                    <td>{userObjects[id].balance}₹</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default View;