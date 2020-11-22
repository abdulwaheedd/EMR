/// <reference path="../tbldischarge/tbldischargegrid.ts" />

namespace EMR.Regs {

    import fld = TblDischargeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AdmissionsDischargeGrid extends TblDischargeGrid {
        protected getDialogType() { return AdmissionsDischargeDialog; }

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
            this.editItem({Mrid: this.Mrid });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.Mrid;
        }
        private __Mrid: number;

        get Mrid() {
            return this.__Mrid;
        }
        set Mrid(value: number) {
            if (this.__Mrid !== value) {
                this.__Mrid = value;
                this.setEquality('Mrid', value);
                this.refresh();
            }
        }
    }
}