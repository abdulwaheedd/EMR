
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblAbortionTypeGrid extends Serenity.EntityGrid<TblAbortionTypeRow, any> {
        protected getColumnsKey() { return 'Configs.TblAbortionType'; }
        protected getDialogType() { return TblAbortionTypeDialog; }
        protected getIdProperty() { return TblAbortionTypeRow.idProperty; }
        protected getLocalTextPrefix() { return TblAbortionTypeRow.localTextPrefix; }
        protected getService() { return TblAbortionTypeService.baseUrl; }

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