<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# beta-316A3
<br/>

#### Changes
- `blueprint.sh` now has a variable to change the webserver permission user which will persist over updates.
- Having nothing as input in `-init` questions will now select the placeholder option.
- New `adminOnly` scope for custom extension routes, which allows developers to limit pages to administrators.
- Custom dashboard routes can now leave `name` empty to not have them show up inside of the SubNavigation element.
- Developers can now use `SVG`, `GIF`, `WebP`, `PNG` and `JPEG` formats for their extension icons instead of having those formats ignored and forced onto a (possibly corrupted) `icon.jpg` file.
- When building, installing or removing extensions Blueprint will now re-apply webserver permissions.
- Add new `views` extension api which can be enabled from [conf.yml](?page=documentation/confyml) and allows for creating custom Laravel blade templates/views which can be imported both admin views and admin/dashboard wrappers.
- Each installed extension now gets assigned a filesystem (`blueprint:<identifier>`) automatically which can be used for file uploading, automatic handling of files, etc.
- Extensions can now check if another extension is installed through a new API in [$blueprint](?page=documentation/$blueprint).

<br/>

#### Bugfixes
- Admin CSS from extensions and Blueprint were imported __before__ other stylesheets, causing them to override extension CSS.
- The green tag in the admin panel had a bright background color, causing it's text to be hard to read.
- Path towards an extension's database migrations directory was not validated due to a mistyped variable.
- `-debug` was throwing seemingly-random errors when receiving text input, which has now been fixed.

<br/>

#### Breaking Changes
- None yet.