# Flags

<h4 class="fw-light">Highly-specific options that don't require their own configuration option.</h4><br/>

### **What are flags?**

Flags allow for enabling/disabling possibly advanced features that don't need their own option in [`conf.yml`](?page=documentation/confyml) file. Multiple flags must be seperated with comma's.

<br/>

### **Flags**

##### Feature-specifc flags

`ignorePlaceholders`\
Skip applying placeholders. This improves installation speed for extensions with a lot of files, but is generally not recommended.

`forceLegacyPlaceholders`\
Force Blueprint to apply legacy placeholders instead of the new ones on extensions with a higher target version than alpha or indev.

<br/>

##### Advanced flags

~~`hasInstallScript`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
Right before the installation completes, extensions with this flag will be able to run a shell script. This script must be called `install.sh` and be in the root of your data directory. **Deprecated in [beta-2024-12](?page=about/changelog/beta-2024-12) since install scripts are now automatically ran when detected.**

~~`hasRemovalScript`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
Right before starting the extension removal process, extensions with this flag will be able to run a shell script to undo some changes Blueprint isn't able to. This script must be called `remove.sh` and be in the root of your data directory. **Deprecated in [beta-2024-12](?page=about/changelog/beta-2024-12) since remove scripts are now automatically ran when detected.**

~~`hasExportScript`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
In the middle of the export process, extensions with this flag will be able to run a shell script to automate additional changes for distribution. This script must be called `export.sh` and be in the root of your data directory. **Deprecated in [beta-2024-12](?page=about/changelog/beta-2024-12) since export scripts are now automatically ran when detected.**

<br/>

##### Developer flags

`developerIgnoreInstallScript`\
Ignore the custom extension installation script when installing your extension through developer commands.

`developerIgnoreRebuild`\
Skip rebuilding panel assets when installing your extension through developer commands.

~~`developerForceMigrate`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
Forcefully migrate the database non-interactively when installing your extension through developer commands. **Deprecated in [beta-2024-12](?page=about/changelog/beta-2024-12) since it no longer requires input for migrations.**

`developerKeepApplicationCache`\
Prevents Blueprint from flushing the application's cache when building extensions through developer commands.

`developerEscalateInstallScript`\
Allows you to run install scripts with root permissions instead of running them through the webserver user.

`developerEscalateExportScript`\
Allows you to run export scripts with root permissions instead of running them through the webserver user.
