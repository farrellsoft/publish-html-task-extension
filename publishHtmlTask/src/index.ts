import taskLib = require('azure-pipelines-task-lib');

const artifactName = taskLib.getInput("artifactName", true) || "";
const fileLocation = taskLib.getInput("htmlFilePath", true) || "";

if (artifactName == "") {
    taskLib.setResult(taskLib.TaskResult.Failed, "No Artifact Name provided");
}
else if (fileLocation == "") {
    taskLib.setResult(taskLib.TaskResult.Failed, "No Artifact Path provided");
}
else
{
    try {
        console.log('Adding attachment');
        taskLib.addAttachment("Distributedtask.Core.Summary", artifactName, fileLocation);
        taskLib.setResult(taskLib.TaskResult.Succeeded, "Complete");
    }
    catch (error) {
        console.log(error);
        taskLib.setResult(taskLib.TaskResult.Failed, error);
    }
}