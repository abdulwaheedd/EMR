
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class LkpPhysExamGroupGrid extends Serenity.EntityGrid<LkpPhysExamGroupRow, any> {
        protected getColumnsKey() { return 'Configs.LkpPhysExamGroup'; }
        protected getDialogType() { return LkpPhysExamGroupDialog; }
        protected getIdProperty() { return LkpPhysExamGroupRow.idProperty; }
        protected getLocalTextPrefix() { return LkpPhysExamGroupRow.localTextPrefix; }
        protected getService() { return LkpPhysExamGroupService.baseUrl; }

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