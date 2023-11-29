# Writing extensions
<h4 class="fw-light">Learn the basics of extension development</h4><br/>

### <i class="bi bi-gear-wide-connected"></i> **Creating an admin page**
After setting up your development template (Barebones) in the previous guide, you can now start writing an admin view.

The Barebones template includes two files by default, `conf.yml` and `admin.blade.php`. We'll take a look at `conf.yml` later, but first, open `admin.blade.php` and add the following code:

<div class="row container mb-2">
  <div class="col rounded-1 py-2" style="background-color: #282c34">
    <pre><code class="hljs language-xml"><a style="color: #ef5b5b">&lt;p&gt;</a>
  This extension is called <a style="color: #ef5b5b">&lt;b&gt;</a>^#name#^<a style="color: #ef5b5b">&lt;/b&gt;</a>.
  <a style="color: #ef5b5b">&lt;code&gt;</a>^#identifier#^<a style="color: #ef5b5b">&lt;/code&gt;</a> is the identifier of this extension.
  The current version is <a style="color: #ef5b5b">&lt;i&gt;</a>^#version#^<a style="color: #ef5b5b">&lt;/i&gt;</a>.
<a style="color: #ef5b5b">&lt;/p&gt;</a></code></pre>
    <div class="border-top mb-3"></div>
    <div class="overflow-scroll">
      <img src="/.assets/storage/docs/png/3.png">
    </div>
  </div>
</div>

You might have already noticed that `^#name#^`, `^#identifier#^` and `^#version#^` have been replaced with the corresponding values automatically. These strings are referred to as [placeholders](?page=documentation/placeholders), which you can find documentation for [on this page](?page=documentation/placeholders).

As you might have noticed, all lines or on the same row. This is due to how Blueprint builds your admin view internally, as it doesn't handle linebreaks. We can fix this by adding `<br>` tags at the end of each line.

<div class="row container mb-2">
  <div class="col rounded-1 py-2" style="background-color: #282c34">
    <pre><code class="hljs language-xml"><a style="color: #ef5b5b">&lt;p&gt;</a>
  This extension is called <a style="color: #ef5b5b">&lt;b&gt;</a>^#name#^<a style="color: #ef5b5b">&lt;/b&gt;</a>.<a style="color: #ef5b5b">&lt;br&gt;</a>
  <a style="color: #ef5b5b">&lt;code&gt;</a>^#identifier#^<a style="color: #ef5b5b">&lt;/code&gt;</a> is the identifier of this extension.<a style="color: #ef5b5b">&lt;br&gt;</a>
  The current version is <a style="color: #ef5b5b">&lt;i&gt;</a>^#version#^<a style="color: #ef5b5b">&lt;/i&gt;</a>.<a style="color: #ef5b5b">&lt;br&gt;</a>
<a style="color: #ef5b5b">&lt;/p&gt;</a></code></pre>
    <div class="border-top mb-3"></div>
    <div class="overflow-scroll">
      <img src="/.assets/storage/docs/png/5.png">
    </div>
  </div>
</div>

<br/>
<div class="btn-group" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=getting-started/Extension-development" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/Custom-controllers" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>