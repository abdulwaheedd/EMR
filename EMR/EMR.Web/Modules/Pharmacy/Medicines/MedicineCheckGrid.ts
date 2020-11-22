/// <reference path="medicinesgrid.ts" />

namespace EMR.Pharmacy {

    @Serenity.Decorators.registerClass()
    export class MedicineCheckGrid extends Serenity.EntityGrid<MedicinesRow, any> {

        protected getColumnsKey() { return "Pharmacy.LkpMedicine"; }
        protected getDialogType() { return <any>MedicinesDialog; }
        protected getIdProperty() { return MedicinesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinesRow.localTextPrefix; }
        protected getService() { return MedicinesService.baseUrl; }

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