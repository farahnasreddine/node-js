import React from 'react'
import Partner from './Partner'
import Message from './Message'

export default function PartnersList({partners}) {
    if(partners==1){
        return (
            <div>
                <br/>
                <Message message="Select a range in kilometers to search partners' locations within."/>
            </div>
        )
    }else{
        var partnersCount = partners.length;
        if(partnersCount>0){
            return (
                <table border="1">
                    <tr>
                        <th><b>Name</b></th>
                        <th><b>Addresses</b></th>
                    </tr>
                    {
                        partners.map(partner => {
                            return <Partner key={partner.id} partner={partner}/>
                        })    
                    }
                </table>    
            )
        }else{
            return (
                <div>
                    <br/>
                    <Message message="There are no partners located in the selected range."/>
                </div>
            )
        }
    }
}
