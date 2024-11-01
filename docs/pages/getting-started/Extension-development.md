# Extension development
<h4 class="fw-light">Set up your extension development environment.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-toggle-on mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>Developer mode</b> has to be turned on in your <b>admin panel</b> <p- class="opacity-50">(Admin > Extensions > Blueprint)</p-> before you can run developer commands. You only have to do this once.</div>
</div><br/>

### **Quick start**
Get started by beginning from a template, naming and describing your extension through the initialize command.
```sh
blueprint -init
```
When choosing a template, select `Barebones` to be able to follow along with this guide. Most options can be changed later, so don't procrastinate too much thinking of an extension name.

After running this command, you can now find your extension files in the `.blueprint/dev` directory (which is located inside of your Pterodactyl folder). You can use cd to change to this directory.
```sh
cd .blueprint/dev
```

<div class="alert mx-1 rounded-4 border" role="alert">
  <i class="bi bi-quote mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3">While you can develop extensions without ever leaving your terminal emulator, you can also transfer files from your local machine to your server using SFTP or use specific applications to automate this process (such as <a href="https://open-vsx.org/extension/Natizyskunk/sftp" class="alert-link">this VSCode extension</a>).</div>
</div><br/>


### **Applying changes**
To apply any changes you've made and preview them on your panel, run the following developer command. This command installs extension files from `.blueprint/dev/` like it were a normal extension.
```sh
blueprint -build
```

<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <button type="button" class="btn btn-dark bg-light-subtle border-light-subtle text-secondary disabled">Previous</button>
  <a href="?page=developing-extensions/Admin-views" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>