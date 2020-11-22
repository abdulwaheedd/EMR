
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblBloodGroupGrid extends Serenity.EntityGrid<TblBloodGroupRow, any> {
        protected getColumnsKey() { return 'Configs.TblBloodGroup'; }
        protected getDialogType() { return TblBloodGroupDialog; }
        protected getIdProperty() { return TblBloodGroupRow.idProperty; }
        protected getLocalTextPrefix() { return TblBloodGroupRow.localTextPrefix; }
        protected getService() { return TblBloodGroupService.baseUrl; }

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