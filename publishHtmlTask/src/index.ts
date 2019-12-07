import taskLib = require('azure-pipelines-task-lib');

console.log("Hello World");
taskLib.setResult(taskLib.TaskResult.Succeeded, "Complete");