


import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,email,phone,picture,dob&nat=ca&results=200";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};


// export default {
//   // Gets all users

  
//   getUsers: function(query) {

//     return axios.get("https://randomuser.me/api/?inc=name,location,email,phone&nat=ca&results=");
//   }
// };