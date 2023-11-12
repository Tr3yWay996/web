# placeholders
<h4 class="fw-light">Strings that are automatically replaced with specific values upon extension installation.</h4><br/>

### **What are placeholders?**
Placeholders allow extensions to easily get information from each and every file in their extension, preventing the need to ask users for the Pterodactyl installation path for example.

<br/>

### **Placeholders**

##### Static information
`^#version#^`\
Version defined in conf.yml.

`^#author#^`\
Author defined in conf.yml.

`^#identifier#^`\
Identifier defined in conf.yml.

`^#name#^`\
Display name defined in conf.yml.

<br/>

##### Variable information
`^#path#^`\
The path to the host's Pterodactyl installation folder. You should always use this placeholder instead of guessing a common folder location.

`^#datapath#^`\
Path to your extension's data directory. To keep your extension from breaking in the future, it's always a good idea to use this placeholder instead of guessing.

`^#installmode#^`\
Information about how the extension was installed. Is "normal" when the extension has been installed normally and "developer" when the extension was installed through developer commands.

`^#blueprintversion#^`\
Blueprint version that installed/built your extension.