sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'riskmanagementdemo.risks',
            componentId: 'RisksObjectPage',
            contextPath: '/Risks'
        },
        CustomPageDefinitions
    );
});