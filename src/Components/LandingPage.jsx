
import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'
import { Link } from 'react-router-dom'
import bg from '../assets/ShopSphere.png'

const LandingPage = () => {

    let [bool, setBool] = useState(true)

    let handleBool = () => {
        setBool(!bool)
    }

    return (
        <>
            <div
                className="landing-page"
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                <div className="container">

                    <div className="btnbox">
                        <button
                            onClick={handleBool}
                            className={bool ? "" : "ryt"}
                        >
                            {bool ? "Admin" : "User"}
                        </button>
                    </div>

                    <div className="formbox">
                        {bool ? <AdminLogin /> : <UsersLogin />}
                    </div>

                    <div className="forget">
                        <Link>Forgotten Password?</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage
