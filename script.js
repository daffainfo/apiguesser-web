$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $("#search").keyup(function () {
        if (!$(this).val().length) {
            $("#result").html("");
            $("#count").html("");
        } else {
            let count = 0;
            $("#result").html("");
            $("#state").val("");
            let searchField = $("#search").val();
            $.getJSON("data.json", function (data) {
                $.each(data, function (key, value) {
                    // console.log(array_count.length)
                    let regex_result = new RegExp(value.regex, "g");
                    if (searchField.match(regex_result)) {
                        count++;
                        $("#result").append(`
                            <div class="col-sm-6">
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <h5 class="card-title">` + value.name + `</h5>
                                        <p class="card-text">` + value.description + `</p>
                                        <a href="` + value.url + `" class="btn btn-primary" target="_blank" >More Information</a>
                                    </div>
                                </div>
                            </div>`
                        );
                    }
                    $("#count").text(count + " results of " + searchField);
                });
            });
        }
    });
});
