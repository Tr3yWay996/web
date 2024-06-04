<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# beta-F248
<br/>

#### Changes
- Add `TelemetryService`'s api endpoint to `PlaceholderService` so it can easily be changed everywhere at once.
- Add new developer [flag](?page=documentation/flags) called `developerKeepApplicationCache` that skips flushing application cache when installed with `-build`.
- Don't replace `RouteServiceProvider` ([#33](https://github.com/BlueprintFramework/framework/pull/33)) for Blueprint's Laravel routes.
- Blueprint's admin page no longer collects telemetry as it's not a useful data point anymore.
- [`BlueprintExtensionLibrary`](?page=documentation/$blueprint) now has it's functions documented inside of the codebase, enabling easier development with IDEs. (Suggested by [@itsvic-dev](https://github.com/itsvic-dev/))
- Add a brand new `dbForget()` function to [`BlueprintExtensionLibrary`](?page=documentation/$blueprint) that allows for deleting/forgetting database records.
- Add additional placement options for the server's "Terminal" page to [Components.yml](?page=documentation/componentsyml). ([#34](https://github.com/BlueprintFramework/framework/pull/34))
- Extension buttons have been redesigned once again and should now look more recognizable for each extension.

<br/>

#### Bugfixes
- Input validation wasn't done correctly on Blueprint's own admin settings page, this should now be validated better.
- Custom Laravel routes for extensions were not unlinked correctly when using `-remove` to remove an extension.
- `logFormat.sh` used `tput` for coloring logs, which was not checked as a dependency by `blueprint.sh`.
- Fix bad exit code ([#32](https://github.com/BlueprintFramework/framework/pull/32)) in `blueprint.sh`.
- `ServerRouter.tsx` still had a leftover debug line, this has now been fixed. (Reported by [@ArnaudLier](https://github.com/ArnaudLier))
- Extension information values could not contain the `&` character. Doing so would break some pages. (Reported by [@0x7d8](https://github.com/0x7d8))
- Extension-provided scripts were sometimes ran with root permissions, which was not intentional.

<br/>

#### Breaking Changes
- None yet.