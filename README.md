# limiting-max-line-count
This plugin limits max line count.

## Including files
```
<!-- Limiting max line count core CSS file -->
<link rel="stylesheet" href="limiting-max-line-count/limiting-max-line-count.css">

<!-- jQuery 1.7.2+ -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<!-- Limiting max line count core JS file -->
<script src="limiting-max-line-count/limiting-max-line-count.js"></script>
```

## Initializing limiting-max-line-count
```
$(document).ready(function() {
  $('.foo').limitMaxLineCount(3); // The number of rows which you want to specify.
});
```