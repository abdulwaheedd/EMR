
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblProfessionsGrid extends Serenity.EntityGrid<TblProfessionsRow, any> {
        protected getColumnsKey() { return 'Configs.TblProfessions'; }
        protected getDialogType() { return TblProfessionsDialog; }
        protected getIdProperty() { return TblProfessionsRow.idProperty; }
        protected getLocalTextPrefix() { return TblProfessionsRow.localTextPrefix; }
        protected getService() { return TblProfessionsService.baseUrl; }

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