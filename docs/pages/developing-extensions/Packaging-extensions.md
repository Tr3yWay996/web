<div class="position-relative p-4 text-body bg-body border rounded-4 d-flex align-items-center">
  <div class="me-3">
    <i class="bi bi-book h2"></i>
  </div>
  <p class="me-3 my-0">
    Written by those who've walked the path. Want to improve our guides? Contribute and help build something awesome!
  </p>
  <a href="https://github.com/BlueprintFramework/web/tree/main/docs/pages/developing-extensions">
    <button class="btn btn-primary px-4 rounded-pill placeholder-wave" type="button">
      Contribute
    </button>
  </a>
</div><br>

# Packaging extensions
<h4 class="fw-light">Package extensions into ".blueprint" files for distribution.</h4><br/>

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

<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/React-components" class="btn btn-dark bg-light-subtle border-0 rounded-start-pill">Previous</a>
  <button type="button" class="btn btn-dark bg-light-subtle border-0 text-secondary rounded-end-pill disabled">Next</button>
</div>