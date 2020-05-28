Publish HTML Task for Azure Pipelines
===

**Get it [here](https://marketplace.visualstudio.com/items?itemName=Farrellsoft.publish-html-task).**

This task enables publishing of HTML content to pipelines as artifacts and can be viewed as part of the final output during Build and Release pipelines.

Usage
---

The Publish HTML task has three properties

- Display Name - the name the task appears with when made visibile in pipelines
- Artifact Name - the name of the artifact which will appear as a section header
- Html File Path - the file that should be exported

Each of these must be populated for the task to work properly. The general flow is:

- Create an HTML file either within your agent or as a published artifact to the overall pipeline

- Specify the Artifact Name as the name - this will be displayed in the tab list if used in Build and in the Stage Summary report if used in Release

- Specify the path to the HTML file

**Note** Remember NONE of your HTML assets will be hosted on Azure so if you have images, stylesheets, or other such things make sure the HTML generated refers to these with absolute URLs.

Here is a screenshot of an HTML file with an image exported during a Release pipeline Screenshot Note in this example the Artifact Name is Export

Here is another screenshot of the same export also present in the Build Pipeline Screenshot Here you can see the export is under the Extensions tab, again our artifact name is set to Export
