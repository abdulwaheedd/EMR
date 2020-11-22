/// <reference path="../medicinelosses/medicinelossesgrid.ts" />

namespace EMR.Pharmacy {

    import fld = MedicinelossesRow.Fields;

    @Serenity.Decorators.registerClass()
    export class MedicinelossesTabGrid extends MedicinelossesGrid {
        protected getDialogType() { return MedicinelossesTabDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns()/*.filter(x => x.field !== fld.CoaMappingId)*/;
        }


        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ MedicineId: this.MedicineId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.MedicineId;
        }
        private _MedicineId: number;

        get MedicineId() {
            return this._MedicineId;
        }
        set MedicineId(value: number) {
            if (this._MedicineId !== value) {
                this._MedicineId = value;
                this.setEquality('MedicineId', value);
                this.refresh();
            }
        }
    }
}