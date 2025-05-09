import React from "react";
import axios from "axios";
async function page() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");
  return (
    <div>
      {response.data.user}
      {response.data.email}
    </div>
  );
}

export default page;
