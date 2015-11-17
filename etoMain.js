/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", './etoDef', 'vscode'], function (require, exports, languageDef, vscode_1) {
    function activate(subscriptions) {
        subscriptions.push(vscode_1.Modes.registerMonarchDefinition('eto', languageDef.language));
    }
    exports.activate = activate;
});