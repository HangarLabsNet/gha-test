const core = require("@actions/core")

const serviceName = core.getInput("service-name")

console.log("Hello World from this github action!", { serviceName })
