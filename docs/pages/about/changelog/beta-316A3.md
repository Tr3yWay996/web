<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# beta-316A3
<br/>

#### Changes
- `blueprint.sh` now has a variable to change the webserver permission user which will persist over updates.

<br/>

#### Bugfixes
- Admin CSS from extensions and Blueprint was imported __before__ other stylesheets, causing them to override extension CSS.
- The green tag in the admin panel had a bright background color, causing it's text to become hard to read.

<br/>

#### Breaking Changes
- None yet.