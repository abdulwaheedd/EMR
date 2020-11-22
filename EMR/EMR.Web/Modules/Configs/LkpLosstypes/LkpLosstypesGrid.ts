
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpLosstypesGrid extends Serenity.EntityGrid<LkpLosstypesRow, any> {
        protected getColumnsKey() { return 'Configs.LkpLosstypes'; }
        protected getDialogType() { return LkpLosstypesDialog; }
        protected getIdProperty() { return LkpLosstypesRow.idProperty; }
        protected getLocalTextPrefix() { return LkpLosstypesRow.localTextPrefix; }
        protected getService() { return LkpLosstypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}