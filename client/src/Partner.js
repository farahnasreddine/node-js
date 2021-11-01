import React from 'react'

export default function Partner({partner}) {
    const addresses = partner.addresses;
    return (
            <tr>
                <td>{partner.urlName}</td>
                <td>
                    <ul>
                    {
                        addresses.map(address => {
                            return <li>{address}</li>
                        })        
                    }
                    </ul>
                </td>
            </tr>
    )
}
