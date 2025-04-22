sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementdemo/risks/test/integration/FirstJourney',
		'riskmanagementdemo/risks/test/integration/pages/RisksList',
		'riskmanagementdemo/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementdemo/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);