# Packaging extensions
<h4 class="fw-light">Package extensions into ".blueprint" files for distribution</h4><br/>

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

<div class="btn-group" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <button type="button" class="btn btn-dark bg-light-subtle border-light-subtle text-secondary disabled">Next</button>
</div>