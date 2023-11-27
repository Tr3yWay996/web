# Writing extensions
<h4 class="fw-light">Learn the basics of extension development</h4><br/>

### <i class="bi bi-gear-wide-connected"></i> **Creating an admin page**
After setting up your development template (Barebones) in the previous guide, you can now start writing an admin view.

The Barebones template includes two files by default, `conf.yml` and `admin.blade.php`. We'll take a look at `conf.yml` later, but first, open `admin.blade.php` and add the following code:

<pre><code class="hljs language-xml">This extension is called <a style="color: #ef5b5b">&lt;b&gt;</a>^#name#^<a style="color: #ef5b5b">&lt;/b&gt;</a>.
<a style="color: #ef5b5b">&lt;code&gt;</a>^#identifier#^<a style="color: #ef5b5b">&lt;/code&gt;</a> is the identifier of this extension.
The current version is <a style="color: #ef5b5b">&lt;i&gt;</a>^#version#^<a style="color: #ef5b5b">&lt;/i&gt;</a>.</code></pre>

<div class="btn-group" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=getting-started/Extension-development" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/Custom-controllers" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>