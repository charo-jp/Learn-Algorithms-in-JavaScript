charo();

function charo() {
  console.log("charo");
}
const unleashThis = {
  name: "outer this",
  friends: ["that", "these", "those", "they"],
  loopItNow: function () {
    this.friends.forEach(function (friend) {
      console.log(this.name + " has the list of friends " + friend);
    });
  },
  loopItNowWithArrow: function () {
    this.friends.forEach((friend) => {
      console.log(this.name + " has the list of friends " + friend);
    });
  },
};

/**
 * Terms:
 * - Global Execution Context
 * It is the environment in which JS code is executed. It contains all the necessary info and settings for your codes to run.
 * What does Execution Context do?
 * - Variable Scope
 *
 * - Function Execution
 *
 * - Hoisting   : it refers to the process whereby the interpreter appears to move the declaration of functions, variables,
 * classes, or imports to the top of their scope, prior to exectution of the code. It only applies to
 *      - function
 *      - function*
 *      - async function
 *      - async function*
 *
 * https://medium.com/@rabailzaheer/javascript-execution-context-behind-the-call-stack-19f253aad0a4#:~:text=The%20global%20execution%20context%20is,managing%20global%20variables%20and%20functions.
 * https://blog.devgenius.io/why-this-gets-undefined-inside-a-function-d70a39b40d3b
 */
// unleashThis.loopItNowWithArrow();
