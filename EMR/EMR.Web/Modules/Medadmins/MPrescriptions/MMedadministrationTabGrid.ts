/// <reference path="../medadminpatients/medadminpatientsgrid.ts" />

namespace EMR.Medadmins {


    @Serenity.Decorators.registerClass()
    export class MMedadministrationTabGrid extends MedadministrationGrid {
        protected getDialogType() { return MMedadministrationTabDialog; }

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
            this.editItem({ OrderId: this.OrderId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.OrderId;
        }
        private _OrderId: number;

        get OrderId() {
            return this._OrderId;
        }
        set OrderId(value: number) {
            if (this._OrderId !== value) {
                this._OrderId = value;
                this.setEquality('OrderId', value);
                this.refresh();
            }
        }
    }
}