
namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedicinelossesGrid extends Serenity.EntityGrid<MedicinelossesRow, any> {
        protected getColumnsKey() { return 'Pharmacy.Medicinelosses'; }
        protected getDialogType() { return MedicinelossesDialog; }
        protected getIdProperty() { return MedicinelossesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinelossesRow.localTextPrefix; }
        protected getService() { return MedicinelossesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}