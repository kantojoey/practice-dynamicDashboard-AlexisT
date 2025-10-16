import React from "react";

const MembershipStatus = ({isMember}) => {
    let message;
    if (isMember){
        message = <h2>Thank you for being a premium member!</h2>;
        return message;
    } else{
        message = <h2>Upgrade to premium today to enjoy exclusive features!</h2>;
        return message;
    };

};

export default MembershipStatus;