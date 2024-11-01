# Scripts
<h4 class="fw-light">Advanced feature allowing extensions to go beyond Blueprint's extension API.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-pin-angle-fill mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>This section is still being written.</b> You might run into unfinished explanations, incorrect instructions, outdated or misinformation.</div>
</div>
<div class="alert alert-danger mt-2 rounded-4" role="alert">
  <i class="bi bi-ban mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3">Extension scripts can be destructive and collide with each other. <b>Always prioritize compatibility</b> with other extensions and <b>extensively test</b> your scripts before distributing them.</div>
</div><br/>

### **What are scripts?**
Extension scripts are advanced collections of commands allowing extensions to extend parts of Pterodactyl that are out of Blueprint's scope. Due to the nature of the complexity related to these scripts, they are advised against.

Scripts can **prevent extensions from being listed** on the [extension browse list](../browse) if they do not meet **all of the following requirements**:
- Scripts <u>should never</u> cause conflicts with other extensions respecting these guidelines.
- Scripts must stay <u>within the Pterodactyl instance</u> and not edit anything outside of the panel's webserver folder without user consent.
- Extensions must undo all of their changes when removing the extension.
- Updating extensions utilizing scripts must not break their modifications.
- Scripts should use **environment variables** or [placeholders](?page=documentation/placeholders) for detecting the webserver folder.

**Export scripts are free from (most of) these limitations** as they are specifically made to help the developer automate actions upon export. As long as you don't cause permanent damages through export scripts, you should be fine.

<br/>

### **Environment variables**
These variables can be used anywhere in your scripts and are automatically assigned the correct value by Blueprint.

<!-- $ENGINE -->
`$ENGINE`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Codename of the engine currently handling the extension.

<!-- $EXTENSION_IDENTIFIER -->
`$EXTENSION_IDENTIFIER`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Provides the extension's identifier.

<!-- $EXTENSION_VERSION -->
`$EXTENSION_VERSION`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Provides the extension's version.

<!-- $EXTENSION_TARGET -->
`$EXTENSION_TARGET`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Provides the extension's defined target version, not to be confused with the version the extension is currently being installed on.

<!-- $PTERODACTYL_DIRECTORY -->
`$PTERODACTYL_DIRECTORY`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Path towards the Pterodactyl webserver folder, commonly `/var/www/pterodactyl`.

<!-- $BLUEPRINT_VERSION -->
`$BLUEPRINT_VERSION`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">remove.sh <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Blueprint version currently installed on the target panel.

<!-- $BLUEPRINT_DEVELOPER -->
`$BLUEPRINT_DEVELOPER`
<span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">install.sh <i class="bi bi-check"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">remove.sh <i class="bi bi-x"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">export.sh <i class="bi bi-x"></i></span>\
Either `true` or `false` depending on if the extension was installed through developer commands.

<!-- $BLUEPRINT_EXPORT_DIRECTORY -->
`$BLUEPRINT_EXPORT_DIRECTORY`
<span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">install.sh <i class="bi bi-x"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">remove.sh <i class="bi bi-x"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">export.sh <i class="bi bi-check"></i></span>\
Path towards the folder where Blueprint is building the extension package.