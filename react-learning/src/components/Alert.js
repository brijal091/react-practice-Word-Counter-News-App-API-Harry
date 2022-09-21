import React from 'react'
export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (

    
    // We are using this syntax because if props.alert is null on that the other alert will not be shown. If and only if the alert have message then and only then , the condition after && will be evaluated and when it will be evaluated on that time the alert will be shown.
    
    // It's giving cimulative Layout shift, means it's changing the other comonents position when it's displaied. which should not happen in any site. it should be minimal so for that we will set it's own specific height and width, so it will not take ant other componet's size. We can see that we are using this alert and condition inside {},.
    
    // Note that we are using this outside of div and under the return 
    <div style={{height: '50px'}}> {props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
    </div>
  )
}
