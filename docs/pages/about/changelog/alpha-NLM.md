<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# alpha-NLM
<br/>

#### Changes
- Extensions list alongside `misc` folder inside of `.blueprint` has now been removed.
- `parse_yaml` inside of `.blueprint/lib` has been bumped to the latest commit.
- Replace most (if not all) URLs leading to [`ptero.shop`](https://ptero.shop) with [`blueprint.zip`](https://blueprint.zip).
- Update `installWithBlueprintBanner` asset inside of `.blueprint/assets` to include the new URL of Blueprint instead of the old one.
- Change related link description for [`teamblueprint/web`](https://github.com/teamblueprint/web) alongside removing the extension list in `README.md`.
- Remove all old versions of the Blueprint logo from `.blueprint/assets`.
- Outdated cache overlay is now a tiny banner at the bottom of the admin panel instead of a fullscreen overlay.
- Add new `logoCoverTextPurple` asset.
- Admin cache no longer directly modifies `pterodactyl.css` but instead goes through a file made specifically for extension css importing.
- Add "Byte" to the Blueprint admin page.

<br/>

#### Bugfixes
- Improve Docker installation check by properly checking for the `.dockerenv` file this time.
- Development files were referred to as "extension files" in `-wipe`.
- "Refresh your cache" overlay appeared to break from time to time.
- `conf.yml` had a different order for "wrapper" and "css" values across "dashboard" and "admin".
- `-info` would show log function names when some values were empty.
- Running `bash blueprint.sh` after installing Blueprint would show a `[WARNING]` log which should be `[FATAL]` for consistency.

<br/>

#### Breaking Changes
- Website URL changed from [`ptero.shop`](https://ptero.shop) to [`blueprint.zip`](https://blueprint.zip) which means some extensions might need to update the "Requires Blueprint" banner on their marketplace listings.