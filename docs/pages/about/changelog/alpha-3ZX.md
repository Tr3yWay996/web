<span class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill"><i class="bi bi-binoculars-fill"></i> Pre-release</span>
# alpha-3ZX
<br/>

#### Changes
- New installation timestamp placeholder: `^#timestamp#^`
- New public directory placeholder: `^#publicpath#^`
- Add website button icon for Patreon, Reddit, Trello, GitLab and more.
- Uninstallation script has been added that allows extensions to remove extension files that Blueprint cannot keep track of.
- New asset: `logoCoverTextBlue.jpg`.
- Import [Bootstrap Icons](https://icons.getbootstrap.com) to the admin page by default.
- Developers now see a warning log when using templates on older, outdated versions of Blueprint.
- Update related links in `README.md` and update extensions list in both `README.md` and `extensions.md`.

<br/>

#### Bugfixes
- Incorrect website button icon for Discord extension website links.
- Database values were not being synced when running the install script for the first time after upgrading.
- "Unknown file or directory" errors every time Blueprint logs something when the debug log file is missing.

<br/>

#### Breaking Changes
- None yet.