/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'ETO',
        name: 'eto',
        mimeTypes: [],
        fileExtensions: [],
        defaultToken: '',
        ignoreCase: true,
        brackets: [
            { token: 'delimiter.bracket', open: '{', close: '}' },
            { token: 'delimiter.array', open: '[', close: ']' },
            { token: 'delimiter.parenthesis', open: '(', close: ')' },
            { token: 'delimiter.angle', open: '<', close: '>' },
            { token: 'keyword.tag-function', open: 'function', close: 'end function' },
            { token: 'keyword.tag-if', open: 'if', close: 'end if' },
            { token: 'keyword.tag-select', open: 'select', close: 'end select' },
            { token: 'keyword.tag-try', open: 'try', close: 'end try' },
            { token: 'keyword.tag-while', open: 'while', close: 'end while' },
            { token: 'keyword.tag-do', open: 'do', close: 'loop' },
            { token: 'keyword.tag-for', open: 'for', close: 'next' },
            { token: 'keyword.tag-design', open: 'design', close: 'end design' },
            { token: 'keyword.tag-rule', open: 'rule', close: 'end rule' },
            { token: 'keyword.tag-method', open: 'method', close: 'end method' }
        ],
        textAfterBrackets: true,
        autoClosingPairs: [['{', '}'], ['[', ']'], ['(', ')'], ['"', '"'], ['<', '>'],],
        lineComment: '\'',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        keywords: [
            '%%Category',
            '%%categoryOrder',
            '%%Choices',
            '%%ChoicesDelimiter',
            '%%Description',
            '%%DisplayName',
            '%%EvalChoices',
            '%%evalDisplay',
            '%%EvalHelp',
            '%%expression',
            '%%HelpFile',
            '%%HelpId',
            '%%Hidden',
            '%%Immediate',
            '%%OpenCategories',
            '%%PartEditorCategories',
            '%%PEAllowOther?',
            '%%PEDescription',
            '%%PEEditorType',
            '%%PEMaxValue',
            '%%PEMinValue',
            '%%PERootPart?',
            '%%Prompt',
            '%%RootDesign',
            '%%SignatureInclude',
            '%%SignatureOptions',
            ':',
            ':=',
            'abs',
            'acad_command',
            'acad_getvar',
            'acad_handle',
            'acad_objectCurrentFrame',
            'acad_partForEntity',
            'acad_setvar',
            'acad_wblockEntities',
            'access',
            'acos',
            'addToSearchPath',
            'allocateResource',
            'angle2Vectors',
            'any',
            'apply',
            'Arc',
            'arcCenter2Point',
            'arcCenter3Point',
            'arcCenterTanLineThruPoint',
            'arcLengthCurve',
            'As',
            'ASCII',
            'asin',
            'atan',
            'atan2',
            'attributeExists?',
            'attributeExistsInDefinition?',
            'attributeLocation',
            'attributeLocationInDefinition',
            'attributeValue',
            'attributeValueFromDefinition',
            'bboxCenter',
            'bboxIntersection',
            'bboxLength',
            'bboxPoints',
            'bboxUnion',
            'Block',
            'boolean',
            'boundingBox',
            'Cached',
            'Canonical',
            'Case',
            'Catch',
            'ceiling',
            'centroid',
            'chainPointLists',
            'chainProfile',
            'char',
            'charReplace',
            'Child',
            'childName',
            'children',
            'circleAngle',
            'circlePoint',
            'closeFile',
            'closeResource',
            'colinearPoints?',
            'COM_addRefDispatch_',
            'COM_connectRunningServer_',
            'COM_connectServer_',
            'COM_getMethods_',
            'COM_getProperties_',
            'COM_getProperty_',
            'COM_methodCall_',
            'COM_msgbox',
            'COM_putProperty',
            'COM_releaseDispatch_',
            'COM_verifyDispatch_',
            'commonAncestor',
            'Cone',
            'configReport',
            'convertFileFormat',
            'convexHull2D',
            'coplanarPoints?',
            'copyFile',
            'cos',
            'cosh',
            'countPartsOfType',
            'createProcess',
            'curvature',
            'curveDerivative',
            'curveEndPoint',
            'curvePointAtLength',
            'curveVector',
            'Cylinder',
            'dataStackSize',
            'dateTimeString',
            'debugBreak',
            'defineMap',
            'degrees',
            'deleteMapValue',
            'Design',
            'designCategoryOrder',
            'designExists?',
            'designIsKindOf?',
            'designLibrary',
            'designLoadPath',
            'Dim',
            'directoryList',
            'dist',
            'dotProduct',
            'draft',
            'dropPoint',
            'dropPointOnLine',
            'Each',
            'ellipseAngle',
            'Else',
            'ElseIf',
            'empty?',
            'End Child',
            'End Design',
            'End If',
            'End Rule',
            'End Select',
            'End Try',
            'ensureDirectoryPathExists',
            'equal',
            'equalTol?',
            'error',
            'evaluateString',
            'even?',
            'every?',
            'exportModel',
            'filletCenter',
            'Finally',
            'find',
            'findDuplicates',
            'findInPlist',
            'findProfilePlane',
            'first',
            'firstN',
            'Fixed',
            'flatten',
            'floor',
            'For',
            'For',
            'format',
            'fractionString',
            'frame',
            'frame3Point',
            'frameXY',
            'genericDraw',
            'get_childtree',
            'getAIIDXFpoints',
            'getBlockHandles',
            'getChildrenOfType',
            'getDesignAnnotation',
            'getDesignMixins',
            'getDesignRuleAnnotation',
            'getDesignRules',
            'getDesigns',
            'getDXFint',
            'getDXFnumber',
            'getDXFpoint',
            'getDXFstring',
            'getDynamicRules',
            'getenv',
            'getMapKeys',
            'getMapValue',
            'getPartDesignMixins',
            'getRuleAnnotation',
            'Group',
            'hasRule?',
            'hostMajorVersion',
            'hostMinorVersion',
            'hostName',
            'identity',
            'If',
            'In',
            'intCurveCurve',
            'integer',
            'interArcArc',
            'interLineLine',
            'interLinePlane',
            'interp',
            'invertFrame',
            'isBound?',
            'isDescendant?',
            'isKindOf?',
            'isModified?',
            'isParameter?',
            'isResourceClosed?',
            'isUnix?',
            'isWindows?',
            'iterate',
            'iv',
            'last',
            'length',
            'libraryLocation',
            'libraryLocked?',
            'libraryPrettyName',
            'librarySystem?',
            'libraryType',
            'Line',
            'line2TanArcP',
            'list',
            'localX',
            'localY',
            'localZ',
            'log',
            'log10',
            'Lookup',
            'makeDirectory',
            'makeLargeList',
            'makeName',
            'makeNumber',
            'makePart',
            'makeString',
            'max',
            'maxList',
            'Me',
            'member',
            'midPoint',
            'min',
            'minList',
            'mod',
            'modelerName',
            'MultiLineText',
            'Name',
            'newline',
            'Next',
            'normalizeAngle',
            'notAny?',
            'noteSideEffect',
            'novalue',
            'nth',
            'number',
            'odbc_databaseClose',
            'odbc_databaseExecuteSQL',
            'odbc_databaseGetCatalogNames',
            'odbc_databaseGetColumnNames',
            'odbc_databaseGetConnectionString',
            'odbc_databaseGetFieldInfo',
            'odbc_databaseGetSchemaNames',
            'odbc_databaseGetTableNames',
            'odbc_databaseOpen',
            'odbc_escapeDate',
            'odbc_escapeGUID',
            'odbc_escapeTime',
            'odbc_escapeTimeStamp',
            'odbc_generateGUID',
            'odbc_getDSNs',
            'odbc_recordsetAddNew',
            'odbc_recordsetCancelUpdate',
            'odbc_recordsetClose',
            'odbc_recordsetDelete',
            'odbc_recordsetEdit',
            'odbc_recordsetFindNext',
            'odbc_recordsetGetColumn',
            'odbc_recordsetGetFieldNames',
            'odbc_recordsetGetFieldValue',
            'odbc_recordsetGetRecordCount',
            'odbc_recordsetGetRow',
            'odbc_recordsetIsBOF',
            'odbc_recordsetIsEmpty',
            'odbc_recordsetIsEOF',
            'odbc_recordsetMove',
            'odbc_recordsetMoveFirst',
            'odbc_recordsetMoveLast',
            'odbc_recordsetMoveNext',
            'odbc_recordsetMovePrev',
            'odbc_recordsetOpen',
            'odbc_recordsetRequery',
            'odbc_recordsetSetFieldValue',
            'odbc_recordsetUpdate',
            'odd?',
            'onRight?',
            'openFile',
            'Optional',
            'osMajorVersion',
            'osMinorVersion',
            'osName',
            'Parameter',
            'Parameter Rule',
            'Part',
            'partDesign',
            'partition',
            'partParameters',
            'partRule',
            'Passive',
            'perpendicular',
            'point',
            'point_',
            'pointInPolygon?',
            'pointTanArcV',
            'Polygon',
            'polygonCheck',
            'polygonDifference',
            'polygonInside?',
            'polygonIntersection',
            'polygonOffsetConvex',
            'polygonUnion',
            'polygonUnionList',
            'position',
            'printValue',
            'productMajorVersion',
            'productMinorVersion',
            'productName',
            'projectLocation',
            'projectPoint',
            'projectVector',
            'prunelteration',
            'pruneOrphanRules',
            'Quantity',
            'radians',
            'raiseProjectEvent',
            'random',
            'readInteger',
            'readIntegerRes',
            'readLinesFromFile',
            'readLinesFromFileRes',
            'readNumber',
            'readNumberRes',
            'readSimpleDataFile',
            'readSimpleDataFileRes',
            'readXMLfile',
            'Rectangle',
            'ref',
            'refChainFromRoot',
            'refChainFromWorld',
            'Regex',
            'relateFrame',
            'removeAllOccurencesOf',
            'removeDuplicates',
            'removeFromPList',
            'removeIf?',
            'removeIfNot',
            'Required',
            'resetFunctionHits',
            'rest',
            'resumeDependencyRecording',
            'Return',
            'reverse',
            'rotateFrame',
            'rotateVector',
            'round',
            'roundDown',
            'roundInc',
            'roundPlus',
            'roundToNearest',
            'roundUp',
            'Rule',
            'scaleFrame',
            'second',
            'Select',
            'self',
            'setCircularityHandler',
            'setDifference',
            'setIntersection',
            'setMapValue',
            'setUnion',
            'Shared',
            'sin',
            'sinh',
            'sleep',
            'some?',
            'sort',
            'Sphere',
            'splitString',
            'sqrt',
            'standardLibraries',
            'Step',
            'storeValue',
            'string',
            'stringLower',
            'stringPosition',
            'stringReplace',
            'stringUpper',
            'stringValue',
            'stringValueEx',
            'subList',
            'subset?',
            'subString',
            'surfaceArea',
            'surfaceNormalAtPoint',
            'suspendDependencyRecording',
            'system',
            'tab',
            'tan',
            'tanh',
            'Text',
            'textHeight',
            'textWidth',
            'Then',
            'third',
            'tick',
            'To',
            'Torus',
            'transformPoint',
            'transformVector',
            'translateFrame',
            'treeIterator',
            'trim',
            'trimTan',
            'trimTanEllipse',
            'Try',
            'typeCheck',
            'unbindSlot',
            'Uncached',
            'uniqueName',
            'unitize',
            'user',
            'VaultRaiseError',
            'vector',
            'vector_',
            'vectorAt',
            'While',
            'worldFrame',
            'wrapWords',
            'write',
            'writeAllDesignsMemoryUsage',
            'writeAllMapsMemoryUsage',
            'writeAllPartsMemoryUsage',
            'writeDesignMemoryUsage',
            'writedwffile',
            'writeFunctionHits',
            'writePartMemoryUsage',
            'writeRes',
            'xor'
        ],
        tagwords: [
            'If',
            'Select',
            'Try',
            'Design',
            'Child',
            'Rule',
            'Function',
            'Method',
            'While',
            'Do',
            'Loop',
            'For',
            'Next'
        ],
        // we include these common regular expressions
        symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /U?[DI%L&S@]?/,
        floatsuffix: /[R#F!]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                { include: '@whitespace' },
                [/next(?!\w)/, { token: 'keyword.tag-for', bracket: '@close' }],
                [/loop(?!\w)/, { token: 'keyword.tag-do', bracket: '@close' }],
                [/end\s+(?!for|do)([a-zA-Z_]\w*)/, { token: 'keyword.tag-$1', bracket: '@close' }],
                [/[a-zA-Z_]\w*/, { cases: { '@tagwords': { token: 'keyword.tag-$0', bracket: '@open' }, '@keywords': { token: 'keyword.$0' }, '@default': 'identifier' } }],
                [/^\s*#\w+/, 'keyword'],
                [/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, 'number.float'],
                [/&H[0-9a-f]+(@integersuffix)/, 'number.hex'],
                [/&0[0-7]+(@integersuffix)/, 'number.octal'],
                [/\d+(@integersuffix)/, 'number'],
                [/#.*#/, 'number'],
                [/[{}()\[\]]/, '@brackets'],
                [/@symbols/, 'delimiter'],
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, 'string', '@string'],
            ],
            whitespace: [
                [/[ \t\r\n]+/, ''],
                [/(\'|REM(?!\w)).*$/, 'comment'],
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"C?/, 'string', '@pop']
            ],
        },
    };
});