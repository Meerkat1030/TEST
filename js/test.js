$(document).ready(function () {
    enableSearch("#left-champ-search");
});

function enableSearch(parent) {
    var searchBar = $(parent)
    searchBar.on("keyup", function() {
        var input = $(this).val();
        searchItems(input, parent);
    });
}