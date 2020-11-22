
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblEducationGrid extends Serenity.EntityGrid<TblEducationRow, any> {
        protected getColumnsKey() { return 'Configs.TblEducation'; }
        protected getDialogType() { return TblEducationDialog; }
        protected getIdProperty() { return TblEducationRow.idProperty; }
        protected getLocalTextPrefix() { return TblEducationRow.localTextPrefix; }
        protected getService() { return TblEducationService.baseUrl; }

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