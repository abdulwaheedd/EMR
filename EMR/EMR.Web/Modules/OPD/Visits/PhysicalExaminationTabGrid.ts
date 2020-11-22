﻿/// <reference path="../physicalexamination/physicalexaminationgrid.ts" />
namespace EMR.OPD {

    import fld = PhysicalExaminationRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PhysicalExaminationTabGrid extends PhysicalExaminationGrid {
        protected getDialogType() { return PhysicalExaminationTabDialog; }

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
            this.editItem({ VisitId: this.VisitId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.VisitId;
        }
        private _VisitId: number;

        get VisitId() {
            return this._VisitId;
        }
        set VisitId(value: number) {
            if (this._VisitId !== value) {
                this._VisitId = value;
                this.setEquality('VisitId', value);
                this.refresh();
            }
        }
    }
}