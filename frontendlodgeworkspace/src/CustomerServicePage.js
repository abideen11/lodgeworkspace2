import React, { useState } from 'react';

export default function CustomerServicePage() {
    const [supportOptions, setSupportOptions] = useState([{id: 1, topic: "Check FAQ page", detail: "Please check the FAQ page to see if your questions can be answered there."},{id: 2, topic: "Phone Number", detail: "888-888-8888"},{id: 3, topic: "Email", detail: "flathoppersupport@genericwebsite.com"}])
    const [supportOptions2, setSupportOptions2] = useState([{id: 1, topic: "Check FAQ page", detail: "Please check the FAQ page to see if your questions can be answered there."},{id: 2, topic: "Phone Number", detail: "888-888-8888"},{id: 3, topic: "Email", detail: "flathoppersupport@genericwebsite.com"}])
    const showDetail = at => {
        setSupportOptions2([{id: 1, topic: "Check FAQ page", detail: "Please check the FAQ page to see if your questions can be answered there."},{id: 2, topic: "Phone Number", detail: "888-888-8888"},{id: 3, topic: "Email", detail: "flathoppersupport@genericwebsite.com"}])
        const allOptions = [...supportOptions]
        setSupportOptions2(allOptions[at])
    }
    // render() {
        return(
            <div className="div-csrv">
                <div className="csrv-div"></div>
                <div className="csrv-div2">
                    <br />
                    <h1>Customer Support</h1>
                    <div className="csrv-dv">
                        <p onClick={() => showDetail(0)}>{supportOptions[0].topic}</p>
                        <p onClick={() => showDetail(1)}>{supportOptions[1].topic}</p>
                        <p onClick={() => showDetail(2)}>{supportOptions[2].topic}</p>
                    </div>
                    <div className="csrv-dv2">
                        {
                            supportOptions2.length > 1 ?
                            <p>{supportOptions[0].detail}</p>
                            :
                            <p>{supportOptions2.detail}</p>
                        }
                    </div>
                </div>
                <div className="csrv-div3"></div>
            </div>
        )
    // }
}