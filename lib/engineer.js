const Employee = require('../lib/employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;}
    
        getGh() {
            return this.github
        }

        getRole() {
            return "Engineer"
        }

    }


module.exports = Engineer
