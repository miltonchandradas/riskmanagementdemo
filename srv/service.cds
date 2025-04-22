using { RiskManagementDemo as my } from '../db/schema.cds';

@path : '/service/RiskManagementDemoService'
service RiskManagementDemoService
{
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;
}

annotate RiskManagementDemoService with @requires :
[
    'authenticated-user'
];
