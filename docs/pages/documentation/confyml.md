# conf.yml
<h4 class="fw-light">Change extension configuration options, add extension flags and tell Blueprint what to do with your extension.</h4><br/>

### **What is conf.yml?**
When installing extensions, Blueprint needs to know a lot of things about an extension before it can start doing file operations. For this reason, every single extension is required to have a "conf.yml" file to inform Blueprint about what it should do with your extension.

<br/>

### **Options**

##### info
`name` <tag type="required"/></tag>\
The display name of your extension.

`identifier` <tag type="required"/></tag>\
Used for folder trees, routers, view names and more. Identifiers may only contain a-z lowercase characters and must be unique (two extensions cannot share the same identifier on one system).

`description` <tag type="required"/></tag>\
Describe your extension. This shows on the admin page of your extension.

`flags`\
Optional configuration string to apply advanced flags to your extensions. [Learn more](?page=documentation/flags) about flags.

`version` <tag type="required"/></tag>\
The version of your extension.

`target` <tag type="required"/></tag>\
The target version is compared to the currently installed version of Blueprint on installation. If this is not the same Blueprint will warn the user about your extension possibly not being able to function as expected.

`author`\
The spot to put you or your team's name. Planned to be required once fully implemented.

`icon`\
File path to your extension's icon. Must be a PNG, JPG or JPEG.

`website`\
URL to your extension's website. Will be linked on the extension's admin page.

<br/>

##### admin
`view` <tag type="required"/></tag>\
Path to your admin view.

`controller`\
Path to your custom admin view controller.

`css`\
Add custom css to the Pterodactyl admin panel, provide the path to your `.css` file here.

`wrapper`\
Path to blade code that you want to add to the Pterodactyl admin dashboard layout.

<br/>

##### dashboard
`css`\
Add custom css to the Pterodactyl client panel, provide the path to your `.css` file here.

`wrapper`\
Path to blade code that you want to add to the Pterodactyl client dashboard layout.

`components`\
Directory with React components which can be used to integrate your extension directly with the Pterodactyl frontend. [Learn more](?page=developing-extensions/React-components) about React components.

<br/>

##### data
`directory`\
Path to your data directory. These are private extension-specific files which you can store anything in. Even without this option enabled, private directories still get utilized by Blueprint.

`public`\
Path to your public directory. All files in this folder are available publicly and can be seen by anyone, so don't store any secrets or keys here.

<br/>

##### requests
`views` <tag type="new" content="beta-316A3"/></tag>\
Path to your views directory. This directory is used for creating (partial) views made up of sections which you can import to your admin view and admin/dashboard wrapper. These views can be called from `blueprint.extensions.<identifier>.<view>`.

`controllers` <tag type="new" content="beta-316A3"/></tag>\
Directory pointing towards a folder with controllers you can use together with your routes. These controllers exist at `Pterodactyl\BlueprintFramework\Extensions\<identifier>`.

`routes` <tag type="new" content="beta-316A3"/></tag>\
File containing your own route definitions. Extensions can use this for creating custom APIs, additional pages, etc.

<br/>

##### database
`migrations`\
Path to your database migrations folder.