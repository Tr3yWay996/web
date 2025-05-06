<div class="position-relative p-4 text-body bg-body border rounded-4 d-flex align-items-center">
  <div class="me-3">
    <i class="bi bi-book h2"></i>
  </div>
  <p class="me-3 my-0">
    Written by those who've walked the path. Want to improve our guides? Contribute and help build something awesome!
  </p>
  <a href="https://github.com/BlueprintFramework/web/tree/main/docs/pages/getting-started">
    <button class="btn btn-primary px-4 rounded-pill placeholder-wave" type="button">
      Contribute
    </button>
  </a>
</div><br>

# Manage Extensions
<h4 class="fw-light">Install, remove, and configure Blueprint extensions.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-exclamation-diamond mb-1 text-warning float-start fs-4"></i>
  <div class="ps-3 ms-3">Blueprint extensions must be installed and removed via the command line. Server access is required to perform these actions.</div>
</div><br/>

### **Install Exstensions**

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-exclamation-diamond mb-1 text-danger float-start fs-4"></i>
  <div class="ps-3 ms-3"><strong>Only install extensions from trusted sources</strong> such as BuiltByBit, sourceXchange, or the official <a href="../browse">Blueprint extension browser</a>. Third-party sources may contain unverified or malicious code.</div>
</div><br/>

To install a Blueprint extension, move the `.blueprint` file into your Pterodactyl root directory, usually `/var/www/pterodactyl`.<br>

Then run the following command in your terminal:
<pre><code class="language-bash">blueprint -install (extension)</code></pre>
Replace `(extension)` with the name of the extension or the exact filename of the `.blueprint` file. This will trigger the installation process.

<br>

### **Remove Exstensions**

To uninstall a Blueprint extension, run the following command:
<pre><code class="language-bash">blueprint -remove (extension)</code></pre>
Replace `(extension)` with the name of the extension you want to remove. This will safely remove the extension and its associated components.

<br>

### **Manage extension specific settings**

Once an extension is installed, you can configure its settings directly from the Pterodactyl admin dashboard.

1.  Log in to the admin interface.

2.  Click on the puzzle piece icon <img width="12px" style="filter: invert(100%);" class="text-white" alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNy4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTE5MiAxMDQuOGMwLTkuMi01LjgtMTcuMy0xMy4yLTIyLjhDMTY3LjIgNzMuMyAxNjAgNjEuMyAxNjAgNDhjMC0yNi41IDI4LjctNDggNjQtNDhzNjQgMjEuNSA2NCA0OGMwIDEzLjMtNy4yIDI1LjMtMTguOCAzNGMtNy40IDUuNS0xMy4yIDEzLjYtMTMuMiAyMi44YzAgMTIuOCAxMC40IDIzLjIgMjMuMiAyMy4ybDU2LjggMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDU2LjhjMCAxMi44IDEwLjQgMjMuMiAyMy4yIDIzLjJjOS4yIDAgMTcuMy01LjggMjIuOC0xMy4yYzguNy0xMS42IDIwLjctMTguOCAzNC0xOC44YzI2LjUgMCA0OCAyOC43IDQ4IDY0cy0yMS41IDY0LTQ4IDY0Yy0xMy4zIDAtMjUuMy03LjItMzQtMTguOGMtNS41LTcuNC0xMy42LTEzLjItMjIuOC0xMy4yYy0xMi44IDAtMjMuMiAxMC40LTIzLjIgMjMuMkwzODQgNDY0YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4bC01Ni44IDBjLTEyLjggMC0yMy4yLTEwLjQtMjMuMi0yMy4yYzAtOS4yIDUuOC0xNy4zIDEzLjItMjIuOGMxMS42LTguNyAxOC44LTIwLjcgMTguOC0zNGMwLTI2LjUtMjguNy00OC02NC00OHMtNjQgMjEuNS02NCA0OGMwIDEzLjMgNy4yIDI1LjMgMTguOCAzNGM3LjQgNS41IDEzLjIgMTMuNiAxMy4yIDIyLjhjMCAxMi44LTEwLjQgMjMuMi0yMy4yIDIzLjJMNDggNTEyYy0yNi41IDAtNDgtMjEuNS00OC00OEwwIDM0My4yQzAgMzMwLjQgMTAuNCAzMjAgMjMuMiAzMjBjOS4yIDAgMTcuMyA1LjggMjIuOCAxMy4yQzU0LjcgMzQ0LjggNjYuNyAzNTIgODAgMzUyYzI2LjUgMCA0OC0yOC43IDQ4LTY0cy0yMS41LTY0LTQ4LTY0Yy0xMy4zIDAtMjUuMyA3LjItMzQgMTguOEM0MC41IDI1MC4yIDMyLjQgMjU2IDIzLjIgMjU2QzEwLjQgMjU2IDAgMjQ1LjYgMCAyMzIuOEwwIDE3NmMwLTI2LjUgMjEuNS00OCA0OC00OGwxMjAuOCAwYzEyLjggMCAyMy4yLTEwLjQgMjMuMi0yMy4yeiIvPjwvc3ZnPg==" /> in the top-right corner to open the Extensions Overview.

3.  From here, select the extension you wish to manage.
    This will open a configuration view where you can adjust extension-specific options.

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-info-circle mb-1 float-start fs-4"></i>
  <div class="ps-3 ms-3">Settings interfaces are defined by the extension developer and may vary depending on the extension. Some even don't have settings at all.</div>
</div><br/>