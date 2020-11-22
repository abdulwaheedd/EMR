
namespace EMR.Register {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class RegoutpatientsDialog extends Serenity.EntityDialog<RegoutpatientsRow, any> {
        protected getFormKey() { return RegoutpatientsForm.formKey; }
        protected getIdProperty() { return RegoutpatientsRow.idProperty; }
        protected getLocalTextPrefix() { return RegoutpatientsRow.localTextPrefix; }
        protected getNameProperty() { return RegoutpatientsRow.nameProperty; }
        protected getService() { return RegoutpatientsService.baseUrl; }

        protected form = new RegoutpatientsForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'History',
                cssClass: 'print-preview-button',
                hint: "View all visits",
                onClick: () => {
                    Q.postToService({ url: '/Ver/Patients#edit/' + this.entity.Mrid, request: null, target: '_blank' });
                }
            });
            return buttons;
        }
        private patientVisits: RegvisitsTabGrid;


        private loadedState: string;

        constructor() {
            super();

          

            this.form.DateOfBirth.change(e => {
                this.form.SDateOfBirth.value = convertToShamsi(this.form.DateOfBirth.valueAsDate);
                  //calculate age
                var today = new Date();
                var birthDate = this.form.DateOfBirth.valueAsDate;
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                this.form.AgeInYear.value =age;
            });


            this.form.AgeInYear.change(e => {
                var today = new Date();
                var currYear = today.getFullYear();
                var birthYear = currYear - this.form.AgeInYear.value;
                this.form.DateOfBirth.valueAsDate = new Date(birthYear, 1, 1);
                this.form.SDateOfBirth.value = convertToShamsi(this.form.DateOfBirth.valueAsDate);
            });

            this.form.SDateOfBirth.change(e => {
                this.form.DateOfBirth.valueAsDate = convertToGregorian(this.form.SDateOfBirth.value.toString());
                var today = new Date();
                var birthDate = this.form.DateOfBirth.valueAsDate;
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                this.form.AgeInYear.value = age;
            });


            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.DateOfBirth.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.DateOfBirth.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "Date cannot be bigger than today! Please correct it";
                }
                var today = new Date();
                var birthDate = this.form.DateOfBirth.valueAsDate;
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();

                if(m>4) {
                    age++;
                }
               else if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                if (age > 95) {
                    return "The age cannot be bigger than 95 years. Please verify and correct the date of birth.";
                }
            });


            this.patientVisits = new RegvisitsTabGrid(this.byId('RegvisitsGrid'));
            this.patientVisits.openDialogsAsPanel = true;


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

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

        loadEntity(entity: RegoutpatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Regvisits', this.isNewOrDeleted());

            this.patientVisits.MrId = entity.Mrid;
        }

    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;

