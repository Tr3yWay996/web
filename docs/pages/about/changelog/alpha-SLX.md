<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# alpha-SLX
<br/>

#### Changes
- Add `webpack` and `react` to the required dependencies.
- Extensions with website URLs linking to certain "sourceXchange" and "BuiltByBit" domains will now show the `bx-store` icon on their admin panel website button.
- Update the entire logging system by writing a new library for it and redesigning the outputs. This includes rewritten log messages in a large amount of places.
- The `-upgrade` command's script has now been moved onto `blueprint.sh` as it was only responsible for creating a temporarily folder, pulling latest release files and moving them.
- Remove the `tools` directory as all scripts inside it have been implemented directly into `-upgrade` and `-debug`.
- Step away from the `bash_colors` and `throwError` shell-based library used by `blueprint.sh` and group multiple small libraries into one library called `misc`.

<br/>

#### Bugfixes
- The `blueprint` CLI command would return exit code `1` in all cases, even successful events. This has been replaced by `0` for "SUCCESS" events, `1` for "ERROR" events, `2` for "USER-ERROR" events.

<br/>

#### Breaking Changes
- None yet.