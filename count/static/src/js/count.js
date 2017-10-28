odoo.define('count.menu', function(require) {
    "use strict";
    var core = require('web.core');
    var session = require('web.session');
    var ajax = require('web.ajax');
    var Widget = require('web.Widget');
    var QWeb = core.qweb;
    var Menu = require('web.Menu');

    Menu.include({
        on_needaction_loaded: function(data) {
            var self = this;
            this.needaction_data = data;
            var $item;
            _.each(this.needaction_data, function(item, menu_id) {
                $item = self.$secondary_menus.find('a[data-menu="' + menu_id + '"]');
                $item.find('.badge').remove();
                if (item.needaction_counter && item.needaction_counter > 0) {
                    $item.append(QWeb.render("Menu.needaction_counter", {widget: item}));
                }
            });
            ajax.jsonRpc('/get/counts', 'call', {}).then(function(result) {
                _.each(result, function(el) {
                    var m = {'needaction_counter': el.value};
                    var $item = self.$secondary_menus.find('a[data-menu="' + el.menu_id + '"]');
                    $item.find('.badge').remove();
                    $item.append(QWeb.render("Menu.needaction_counter", {widget: m}));
                });
            });
        },
    });
});