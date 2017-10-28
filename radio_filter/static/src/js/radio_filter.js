odoo.define("radio_filter.radio_filter", function (require) {
    "use strict";
    var search_inputs = require('web.search_inputs');

    search_inputs.FilterGroup.include({
        clear_circle: function(e){
            if ($(e.target).parents('.o_filters_menu').length){
                $("ul.dropdown-menu.o_filters_menu span.radioselect").each(function() {
                    $( this ).removeClass("fa-circle fa-circle-o");
                    $( this ).addClass("fa-circle-o");
                });}
            if ($(e.target).parents('.o_group_by_menu').length){
                $("ul.dropdown-menu.o_group_by_menu span.radioselect").each(function() {
                $( this ).removeClass("fa-circle fa-circle-o");
                $( this ).addClass("fa-circle-o")
            });}
        },
        toggle_filter: function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(e.target).is(".radioselect")) {
                this.clear_circle(e);
                if ($(e.target).parents('.o_filters_menu').length){
                    for (var i = $("div.o_searchview .fa-filter ~ .o_facet_remove").length-1; i >= 0; i--) {
                        $("div.o_searchview .fa-filter ~ .o_facet_remove")[i].click();
                    }
                    $(e.target).removeClass("fa-circle-o");
                    $(e.target).addClass("fa-circle")
                }
                if ($(e.target).parents('.o_group_by_menu').length){
                    for (var i = $("div.o_searchview .fa-bars ~ .o_facet_remove").length-1; i >= 0; i--) {
                        $("div.o_searchview .fa-bars ~ .o_facet_remove")[i].click();
                    }
                    $(e.target).removeClass("fa-circle-o");
                    $(e.target).addClass("fa-circle")
                }
                this.toggle(this.filters[Number($(e.target).parent().parent().data('index'))]);
            }
            else{
                this.clear_circle(e);
                this.toggle(this.filters[Number($(e.target).parent().data('index'))]);
            }
        },
    });
});
