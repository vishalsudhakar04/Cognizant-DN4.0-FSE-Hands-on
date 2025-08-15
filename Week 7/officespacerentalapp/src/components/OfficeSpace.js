import React from 'react';

function OfficeSpace() {
  // 1. Create variables and objects for our data
  const heading = "Office Space";
  const officeImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww";
  
  const officeDetails = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // 2. Create a style object for the rent
  // This is the conditional inline style
  const rentStyle = {
    color: officeDetails.Rent <= 60000 ? 'red' : 'green'
  };

  return (
    <div>
      {/* Use the 'heading' variable in the h1 tag */}
      <h1>{heading}, at Affordable Range</h1>

      {/* Use the 'officeImage' variable for the src attribute */}
      <img src={officeImage} width="25%" height="25%" alt="Office Space" />

      {/* Display details from the 'officeDetails' object */}
      <h2>Name: {officeDetails.Name}</h2>
      
      {/* Apply the conditional style to this h3 tag */}
      <h3 style={rentStyle}>Rent: Rs. {officeDetails.Rent}</h3>
      
      <h3>Address: {officeDetails.Address}</h3>
    </div>
  );
}

export default OfficeSpace;