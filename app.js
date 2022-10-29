Vue.createApp({
  data() {
    return {
      // Dummy data
      id: "id132312",
      uuid: "uuid13514351",
      given_name: "Jane",
      family_name: "Kooper",
      username: "jane234",
      email: "dummy@dummy.com",
      role: {
        name: "Admin",
      },
      status: false, //boolean, Active or Inactive,
      state: "Online", //string, Online, Away,
      protected: true, //boolean, On, Off (its for Delete Protection)
    };
  },
  computed: {
    active_status_styles() {
      return {
        ["text-gray-400"]: !this.protected,
      };
    },
    online_status_classes() {
      if (this.state === "Online") {
        return {
          ["bg-green-400"]: true,
        };
      } else if (this.state === "Away") {
        return {
          ["bg-yellow-400"]: true,
        };
      } else {
        return {
          ["bg-gray-700"]: false,
        };
      }
    },
  },
}).mount("#app");
