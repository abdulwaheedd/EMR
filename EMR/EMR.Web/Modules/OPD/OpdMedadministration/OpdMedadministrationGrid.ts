
namespace EMR.OPD {

    @Serenity.Decorators.registerClass()
    export class OpdMedadministrationGrid extends Serenity.EntityGrid<OpdMedadministrationRow, any> {
        protected getColumnsKey() { return 'OPD.OpdMedadministration'; }
        protected getDialogType() { return OpdMedadministrationDialog; }
        protected getIdProperty() { return OpdMedadministrationRow.idProperty; }
        protected getLocalTextPrefix() { return OpdMedadministrationRow.localTextPrefix; }
        protected getService() { return OpdMedadministrationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}