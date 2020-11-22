/// <reference path="../regvisits/regvisitsgrid.ts" />

namespace EMR.Register {

    @Serenity.Decorators.registerClass()
    export class RegvisitsTabGrid extends RegvisitsGrid {
        protected getDialogType() { return RegvisitsTabDialog; }

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
            this.editItem({ Mrid: this.Mrid });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.Mrid;
        }
        private _Mrid: number;

        get Mrid() {
            return this._Mrid;
        }
        set MrId(value: number) {
            if (this._Mrid !== value) {
                this._Mrid = value;
                this.setEquality('Mrid', value);
                this.refresh();
            }
        }
    }
}