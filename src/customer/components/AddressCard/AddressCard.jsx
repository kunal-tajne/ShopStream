import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-2">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>
        <p>
          {`${address?.streetAddress}, ${address?.city}, ${address?.state}, ${address?.zipCode}`}
        </p>
        <p className="font-semibold">Phone Number</p>
        <p>{`${address?.phoneNumber}`}</p>
      </div>
    </div>
  );
};

export default AddressCard;
