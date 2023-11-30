<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# alpha-NLM
<br/>

#### Changes
- Extensions list alongside `misc` folder inside of `.blueprint` has now been removed.
- `parse_yaml` inside of `.blueprint/lib` has been bumped to the latest commit.
- Replace most (if not all) URLs leading to [`ptero.shop`](https://ptero.shop) with [`blueprint.zip`](https://blueprint.zip).
- Update `installWithBlueprintBanner` asset inside of `.blueprint/assets` to include the new URL of Blueprint instead of the old one.
- Change related link description for [`teamblueprint/web`](https://github.com/teamblueprint/web) alongside removing the extension list in `README.md`.

<br/>

#### Bugfixes
- Improve Docker installation check by properly checking for the `.dockerenv` file this time.

<br/>

#### Breaking Changes
- Website URL changed from [`ptero.shop`](https://ptero.shop) to [`blueprint.zip`](https://blueprint.zip) which means some extensions might need to update the "Requires Blueprint" banner on their marketplace listings.