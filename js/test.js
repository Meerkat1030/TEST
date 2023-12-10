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

function searchItems(input, parent) {
    var filter = input.toUpperCase();
    // Select all .col-3.bg-hover where the parent is a row preceded by #id
    var candidates = $(parent).find(".col-3.bg-hover");
    while ($(candidates).length == 0) {
        parent = $(parent).parent();
        candidates = parent.find(".col-3.bg-hover");
    }
    for (var i = 0; i < candidates.length; ++i) {
        if ($(candidates[i]).attr("filtered") == "true") {
            continue;
        }
        var img = $(candidates[i]).find("img");
        var name = $(candidates[i]).find("p");
        var text = name.text();
        if (text.toUpperCase().indexOf(filter) > -1) {
            $(candidates[i]).show();
        }
        else {
            $(candidates[i]).hide();
        }
    }
}