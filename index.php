<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RESTCountries</title>
        <script src="countries.js" defer></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body class="w-50 mx-auto py-5">
        <div class="mb-5">
            <label for="search" class="form-label">Rechercher par capitale</label>
            <input type="search" class="form-control" id="search">
        </div>
        <div class="d-none" id="load">Chargement en cours...</div>
    </body>
</html>