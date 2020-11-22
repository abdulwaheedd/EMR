
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWardDiseasesGrid extends Serenity.EntityGrid<TblWardDiseasesRow, any> {
        protected getColumnsKey() { return 'Configs.TblWardDiseases'; }
        protected getDialogType() { return TblWardDiseasesDialog; }
        protected getIdProperty() { return TblWardDiseasesRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardDiseasesRow.localTextPrefix; }
        protected getService() { return TblWardDiseasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}