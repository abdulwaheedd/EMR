/// <reference path="../cimagings/cimagingsgrid.ts" />

namespace EMR.Verifications {

    @Serenity.Decorators.registerClass()
    export class CimagingsTabGrid extends CimagingsGrid {
        protected getDialogType() { return CimagingsTabDialog; }

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
            this.editItem({ MrId: this.MrId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.MrId;
        }
        private _MrId: number;

        get MrId() {
            return this._MrId;
        }
        set MrId(value: number) {
            if (this._MrId !== value) {
                this._MrId = value;
                this.setEquality('Mrid', value);
                this.refresh();
            }
        }
    }
}