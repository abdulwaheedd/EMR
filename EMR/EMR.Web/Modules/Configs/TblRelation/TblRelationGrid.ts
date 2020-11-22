
namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblRelationGrid extends Serenity.EntityGrid<TblRelationRow, any> {
        protected getColumnsKey() { return 'Configs.TblRelation'; }
        protected getDialogType() { return TblRelationDialog; }
        protected getIdProperty() { return TblRelationRow.idProperty; }
        protected getLocalTextPrefix() { return TblRelationRow.localTextPrefix; }
        protected getService() { return TblRelationService.baseUrl; }

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