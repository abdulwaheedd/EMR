
namespace EMR.Register {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class RegvisitsDialog extends Serenity.EntityDialog<RegvisitsRow, any> {
        protected getFormKey() { return RegvisitsForm.formKey; }
        protected getIdProperty() { return RegvisitsRow.idProperty; }
        protected getLocalTextPrefix() { return RegvisitsRow.localTextPrefix; }
        protected getNameProperty() { return RegvisitsRow.nameProperty; }
        protected getService() { return RegvisitsService.baseUrl; }

        protected form = new RegvisitsForm(this.idPrefix);
        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Visit Report',
                cssClass: 'print-preview-button',
                hint: "Visit Report",
                onClick: () => {
                    //window.location.href = Q.resolveUrl('~/PReport/Index?VisitId=' + this.entity.VisitId);
                    Q.postToService({ url: '~/VReport/Index?VisitId=' + this.entity.VisitId, request: null, target: '_blank' });
                }
            });

            return buttons;
        }

        private attendantInfo: PatAttendantsTabGrid;


        private loadedState: string;

        constructor() {
            super();

            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.DateOfVisit.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.DateOfVisit.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var oneday = 24 * 60 * 60 * 1000;
                var diff = Math.abs(getDate.getTime() - this.form.DateOfVisit.valueAsDate.getTime());
                var diffdays = Math.ceil(diff / oneday);
                if (diffdays > 1505) {
                    return "The date is too early to enter. Pleae enter a valid date";
                }
            });

            this.attendantInfo = new PatAttendantsTabGrid(this.byId('PatAttendantsGrid'));
            this.attendantInfo.openDialogsAsPanel = true;


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.form.DateOfVisit.change(e => {
                this.form.SDateOfVisit.value = convertToShamsi(this.form.DateOfVisit.valueAsDate);
            });

            this.form.SDateOfVisit.change(e => {
                this.form.DateOfVisit.valueAsDate = convertToGregorian(this.form.SDateOfVisit.value.toString());
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

        loadEntity(entity: RegvisitsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'PatAttendants', this.isNewOrDeleted());

            this.attendantInfo.VisitId = entity.VisitId;
        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;