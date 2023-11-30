# Writing extensions
<h4 class="fw-light">Learn the basics of extension development</h4><br/>

### <i class="bi bi-gear-wide-connected"></i> **Creating an admin page**
After setting up your development template (Barebones) in the previous guide, you can now start writing an admin view.

The Barebones template includes two files by default, `conf.yml` and `admin.blade.php`. We'll take a look at `conf.yml` later, but first, open `admin.blade.php` and add the following code:

<div class="row container mb-2">
  <div class="col rounded-1 py-2" style="background-color: #282c34">
    <pre><code class="hljs language-html hl-escape"><p>
  This extension is called <b>^#name#^</b>.
  <code>^#identifier#^</code> is the identifier of this extension.
  The current version is <i>^#version#^</i>.
</p></code></pre>
    <div class="border-top mb-3"></div>
    <div class="overflow-scroll">
      <img src="/.assets/storage/docs/png/3.png">
    </div>
  </div>
</div>

You might have already noticed that `^#name#^`, `^#identifier#^` and `^#version#^` have been replaced with the corresponding values automatically. These strings are referred to as [placeholders](?page=documentation/placeholders), which you can find documentation for [on this page](?page=documentation/placeholders).

Right now all lines or on the same row. This is due to how Blueprint builds your admin view internally, as it doesn't handle linebreaks. We can fix this by adding `<br>` tags at the end of each line.

<div class="row container mb-2">
  <div class="col rounded-1 py-2" style="background-color: #282c34">
    <pre><code class="hljs language-xml hl-escape"><p>
  This extension is called <b>^#name#^</b>. <br>
  <code>^#identifier#^</code> is the identifier of this extension. <br>
  The current version is <i>^#version#^</i>. <br>
</p></code></pre>
    <div class="border-top mb-3"></div>
    <div class="overflow-scroll">
      <img src="/.assets/storage/docs/png/5.png">
    </div>
  </div>
</div>

This looks a bit plain, doesn't it? We can spice things up and add a bit of depth with box containers, a fancy title and a much better user experience.

We can achieve this with the `box` css class, which is included in the Pterodactyl admin panel by default. To add a nice color alongside the box, you can make use of the following classes: <a class="text-primary">`box-primary`</a>, <a class="text-info">`box-info`</a>, <a class="text-warning">`box-warning`</a> and <a class="text-danger">`box-danger`</a>.

<div class="row container mb-2">
  <div class="col rounded-1 py-2" style="background-color: #282c34">
    <pre><code class="hljs language-xml hl-escape"><div class="box box-info">
  <div class="box-header with-border">
    <h3 class="box-title">My awesome box</h3>
  </div>
  <div class="box-body">
    <p>
      This extension is called <b>^#name#^</b>. <br>
      <code>^#identifier#^</code> is the identifier of this extension. <br>
      The current version is <i>^#version#^</i>. <br>
    </p>
  </div>
</div></code></pre>
    <div class="border-top mb-3"></div>
    <div class="overflow-scroll">
      <img src="/.assets/storage/docs/png/6.png">
    </div>
  </div>
</div>

<br/>
<div class="btn-group" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=getting-started/Extension-development" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/Custom-controllers" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>