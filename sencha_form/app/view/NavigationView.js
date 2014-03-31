/*
 * File: app/view/NavigationView.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('raxa.view.NavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.navigationview',

    requires: [
        'Ext.Panel',
        'Ext.Map',
        'Ext.navigation.Bar',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'panel',
                title: 'Locations',
                items: [
                    {
                        xtype: 'map',
                        height: 200
                    }
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'listLocationsButton',
                    iconCls: 'more',
                    text: ''
                },
                {
                    xtype: 'button',
                    align: 'right',
                    docked: 'right',
                    iconCls: 'add',
                    text: ''
                }
            ]
        }
    }

});