# Placeholders

<h4 class="fw-light">Strings that are automatically replaced with specific values upon extension installation.</h4><br/>

### **What are placeholders?**

Placeholders allow extensions to easily get information from each and every file in their extension, preventing the need to ask users for the Pterodactyl installation path for example.

<br/>

### **Placeholders `v2`**

These are the available placeholders you can use on `beta` and later. <b>Unless you set your target version to a beta release</b>, these placeholders will <u>not</u> be available.
<br/><br/>

##### Configuration values

This placeholder group counts for most extension-config-related values.

<!-- Identifier -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {identifier}
        <!-- Example value --> <span class="text-secondary">byte</span>
      </code></b><br/>
      Returns the extension's identifier. This identifier can be configured in your <a href="?page=documentation/confyml">conf.yml</a> and matches the identifier Blueprint uses for paths/variables related to your extension.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=documentation/confyml">conf.yml</a></span></code><br/>
      </div>
      <!-- Modifiers -->
      <div>
        <b>Modifiers</b><br>
        <code>
          <!-- Modifier string --> {identifier^}
          <!-- Example value --> <span class="text-secondary">Byte</span>
        </code><br/>
        <code>
          <!-- Modifier string --> {identifier!}
          <!-- Example value --> <span class="text-secondary">BYTE</span>
        </code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Name -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {name}
        <!-- Example value --> <span class="text-secondary">Byte.sh</span>
      </code></b><br/>
      Returns the extension's display name which you configured in your <a href="?page=documentation/confyml">conf.yml</a>. Extension display names are not limited to a limited set of characters, so parse wisely.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=documentation/confyml">conf.yml</a></span></code><br/>
      </div>
      <!-- Modifiers -->
      <div>
        <b>Modifiers</b><br>
        <code>
          <!-- Modifier string --> {name!}
          <!-- Example value --> <span class="text-secondary">BYTE.SH</span>
        </code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Author -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {author}
        <!-- Example value --> <span class="text-secondary">prpl.wtf</span>
      </code></b><br/>
      Returns the extension's author (if defined in <a href="?page=documentation/confyml">conf.yml</a>). If not defined, this placeholder will return <code>undefined</code>.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div>
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=documentation/confyml">conf.yml</a></span></code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Version -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {version}
        <!-- Example value --> <span class="text-secondary">1.4.3</span>
      </code></b><br/>
      Returns the active extension version which is defined in your extension's <a href="?page=documentation/confyml">conf.yml</a> configuration.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div>
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=documentation/confyml">conf.yml</a></span></code><br/>
      </div>
    </div>
  </div>
</div><br/>

<br/>

##### Miscellaneous

Uncategorized and advanced placeholders that do various things.

<!-- Random -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {random}
        <!-- Example value --> <span class="text-secondary">17388</span>
      </code></b><br/>
      This placeholder will be replaced with a 'random' number. This number is determined on a per-file basis: All random placeholders that are in the same file get assigned the <u>same</u> random number. Random numbers may <b>vary in length</b>, so parse wisely.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div>
        <b>Context</b><br>
        <code><span class="text-primary-emphasis">$RANDOM</span></code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Timestamp -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {timestamp}
        <!-- Example value --> <span class="text-secondary">1712239495</span>
      </code></b><br/>
      Returns a Unix timestamp that indicates (roughly) when the extension has been installed, specifically when placeholders started initializing. This timestamp is calculated before placeholders are placed and returns the same across all files.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div>
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a></span></code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Mode -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {mode}
        <!-- Example value --> <span class="text-secondary">local</span>
      </code></b><br/>
      Returns either <code>local</code> or <code>develop</code> depending on if the extension has been installed through a local "extension.blueprint" file or developer commands.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div>
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=getting-started/Extension-development">Extension development</a></span></code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Target -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {target}
        <!-- Example value --> <span class="text-secondary">beta-A428</span>
      </code></b><br/>
      Returns the version of Blueprint the extension installed on. This placeholder <b>will not</b> return the extension's target version. Instead, it returns the version of Blueprint that is currently installed on that panel.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis"><a href="?page=about/Changelog">Changelog</a></span></code><br/>
      </div>
      <!-- Conditions -->
      <div>
        <b>Conditions</b><br>
        <code>
          <!-- Condition string --> {is_target}
          <!-- Example value --> <span class="text-secondary">true/false</span>
        </code><br/>
      </div>
    </div>
  </div>
</div><br/>

<br/>

##### Directories

Placeholders that point towards certain directories or file paths.

<!-- Root -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {root}
        <!-- Example value --> <span class="text-secondary">/var/www/pterodactyl</span>
      </code></b><br/>
      Throws the root directory of the target Pterodactyl installation, which is commonly <code>/var/www/pterodactyl</code>. This placeholder has modifiers to fetch paths to specific folders.<br/>
      <br/>
      <code>{root/public}</code> will return the root path towards your extension's local public directory. <code>{root/data}</code> behaves the same but points towards your extension's data folder instead.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis">Webserver directory</span></code><br/>
      </div>
      <!-- Modifiers -->
      <div>
        <b>Modifiers</b><br>
        <code>
          <!-- Modifier string --> {root/public}
          <!-- Example value --> <span class="text-secondary">/var/www/pterodactyl/.blueprint/extensions/byte/public</span>
        </code><br/>
        <code>
          <!-- Modifier string --> {root/data}
          <!-- Example value --> <span class="text-secondary">/var/www/pterodactyl/.blueprint/extensions/byte/private</span>
        </code><br/>
        <code>
          <!-- Modifier string --> {root/fs}
          <!-- Example value --> <span class="text-secondary">/var/www/pterodactyl/.blueprint/extensions/byte/fs</span>
        </code><br/>
      </div>
    </div>
  </div>
</div><br/>

<!-- Webroot -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {webroot}
        <!-- Example value --> <span class="text-secondary">/</span>
      </code></b><br/>
      Returns paths from the outside's perspective. This can be used to easily fetch paths towards exposed directories.<br/>
      <br/>
      These paths should only be used for <b>outside-in</b> paths and <u>will not</u> work as local paths, parse wisely.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis">Exposed directory</span></code><br/>
      </div>
      <!-- Modifiers -->
      <div>
        <b>Modifiers</b><br>
        <code>
          <!-- Modifier string --> {webroot/public}
          <!-- Example value --> <span class="text-secondary">/extensions/byte</span>
        </code><br/>
        <code>
          <!-- Modifier string --> {webroot/fs}
          <!-- Example value --> <span class="text-secondary">/fs/extensions/byte</span>
        </code><br/>
      </div>
    </div>
  </div>
</div><br/>

<br/>

##### Advanced

Technical details about the framework handling the extension.

<!-- Engine -->
<div class="container bg-dark-subtle rounded-3 p-3">
  <div class="row">
    <div class="col-lg-9 col-md-8 col-xs-12">
      <b><code><icon name="hash"></icon>
        <!-- Placeholder string --> {engine}
        <!-- Example value -->
      </code></b><span class="text-secondary">solstice</span> <tag type="new" content="beta-2024-12"/></tag><br/>
      Provides information about the engine handling the extension. Different engines using the extension standard that aren't affiliated with Blueprint are expected to replace this placeholder with their own codenames.
    </div>
    <div class="col-lg-3 col-md-4 col-xs-12">
      <!-- Context -->
      <div class="mb-3">
        <b>Context</b><br>
        <code><span class="text-primary-emphasis">Extension standard</span></code><br/>
      </div>
    </div>
  </div>
</div><br/>
