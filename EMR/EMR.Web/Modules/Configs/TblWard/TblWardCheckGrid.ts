/// <reference path="tblwardgrid.ts" />

namespace EMR.Configs {

    @Serenity.Decorators.registerClass()
    export class TblWardCheckGrid extends Serenity.EntityGrid<TblWardRow, any> {

        protected getColumnsKey() { return "Configs.TblWard"; }
        protected getDialogType() { return <any>TblWardDialog; }
        protected getIdProperty() { return TblWardRow.idProperty; }
        protected getLocalTextPrefix() { return TblWardRow.localTextPrefix; }
        protected getService() { return TblWardService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected usePager() {
            return false;
        }

        protected getInitialTitle() {
            return null;
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons = buttons.filter(x => x.cssClass != 'add-button');
            return buttons;
        }

        get selectedItems() {
            return this.rowSelection.getSelectedAsInt32().map(x => this.view.getItemById(x));
        }
    }
}