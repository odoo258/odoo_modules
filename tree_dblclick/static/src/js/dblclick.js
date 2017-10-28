odoo.define('tree_dblclick.dblclick', function (require) {
    "use strict";
    var core = require('web.core');
    var data = require('web.data');
    var data_manager = require('web.data_manager');
    var DataExport = require('web.DataExport');
    var formats = require('web.formats');
    var common = require('web.list_common');
    var Model = require('web.DataModel');
    var Pager = require('web.Pager');
    var pyeval = require('web.pyeval');
    var session = require('web.session');
    var Sidebar = require('web.Sidebar');
    var utils = require('web.utils');
    var View = require('web.View');

    var Class = core.Class;
    var _t = core._t;
    var _lt = core._lt;
    var QWeb = core.qweb;
    var list_widget_registry = core.list_widget_registry;

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
                .delegate('tr', 'click', function (e) {
                });
        },
    });
});