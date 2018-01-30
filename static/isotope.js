new Vue({
    el: "#vue",
    data() {
      return {
        idIterator: 6,
        people: [
          {
            id: 1,
            name: "Paulus",
            background: "#faac3d"
          },
          {
            id: 2,
            name: "Nick",
            background: "#04489b"
          },
          {
            id: 3,
            name: "Aaron",
            background: "#f75100"
          },
          {
            id: 4,
            name: "Pavel",
            background: "#8cbce2"
          },
          {
            id: 5,
            name: "Weaver",
            background: "#089f4e"
          }
        ],
        newPerson: {
          id: 6,
          name: "Bubbles",
          background: ""
        },
        options: {
          getSortData: {
            id: "id"
          },
          sortBy : "id"
        },
         colors: [
          "#f75100",
          "#089f4e",
          "#8cbce2",
          "#faac3d",
          "#ab4328",
          "#bb9fdb",
          "#04489b",
          "#de1464"
        ],
        peopleSearchString: ""
      }
    },
    computed: {
      filteredPeople() {
        var self = this;
  
        return this.people.filter(function(person) {
          var searchRegex = new RegExp(self.peopleSearchString.replace(/[^a-zA-Z0-9 ]/g, ""), 'i');
  
          return (
            searchRegex.test(person.name) ||
            searchRegex.test(person.id)
          )
        })
      }
    },
    methods: {
      addNewPerson() {
        if(this.newPerson.name == "") {return}
        
        this.newPerson.background = this.colors[parseInt(this.getRandomArbitrary(0, this.colors.length-1), this.colors.length-1, this.colors[this.getRandomArbitrary(0, this.colors.length-1)])];
  
        this.people.push(this.newPerson);
        this.idIterator = this.idIterator+1;
  
        this.newPerson = {
          id: this.idIterator,
          name: "",
          background: ""
        };
      },
      removePerson(index) {
        this.people.splice(index, 1);
      },
      getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    }
  })