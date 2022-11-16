import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import Table1 from './Table'

export default function Students() {

    return (
        <div className="text-center m-50-auto ">

            <h5>Personal Details</h5>
            <form action="/home">
                <p>
                    <label>Name of the student:</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Father's Name:</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Mother's Name</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Date of Birth:</label><br />
                    <input type="text" name="dateof_birth" required />
                </p>
                <p>
                    <label>Nationality:</label><br />
                    <input type="text" name="nationality" required />
                </p>
                <p>
                    <label>Citizenship No:</label><br />
                    <input type="number" name="citizenship" required />
                </p>
                <p>
                    <label>Contact Address:</label><br />
                    <input type="text" name="address" required />
                </p>
                <p>
                    <label>Email</label><br />
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Conatct No:</label><br />
                    <input type="number" name="residence" required />
                </p>
                <p>
                    <label>Conatct No:</label><br />
                    <input type="number" name="mobile_gurdian" required />
                </p>
                <p>
                    <label>Conatct No:</label><br />
                    <input type="number" name="mobile_student" required />
                </p>
                <Table1/>
                <p>
                    <button id="sub_btn" type="submit">Submit</button>
                </p>

            </form>


        </div>
    )

}


