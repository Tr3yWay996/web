# $blueprint
<h4 class="fw-light">Library for extensions to simplify admin notifications, databasing and more.</h4><br/>

<div class="alert alert-dark" role="alert">
  <i class="bi bi-currency-dollar me-2 mt-1 mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>BlueprintExtensionLibrary</b> (or $blueprint) is added automatically when using the default controller by leaving your controller path option blank. For custom controllers, you may refer to <a href="?page=developing-extensions/Custom-controllers" class="alert-link">this guide</a>.</div>
</div>
<br/>

### **What is $blueprint?**
\$blueprint (short for BlueprintExtensionLibrary) allows extensions to do operations like databasing inside of custom controllers (if imported), admin wrappers and dashboard wrappers.

The BlueprintExtensionLibrary is automatically imported to dashboard wrappers, admin wrappers, admin views and default admin controllers. It's mainly used to carry over configuration options from the extension's admin page to anywhere else but can also be used to read, make and wipe files or display notifications to administrators.

<br/>

### **Functions**

##### Databasing <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Universal</span>
`dbGet(table, record)`\
Fetch a record from the database.

`dbSet(table, record, value)`\
Set a database record.

`dbForget(table, record)` <tag type="new" content="beta-F248"/></tag>\
Delete/forget a database record.

<br/>

##### Notifications <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill">Admin</span>
`notify(text)`\
Allows you to show notifications on the admin panel. Appears on next reload.

`notifyAfter(delay, text)`\
Allows you to show notifications on the admin panel after a delay. Admin page automatically reloads after specified delay.

`notifyNow(text)`\
Allows you to show notifications on the admin panel after a delay. This behaves similarly to using a delay of zero with `notifyAfter()`.

<br/>

##### Files <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Universal</span>
`fileRead(path)`\
Returns the contents of the file defined in `path`.

`fileMake(path)`\
Make a new file with the name defined in `path`.

`fileWipe(path)`\
Removes the file defined in `path` from the filesystem.

<br/>

##### Extensions <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Universal</span>
`extension(identifier)` <tag type="new" content="beta-A428"/></tag>\
Returns true if an extension with the identifier defined in `identifier` is installed, otherwise returns false.