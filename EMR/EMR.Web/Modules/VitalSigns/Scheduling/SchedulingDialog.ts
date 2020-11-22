
namespace EMR.VitalSigns {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class SchedulingDialog extends Serenity.EntityDialog<SchedulingRow, any> {
        protected getFormKey() { return SchedulingForm.formKey; }
        protected getIdProperty() { return SchedulingRow.idProperty; }
        protected getLocalTextPrefix() { return SchedulingRow.localTextPrefix; }
        protected getNameProperty() { return SchedulingRow.nameProperty; }
        protected getService() { return SchedulingService.baseUrl; }

        protected form = new SchedulingForm(this.idPrefix);

        private cyclevisitsGrid: CyclevisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            this.cyclevisitsGrid = new CyclevisitsTabGrid(this.byId('CyclevisitsGrid'));
            this.cyclevisitsGrid.openDialogsAsPanel = true;

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);


            this.form.PlanDate.change(e => {
                this.form.SPlanDate.value = convertToShamsi(this.form.PlanDate.valueAsDate);
            });

            this.form.SPlanDate.change(e => {
                this.form.PlanDate.valueAsDate = convertToGregorian(this.form.SPlanDate.value.toString());
            });

        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: SchedulingRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Cyclevisits', this.isNewOrDeleted());

            this.cyclevisitsGrid.ScheduleId = entity.ScheduleId == null ? null : entity.ScheduleId;
        }
    }
}


declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;