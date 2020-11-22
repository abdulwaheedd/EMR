/// <reference path="../tbloperations/tbloperationsgrid.ts" />

namespace EMR.Regs {

    import fld = TblOperationsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AdmissionsOperationsGrid extends TblOperationsGrid {
        protected getDialogType() { return AdmissionsOperationsDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns()/*.filter(x => x.field !== fld.CoaMappingId)*/;
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({AdId: this.AdId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.AdId;
        }
        private __AdId: number;

        get AdId() {
            return this.__AdId;
        }
        set AdId(value: number) {
            if (this.__AdId !== value) {
                this.__AdId = value;
                this.setEquality('AdId', value);
                this.refresh();
            }
        }
    }
}