/// <reference path="../cyclevisits/cyclevisitsgrid.ts" />


namespace EMR.VitalSigns {

    @Serenity.Decorators.registerClass()
    export class CyclevisitsTabGrid extends CyclevisitsGrid {
        protected getDialogType() { return CyclevisitsTabDialog; }

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
            this.editItem({ ScheduleId: this.ScheduleId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.ScheduleId;
        }
        private _ScheduleId: number;

        get ScheduleId() {
            return this._ScheduleId;
        }
        set ScheduleId(value: number) {
            if (this._ScheduleId !== value) {
                this._ScheduleId = value;
                this.setEquality('ScheduleId', value);
                this.refresh();
            }
        }
    }
}