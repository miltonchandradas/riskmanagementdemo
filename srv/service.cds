using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

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

    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName
        };
}

annotate RiskManagementDemoService with @requires :
[
    'authenticated-user'
];
