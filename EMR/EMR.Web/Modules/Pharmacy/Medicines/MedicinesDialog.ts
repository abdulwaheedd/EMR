
namespace EMR.Pharmacy {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class MedicinesDialog extends Serenity.EntityDialog<MedicinesRow, any> {
        protected getFormKey() { return MedicinesForm.formKey; }
        protected getIdProperty() { return MedicinesRow.idProperty; }
        protected getLocalTextPrefix() { return MedicinesRow.localTextPrefix; }
        protected getNameProperty() { return MedicinesRow.nameProperty; }
        protected getService() { return MedicinesService.baseUrl; }

        protected form = new MedicinesForm(this.idPrefix);

        private medicineLossesGrid: MedicinelossesTabGrid;


        private loadedState: string;

        constructor() {
            super()

            var getDate = new Date();
            var todyDate = getDate.getTime();

            this.form.InDate.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.InDate.valueAsDate.getTime();
                if (newDate > todyDate) {
                    return "In Date cannot be bigger than today! Please correct it";
                }
            });

            this.form.ExpiryDate.addValidationRule(this.uniqueName, e => {
                var newDate = this.form.ExpiryDate.valueAsDate.getTime();
                if (newDate < todyDate) {
                    return "Expiry date must be bigger than today! Please correct it";
                }
            });


            this.form.SInDate.change(e => {
                this.form.InDate.valueAsDate = convertToGregorian(this.form.SInDate.value.toString());
            });

            this.form.SExpiryDate.change(e => {
                this.form.ExpiryDate.valueAsDate = convertToGregorian(this.form.SExpiryDate.value.toString());
            });

            this.form.InDate.change(e => {
                this.form.SInDate.value = convertToShamsi(this.form.InDate.valueAsDate);
            });

            this.form.ExpiryDate.change(e => {
                this.form.SExpiryDate.value = convertToShamsi(this.form.ExpiryDate.valueAsDate);
            });

            this.medicineLossesGrid = new MedicinelossesTabGrid(this.byId('MedicinelossesGrid'));
            this.medicineLossesGrid.openDialogsAsPanel = true;

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

        loadEntity(entity: MedicinelossesRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Medicinelosses', this.isNewOrDeleted());

            this.medicineLossesGrid.MedicineId = entity.MedicineId == null ? null : entity.MedicineId;

        }
    }
}

declare function convertToShamsi(date: Date): string;
declare function convertToGregorian(date: string): Date;