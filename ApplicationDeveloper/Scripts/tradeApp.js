"use strict";

// Enable search.
function filterColumn(i) {
    $("#trades").DataTable().column(i).search(
        $("#col" + i + "_filter").val(),
        $("#col" + i + "_regex").prop("checked"),
        $("#col" + i + "_smart").prop("checked")
    ).draw();
}

$(document).ready(function () {
// Populate data table using Ajax call.
    $('#trades').DataTable({
        "order": [[2, "asc"]],
        "sDom": '<"top"i>rt<"bottom"p><"clear">',
        "processing": true,
        "columns": [
            {
                "data": "TradeDate",
                "render": function (data) {
                    var date = new Date(data);
                    return date.toLocaleString('en-US').replace(",","");
                 }
            },
            {
                "data": "SettleDate",
                "render": function (data) {
                    var date = new Date(data);
                    return date.toLocaleString('en-US').replace(",", "");
                }
            },
            { "data": "Symbol" },
            { "data": "Account" },
            { "data": "Quantity" },
            {
                "data": "Price",
                "render": function (data) {
                    return data.toFixed(2);
                }
            },
            {
                "data": "Principal",
                "render": function (data) {
                    return data.toFixed(2);
                }
            },
            { "data": "Currency" }
        ],
        "ajax": {
            url: "/api/tradevalues",
            dataSrc: ""
        }
    });

// When search texts are entered, filter the data. 
    $("input.column_filter").on("keyup click", function () {
        filterColumn($(this).parents("tr").attr("data-column"));
    });
});
