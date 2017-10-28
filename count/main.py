# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import http
from odoo.http import request


class CountController(http.Controller):

    @http.route('/get/counts', type='json', auth="public")
    def payment_get_status(self):
        cnt = request.env['account.invoice'].search_count([])  # example how to get records count
        res = list()
        res.append({'menu_id': 99, 'field': 'awaitingCount', 'value': cnt})  # just put amount in value
        res.append({'menu_id': 126, 'field': 'picknpackCount', 'value': 20})
        res.append({'menu_id': 283, 'field': 'readyToDispatchCount', 'value': 30})
        res.append({'menu_id': 555, 'field': 'dispachedCount', 'value': 40})
        res.append({'menu_id': 588, 'field': 'faultyCount', 'value': 50})
        return res
