# Console.yml
<h4 class="fw-light">Create and schedule Artisan commands.</h4><br/>

### **What is Console.yml?**
`Console.yml` allows you to create and schedule Artisan commands through an easy-to-use configuration file. These commands are automatically prefixed with your extension's identifier preventing conflicts between extensions.

<br/>

### **Configuration**
The YAML file shown below contains an example of a `Console.yml` configuration.

```yaml
- { Signature: "foo", Description: "returns bar", Path: "foobar.php", Interval: "" }
- { Signature: "byte", Description: "[  ^ ^]", Path: "byte.php", Interval: "everyMinute" }
- { Signature: "hello", Description: "prints 'hello world'", Path: "folder/hello.php", Interval: "*/5 * * * *" }
```

<br/>

### **Intervals**
Alongside cron syntax, Blueprint supports the following interval options:

<div class="row row-cols-md-2 row-cols-1 g-3">
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyMinute</code></b><br/>
      Run the task every minute
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyTwoMinutes</code></b><br/>
      Run the task every two minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyThreeMinutes</code></b><br/>
      Run the task every three minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyFourMinutes</code></b><br/>
      Run the task every four minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyFiveMinutes</code></b><br/>
      Run the task every five minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyTenMinutes</code></b><br/>
      Run the task every ten minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyFifteenMinutes</code></b><br/>
      Run the task every fifteen minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>everyThirtyMinutes</code></b><br/>
      Run the task every thirty minutes
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>hourly</code></b><br/>
      Run the task every hour
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>daily</code></b><br/>
      Run the task every day
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>weekdays</code></b><br/>
      Run the task every weekday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>weekends</code></b><br/>
      Run the task every weekend-day
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>sundays</code></b><br/>
      Run the task every sunday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>mondays</code></b><br/>
      Run the task every monday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>tuesdays</code></b><br/>
      Run the task every tuesday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>wednesdays</code></b><br/>
      Run the task every wednesday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>thursdays</code></b><br/>
      Run the task every thursday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>fridays</code></b><br/>
      Run the task every friday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>saturdays</code></b><br/>
      Run the task every saturday
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>weekly</code></b><br/>
      Run the task every week
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>monthly</code></b><br/>
      Run the task every month
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>quarterly</code></b><br/>
      Run the task every quarter
    </div>
  </div>
  <div class="col">
    <div class="bg-dark-subtle rounded-3 p-3">
      <b><code>yearly</code></b><br/>
      Run the task every year
    </div>
  </div>
</div>