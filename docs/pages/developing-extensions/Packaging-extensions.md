# Packaging extensions
<h4 class="fw-light">Package extensions into ".blueprint" files for distribution</h4><br/>

### **Exporting extensions**
To package an extension for distribution, we need to convert it into a `identifier.blueprint` file using Blueprint's command line utility. There are **two different commands** that you can use to export extensions.

<br/>
<div class="row">
  <div class="col">
    <code class="hljs">
      blueprint -export
    </code><br>
    Exports your extension to your <b>Pterodactyl installation folder</b>.
  </div>
  <div class="col">
    <code class="hljs">
      blueprint -export expose
    </code><br>
    Generates a <b>random download link</b> for you which expires after two minutes and exports your extension to your <b>Pterodactyl installation folder</b>.
  </div>
</div>
<br/>

After running one of these commands, you'll be left with a `identifier.blueprint` file which you can in turn use to distribute your extension to the outside world. 

<br>

### **Scripting**

Exported extensions are essentially just archives, this means your **source code** can be seen by **anyone** that aquires the `identifier.blueprint` file. To prevent this from happening, we can compress or obfuscate some files through export scripts.

To enable export scripts, add the [`hasExportScript` flag](?page=documentation/flags) to your `conf.yml` configuration and **create a data directory** if you haven't already, which you also need to enable in `conf.yml`. Inside the root of your data directory, create an `export.sh` file and write your shell script in there.

<br>

When exporting extensions with custom export scripts, Blueprint automatically parses some useful variables to make your life as a developer easier. Keep in mind, however, that **placeholders do not work in export scripts** as they are applied upon installation, not when exporting.
```sh
$EXTENSION_IDENTIFIER       # Extension identifier
$EXTENSION_VERSION          # Extension version
$EXTENSION_TARGET           # Extension target version
$PTERODACTYL_DIRECTORY      # Pterodactyl directory path
$BLUEPRINT_EXPORT_DIRECTORY # Blueprint build directory
$BLUEPRINT_VERSION          # Blueprint version
```

<br>

We hope you can create something that suits your needs with the export script feature, and if you don't have any use for it, at least you know that it exist.


<div class="btn-group" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <button type="button" class="btn btn-dark bg-light-subtle border-light-subtle text-secondary disabled">Next</button>
</div>