<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

        <title>PropertyPro CRM</title>
    </head>
    <body></body>
        <div id="app"></div>

        @viteReactRefresh
        @vite('./resources/js/App.tsx')
    </body>
</html>
