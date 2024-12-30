<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
$php_variable = "He-Man";
?>


<script>
var js_variable = "<?php echo $php_variable; ?>";
// Test:
alert(js_variable);
</script>
</body>
</html>














