# placeholders
<h4 class="fw-light">Strings that are automatically replaced with specific values upon extension installation.</h4><br/>
<div class="alert alert-dark" role="alert">
  <i class="bi bi-regex me-2 mt-1 mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>Placeholders are changing!</b> We are changing how placeholders function and adding some awesome new features for them.</div>
</div><br/>

### **What are placeholders?**
Placeholders allow extensions to easily get information from each and every file in their extension, preventing the need to ask users for the Pterodactyl installation path for example.

<br/><br/>

### **Placeholders `v2`** <tag type="new" content="beta-A428"/></tag>
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
      Returns a Unix timestamp that indicates (roughly) when the extension has been installed, specifically when placeholders started initializing.
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
        <code><span class="text-primary-emphasis"><a href="?page=developing-extensions/Packaging-extensions">Packaging extensions</a></span></code><br/>
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




<br/><br/>

### **Placeholders `v1`** <tag type="deprecated" content="beta-A428"/></tag>
**Placeholders marked with a <span class="text-primary-emphasis">checkmark <icon name="check2"></icon></span> have an equivilent placeholder in Placeholders v2.**

Legacy placeholders __only__ work on extensions made for `alpha` or `indev` releases and are still around for backwards compatibility. If you are developing an extension, either switch to new placeholders once `beta-A428` releases or start developing on that version directly.

<br/>

##### Static information
`^#version#^` <icon name="check2"></icon>\
Version defined in [conf.yml](?page=documentation/confyml).

`^#author#^` <icon name="check2"></icon>\
Author defined in [conf.yml](?page=documentation/confyml).

`^#name#^` <icon name="check2"></icon>\
Display name defined in [conf.yml](?page=documentation/confyml).

`^#identifier#^` <icon name="check2"></icon>\
Identifier defined in [conf.yml](?page=documentation/confyml).

<br/>

##### Variable information
`^#path#^`\
The path to the host's Pterodactyl installation folder. You should always use this placeholder instead of guessing a common folder location.

`^#datapath#^`\
Path to your extension's data directory. To keep your extension from breaking in the future, it's always a good idea to use this placeholder instead of guessing.

`^#publicpath#^`\
Path to your extension's public data directory. This directory is exposed to the internet, so don't store keys or sensitive information in there! To keep your extension from breaking in the future, it's always a good idea to use this placeholder instead of guessing.

`^#installmode#^` <icon name="check2"></icon>\
Information about how the extension was installed. Is "normal" when the extension has been installed normally and "developer" when the extension was installed through developer commands.

`^#blueprintversion#^` <icon name="check2"></icon>\
Blueprint version that installed/built your extension.

`^#timestamp#^` <icon name="check2"></icon>\
Timestamp of when your extension started installation, specifically the timestamp of when Blueprint started applying extension placeholders.

`^#componentroot#^`\
Root path to your component directory in the format `@/blueprint/extensions/identifier`. Extension developers should refrain from using this path as a filesystem path.