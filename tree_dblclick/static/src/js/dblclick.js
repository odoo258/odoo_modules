odoo.define('tree_dblclick.dblclick', function (require) {
    "use strict";
    var ListView = require('web.ListView');

    ListView.List.include({
        init: function (group, opts) {
            var self = this;
            this._super(group, opts);
            this.$current = $('<tbody>')
                .delegate('tr', 'dblclick', function (e) {
                    var row_id = self.row_id(e.currentTarget);
                    if (row_id) {
                        e.stopPropagation();
                        if (!self.dataset.select_id(row_id)) {
                            throw new Error(_t("Could not find id in dataset"));
                        }
                        self.row_clicked(e);
                    }
                })
                .delegate('td.o_list_record_selector', 'click', function (e) {
                    e.stopPropagation();
                    var selection = self.get_selection();
                    var checked = $(e.currentTarget).find('input').prop('checked');
                    $(self).trigger(
                        'selected', [selection.ids, selection.records, !checked]);
                })
                .delegate('tr', 'click', function (e) {
                    var row_id = self.row_id(e.currentTarget);
                });
        },
    });
});
