
<template>
  <div class="hello">
 
    <h1>{{ msg }}</h1>
    <p>
     
      <br>
    
        <button @click="trackProductView" style="background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;">Track Product View</button>

         <br>
  
  <br>
 <button @click="trackUser" style="background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;">Record User</button>  

   <br>
  
  <br>
 <button @click="pushPermission" style="background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;">Push Permission</button>  
    </p>
   
  </div>
</template>

<script>
import clevertap from 'clevertap-web-sdk';

export default {
  methods: {
    //to raise push permission
    pushPermission() {
      if (clevertap) {
       clevertap.notifications.push({
    "titleText":"Get Notified",
    "bodyText":"Accept this permission to recieve web push notifications ",
    "okButtonText":"Allow",
    "rejectButtonText":"Reject",
    "okButtonColor":"#819091"});
        console.log("Requested Pushed Permission")
      } else {
        console.error('CleverTap is not available.');
      }
    },
    //to raise events
    trackProductView() {
      if (clevertap) {
        clevertap.event.push("Product viewed");
         clevertap.event.push("VueJSPopup");

        console.log("Event Pushed")
      } else {
        console.error('CleverTap is not available.');
      }
    },
    //to track users on login/register
    trackUser() {
      if (clevertap) {
       clevertap.onUserLogin.push({
 "Site": {
   "Name": "Vue Name1",            // String
   "Identity": "vueuseridentity1",              // String or number
   "Email": "vue1@gmail.com",         // Email address of the user
   "Phone": "+910719636312",           // Phone (with the country code)
   "Gender": "M",                     // Can be either M or F
   "DOB": new Date(),                 // Date of Birth. Date object
// optional fields. controls whether the user will be sent email, push etc.
         
                
   "MSG-sms": true,                   // Enable sms notifications
   "MSG-whatsapp": true,              // Enable WhatsApp notifications
 }
})
        console.log("User Created")
      } else {
        console.error('CleverTap is not available.');
      }
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
